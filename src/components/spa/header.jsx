import { Link } from "react-router-dom";
import logo from '../../assets/hero-removebg-preview.png'

function Header() {
  return (
    <div>
      <header className="bg-background text-text p-4 shadow-secondary">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-white lg:text-2xl text-md font-bold">
            <Link to="/">
              <img src={logo} alt="" className="h-24 inline-flex"/>
              Spiro Locator
              </Link>
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
