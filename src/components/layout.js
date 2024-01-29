import React from "react"
import "../pages/mystyles.scss"
import Navbar from "../components/NavBar"
import { Script } from "gatsby"

const Layout = ( {pgaeTitle, children} ) => {
  return (
    <div>
      <Script id="fontawesome" src="https://kit.fontawesome.com/a8daa7596f.js" crossorigin="anonymous" />
      <Navbar/>
      {children}
    </div>
  )
}

export default Layout
