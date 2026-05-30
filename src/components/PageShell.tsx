import { Header } from "./Header";
import { Footer } from "./Footer";
import { RevealWatcher } from "./RevealWatcher";
import { BrokenImageGuard } from "./BrokenImageGuard";

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
      <BrokenImageGuard />
      <Header />
      <main>{children}</main>
      <Footer showFooterCta={showFooterCta} />
    </>
  );
}
