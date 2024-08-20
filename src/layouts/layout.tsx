import HeaderImage from "../components/common/HeaderImage";
import Footer from "../components/common/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderImage />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
