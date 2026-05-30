import { Header } from "./Header";
import { Footer } from "./Footer";
import { RevealWatcher } from "./RevealWatcher";

export function PageShell({
  children,
  showFooterCta = false,
}: {
  children: React.ReactNode;
  showFooterCta?: boolean;
}) {
  return (
    <>
      <RevealWatcher />
      <Header />
      <main>{children}</main>
      <Footer showFooterCta={showFooterCta} />
    </>
  );
}
