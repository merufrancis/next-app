import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout