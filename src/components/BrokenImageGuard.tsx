"use client";

import { useEffect } from "react";

const fallbackMap: Array<[string, string]> = [
  ["decarbonisation-img.jpg", "/assets/sustainability/decarbonisation-img.jpg"],
  ["Driving-icon1.svg", "/assets/sustainability/driving-icon1.svg"],
  ["roadmapImg.jpg", "/assets/sustainability/roadmap-img.jpg"],
  ["grow-big-arrow.png", "/assets/sustainability/grow-big-arrow.png"],
  ["down-big-arrow.png", "/assets/sustainability/down-big-arrow.png"],
  ["wastemanagementBanner.jpg", "/assets/sustainability/waste-management-banner.jpg"],
  ["wastemanagementBannericon.svg", "/assets/sustainability/waste-management-icon.svg"],
  ["Biodiversitybanner.jpg", "/assets/sustainability/biodiversity-banner.jpg"],
  ["Biodiversityicon.svg", "/assets/sustainability/biodiversity-icon.svg"],
  ["lab-icon1.svg", "/assets/sustainability/lab-icon1.svg"],
  ["biothumb.jpg", "/assets/sustainability/bio-thumb.jpg"],
  ["watermanagementBanner.jpg", "/assets/sustainability/water-management-banner.jpg"],
  ["watericon.svg", "/assets/sustainability/water-icon.svg"],
  ["asset-work-flow-pic.png", "/assets/digital/asset-work-flow-pic.png"],
  ["digi-edge-live-ai.jpg", "/assets/digital/digi-edge-live-ai.jpg"],
  ["edge-live-operations.jpg", "/assets/digital/edge-live-operations.jpg"],
  ["digital-awards-1.jpg", "/assets/digital/digital-awards-1.jpg"],
  ["digital-awards-2.jpg", "/assets/digital/digital-awards-2.jpg"],
];

const defaultFallback =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='700' viewBox='0 0 1200 700'%3E%3Crect width='1200' height='700' fill='%23eef2f4'/%3E%3Crect x='508' y='250' width='78' height='190' fill='%23ed3438'/%3E%3Crect x='610' y='250' width='78' height='190' fill='%23ed3438'/%3E%3Ctext x='600' y='492' fill='%23070707' font-family='Arial,sans-serif' font-size='46' font-weight='700' text-anchor='middle'%3ETHERMAX%3C/text%3E%3C/svg%3E";

function resolveFallback(src: string) {
  return fallbackMap.find(([needle]) => src.includes(needle))?.[1] ?? defaultFallback;
}

export function BrokenImageGuard() {
  useEffect(() => {
    const applyFallback = (target: HTMLImageElement) => {
      if (target.dataset.fallbackApplied === "true") {
        return;
      }

      const fallback = resolveFallback(target.currentSrc || target.src);

      target.dataset.fallbackApplied = "true";
      target.dataset.imageFallback = "true";
      target.removeAttribute("srcset");
      target.closest("picture")?.querySelectorAll("source").forEach((source) => {
        source.srcset = fallback;
      });
      target.src = fallback;
    };

    const handleImageError = (event: Event) => {
      const target = event.target;

      if (!(target instanceof HTMLImageElement)) {
        return;
      }

      applyFallback(target);
    };

    const scanBrokenImages = () => {
      document.querySelectorAll("img").forEach((image) => {
        if (image.complete && (image.naturalWidth === 0 || image.naturalHeight === 0)) {
          applyFallback(image);
        }
      });
    };

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLImageElement) {
            if (node.complete && (node.naturalWidth === 0 || node.naturalHeight === 0)) {
              applyFallback(node);
            }
          } else if (node instanceof HTMLElement) {
            node.querySelectorAll("img").forEach((image) => {
              if (image.complete && (image.naturalWidth === 0 || image.naturalHeight === 0)) {
                applyFallback(image);
              }
            });
          }
        });
      }
    });

    document.addEventListener("error", handleImageError, true);
    scanBrokenImages();
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("error", handleImageError, true);
      observer.disconnect();
    };
  }, []);

  return null;
}
