import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "./navbar"
import headerSyle from "./styling/header.module.scss"

const Header = () => {
  return (
    <div className={headerSyle.header_color}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>
      <Navbar />
    </div>
  )
}
export default Header
