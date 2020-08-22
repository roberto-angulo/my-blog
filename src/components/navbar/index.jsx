import React from "react"
import { Link } from "gatsby"
import navStyles from "./navStyles.module.scss"

const Navbar = () => {
  const arrayLinks = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
  ]

  return (
    <nav className="container-fluid">
      <ul className="row mb-0 list-unstyled justify-content-end pt-4 pb-4">
        {arrayLinks.map(element => (
          <li key={element} className="mr-5">
            <Link
              to={element.link}
              activeClassName="font-weight-bold"
              className={navStyles.NavLink}
            >
              {element.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar
