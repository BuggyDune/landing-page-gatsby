import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ location, siteTitle, menuLinks }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <header className="absolute top-0 right-0 left-0">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container max-w-screen-xl mx-auto px-4 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="font-bold inline-block mr-4 py-2 whitespace-nowrap text-white"
              href="#pablo"
            >
              {siteTitle}
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                "X"
              ) : (
                <svg fill="#fff" viewBox="0 0 80 70" width="20" height="30">
                  <rect width="90" height="10"></rect>
                  <rect y="30" width="50" height="10"></rect>
                  <rect y="60" width="50" height="10"></rect>
                </svg>
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex bg-blue-700" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {menuLinks.map(link => (
                <li key={link.name} className="nav-item">
                  <Link
                    className="px-5 py-4 md:py-3 flex items-center font-medium leading-snug text-white hover:opacity-75"
                    to={link.link}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
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
