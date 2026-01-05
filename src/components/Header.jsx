import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute top-0 w-full bg-[#f4f4f4] z-20">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-3">
        <img src="/logo.png" className="h-20" />

        <nav
          className="flex gap-5 ml-40 text-[17px] font-semibold"
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
      </div>
    </header>
  );
};

export default Header;
