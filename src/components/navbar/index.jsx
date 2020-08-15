import React from "react"
import { Link } from "gatsby"
import navStyles from "./navStyles.module.scss"
import cx from "classnames"

const Navbar = () => {
  const arrayLinks = ["Home", "Contact", "Blog"]

  return (
    <nav className="container-fluid">
      <ul className="row mb-0 list-unstyled justify-content-center pt-4 pb-4">
        {arrayLinks.map(element => (
          <li key={element} className="mr-5">
            <Link
              to="/contact"
              activeClassName="font-weight-bold"
              className={navStyles.NavLink}
            >
              {element}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar
