"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { type Locale, normalizeText, translate } from "../lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (value: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const storageKey = "thermax-language";

function getSavedLocale(): Locale | null {
  try {
    const savedLocale = window.localStorage?.getItem(storageKey);
    return savedLocale === "vi" || savedLocale === "en" ? savedLocale : null;
  } catch {
    return null;
  }
}

function saveLocale(locale: Locale) {
  try {
    window.localStorage?.setItem(storageKey, locale);
  } catch {
    // Some embedded browsers block storage; language switching should still work.
  }

  try {
    document.cookie = `${storageKey}=${locale}; path=/; max-age=31536000; samesite=lax`;
  } catch {
    // Cookie persistence is only used to help server-rendered pages keep the selected language.
  }
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "vi";

  const params = new URLSearchParams(window.location.search);
  const queryLocale = params.get("lang");
  if (queryLocale === "vi" || queryLocale === "en") return queryLocale;

  const savedLocale = getSavedLocale();
  if (savedLocale) return savedLocale;

  return "vi";
}

function preserveSpacing(original: string, translated: string) {
  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

function shouldSkipNode(node: Node) {
  const parent = node.parentElement;
  if (!parent) return true;
  if (parent.closest("[data-no-translate]")) return true;
  return Boolean(parent.closest("script, style, noscript, svg, code, pre, video"));
}

function translateDom(locale: Locale) {
  const root = document.body;
  if (!root) return;

  const walker = document.createTreeWalker(root, window.NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (shouldSkipNode(node)) return window.NodeFilter.FILTER_REJECT;
      return normalizeText(node.textContent ?? "") ? window.NodeFilter.FILTER_ACCEPT : window.NodeFilter.FILTER_REJECT;
    },
  });

  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);

  nodes.forEach((node) => {
    const translatableNode = node as Text & { __i18nOriginal?: string };
    const current = translatableNode.textContent ?? "";
    if (!translatableNode.__i18nOriginal && locale !== "en" && translate(current, locale) === current) {
      return;
    }
    const original = translatableNode.__i18nOriginal ?? current;
    translatableNode.__i18nOriginal = original;
    const translated = translate(original, locale);
    const nextValue = locale === "en" ? original : preserveSpacing(original, translated);
    if (translatableNode.textContent !== nextValue) {
      translatableNode.textContent = nextValue;
    }
  });

  document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[placeholder]").forEach((element) => {
    const original = element.dataset.i18nPlaceholder ?? element.getAttribute("placeholder") ?? "";
    element.dataset.i18nPlaceholder = original;
    element.placeholder = translate(original, locale);
  });

  document.querySelectorAll<HTMLElement>("[aria-label]").forEach((element) => {
    if (element.closest("[data-no-translate]")) return;
    const original = element.dataset.i18nAriaLabel ?? element.getAttribute("aria-label") ?? "";
    element.dataset.i18nAriaLabel = original;
    element.setAttribute("aria-label", translate(original, locale));
  });
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("vi");

  useEffect(() => {
    setLocaleState(getInitialLocale());
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    saveLocale(nextLocale);

    const url = new URL(window.location.href);
    if (nextLocale === "vi") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", "en");
    }
    window.location.href = url.toString();
  }, []);

  const t = useCallback((value: string) => translate(value, locale), [locale]);

  useEffect(() => {
    document.documentElement.lang = locale === "vi" ? "vi" : "en";
    document.documentElement.dataset.language = locale;
    translateDom(locale);

    let frame = 0;
    const observer = new MutationObserver(() => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => translateDom(locale));
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [locale]);

  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!target || target.target || target.hasAttribute("download")) return;

      const rawHref = target.getAttribute("href");
      if (!rawHref || rawHref.startsWith("#") || /^(mailto:|tel:|sms:|javascript:)/i.test(rawHref)) return;

      const url = new URL(rawHref, window.location.href);
      if (url.origin !== window.location.origin) return;

      if (locale === "en") {
        url.searchParams.set("lang", "en");
      } else {
        url.searchParams.delete("lang");
      }

      if (url.toString() !== target.href) {
        event.preventDefault();
        window.location.href = url.toString();
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
