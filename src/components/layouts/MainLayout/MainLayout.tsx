import Footer from "./Footer";
import Header from "./Header";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <main className="p-8 max-w-2xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
