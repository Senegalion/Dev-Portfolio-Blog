import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white dark:bg-gray-800 shadow z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          My Portfolio
        </h1>
        <div className="flex gap-8 text-gray-700 dark:text-gray-200 text-lg">
          <Link
            to="/"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Blog
          </Link>
          <Link to="/about">About Me</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
