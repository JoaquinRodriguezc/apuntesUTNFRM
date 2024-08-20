import HeaderImage from "../components/common/HeaderImage"
import Footer from "../components/common/Footer"
 
export default function Layout({ children }) {
  return (
    <>
      <HeaderImage />
      <main>{children}</main>
      <Footer />
    </>
  )
}