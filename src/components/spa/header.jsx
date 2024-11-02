import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="bg-blue-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-white text-2xl font-bold">
            <Link to="/">Spiro Locator</Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/Stations" className="text-white hover:text-gray-200">
              Stations
            </Link>
            <Link to="/about" className="text-white hover:text-gray-200">
              About Us
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
          </nav>

          {/* Call to Action Button */}
          <div>
            <Link
              to="/getstarted"
              className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
