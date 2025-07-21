import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white dark:bg-gray-800 shadow z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          My Portfolio
        </h1>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 dark:text-gray-200 text-lg">
          <Link className="hover:text-blue-500" to="/">
            Home
          </Link>
          <Link className="hover:text-blue-500" to="/portfolio">
            Portfolio
          </Link>
          {/* <Link className="hover:text-blue-500" to="/blog">
            Blog
          </Link> */}
          <Link className="hover:text-blue-500" to="/certifications">
            Certifications
          </Link>
          <Link className="hover:text-blue-500" to="/about">
            About Me
          </Link>

          {/* User section
          {user ? (
            <div className="flex items-center space-x-3">
              <FaUserCircle className="text-indigo-600 dark:text-white text-2xl" />
              <span className="text-gray-900 dark:text-gray-100">{user}</span>
              <button
                onClick={logout}
                className="text-red-500 hover:underline ml-2"
                aria-label="Logout"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="hover:text-blue-500 border border-blue-500 rounded px-3 py-1"
            >
              Login
            </Link>
          )} */}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-white text-2xl"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">
            Home
          </Link>
          <Link
            to="/portfolio"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Portfolio
          </Link>
          {/* <Link to="/blog" onClick={() => setIsOpen(false)} className="block">
            Blog
          </Link> */}
          <Link
            to="/certifications"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Certifications
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block">
            About Me
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
