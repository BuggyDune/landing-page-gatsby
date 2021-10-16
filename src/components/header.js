import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ location, siteTitle, menuLinks }) => {
  return (
    <header className="absolute top-0 right-0 left-0">
      <div className="container max-w-screen-xl mx-auto flex justify-between items-center p-5">
        <h1>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div>
          <nav>
            <ul className="flex">
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `white` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
