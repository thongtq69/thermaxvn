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

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";

  const params = new URLSearchParams(window.location.search);
  const queryLocale = params.get("lang");
  if (queryLocale === "vi" || queryLocale === "en") return queryLocale;

  const savedLocale = window.localStorage.getItem(storageKey);
  if (savedLocale === "vi" || savedLocale === "en") return savedLocale;

  return window.navigator.language.toLowerCase().startsWith("vi") ? "vi" : "en";
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
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    setLocaleState(getInitialLocale());
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(storageKey, nextLocale);

    const url = new URL(window.location.href);
    if (nextLocale === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", nextLocale);
    }
    window.history.replaceState({}, "", url);
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
