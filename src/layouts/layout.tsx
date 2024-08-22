import HeaderImage from "../components/common/HeaderImage"
import Footer from "../components/common/Footer"
import Head from "next/head"
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen py-5">
      <Head>
        <title>ApuntesUTN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderImage />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
