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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap&subset=vietnamese,latin-ext"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <BrokenImageGuard />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
