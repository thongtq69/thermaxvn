import type { Metadata, Viewport } from "next";
import { BrokenImageGuard } from "../components/BrokenImageGuard";
import { LanguageProvider } from "../components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vietnam | Thermax Global",
  description:
    "Explore how Thermax supports Vietnam's industries with sustainable energy, water, air pollution control, and digital solutions.",
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    shortcut: ["/favicon.ico"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <BrokenImageGuard />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
