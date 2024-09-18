import Footer from "../components/common/Footer";
import Head from "next/head";
import NavBar from "../components/common/NavBar";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>ApuntesUTN</title>
        <meta name="description" content="Apuntes de la UTN Mendoza y recursos para estudiantes. Encuentra el material necesario para el cursado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

