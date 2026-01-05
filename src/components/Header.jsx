import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 w-full bg-[#f4f4f4] z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <img src="/logo.png" className="h-16 md:h-20" alt="Logo" />

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex gap-5 ml-40 text-[17px] font-semibold"
          style={{ fontFamily: "Martel Sans, sans-serif" }}
        >
          <NavLink to="/" className={({isActive}) =>
            isActive ? "bg-[#b40800] text-white px-3 py-1.5 rounded" : "px-3 py-1.5"
          }>Home</NavLink>

          <NavLink to="/about" className={({isActive}) =>
            isActive ? "bg-[#b40800] text-white px-3 py-1.5 rounded" : "px-3 py-1.5"
          }>About Us</NavLink>

          <NavLink to="/retreats" className={({isActive}) =>
            isActive ? "bg-[#b40800] text-white px-3 py-1.5 rounded" : "px-3 py-1.5"
          }>Immersions & Retreats</NavLink>

          <NavLink to="/ashram" className={({isActive}) =>
            isActive ? "bg-[#b40800] text-white px-3 py-1.5 rounded" : "px-3 py-1.5"
          }>Ashram</NavLink>

          <NavLink to="/teachers" className={({isActive}) =>
            isActive ? "bg-[#b40800] text-white px-3 py-1.5 rounded" : "px-3 py-1.5"
          }>Teachers</NavLink>

          <NavLink to="/contact" className={({isActive}) =>
            isActive ? "bg-[#b40800] text-white px-3 py-1.5 rounded" : "px-3 py-1.5"
          }>Contact Us</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#b40800]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav
          className="md:hidden absolute top-full left-0 w-full bg-[#f4f4f4] shadow-lg flex flex-col items-center gap-4 py-6 text-[18px] font-semibold z-40"
          style={{ fontFamily: "Martel Sans, sans-serif" }}
        >
          <NavLink 
            to="/" 
            className="w-full text-center py-2 hover:bg-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className="w-full text-center py-2 hover:bg-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/retreats" 
            className="w-full text-center py-2 hover:bg-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Immersions & Retreats
          </NavLink>
          <NavLink 
            to="/ashram" 
            className="w-full text-center py-2 hover:bg-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Ashram
          </NavLink>
          <NavLink 
            to="/teachers" 
            className="w-full text-center py-2 hover:bg-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Teachers
          </NavLink>
          <NavLink 
            to="/contact" 
            className="w-full text-center py-2 hover:bg-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
