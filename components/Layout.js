import Meta from './Meta'
import Nav from './Nav'
import { useState } from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Meta />
      <Nav />
      <div>
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout