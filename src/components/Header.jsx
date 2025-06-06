// Header.jsx
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = ({ searchQuery, setSearchQuery, handleSearch }) => {
  const { pathname } = useLocation();

  const navItems = [
    { label: "Home", path: "/home" },
    { label: "Watchlist", path: "/watchlist" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="header-wrapper border-theme-border bg-theme-card px-6 py-4">
      <div className="header-left">
        <Link to="/home">
          <img
            height="150px"
            width="150px"
            src="Gitrank_logo_small.svg"
            alt="Gitrank </>"
          />
        </Link>
      </div>

      <div className="header-center">
        {navItems.map(({ label, path }) => (
          <Link
            key={path}
            to={path}
            className={`nav-link ${
              pathname === path ? "active text-white font-semibold" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Pass controlled state */}
      <SearchBar
        query={searchQuery}
        setQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
    </nav>
  );
};

export default Header;
