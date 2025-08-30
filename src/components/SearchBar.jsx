import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container d-flex justify-content-between align-items-center page-container">
        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="ms-2 fw-bold">EasyShop</span>
        </Link>

        {/* Nav Links */}
        <ul className="navbar-nav d-flex flex-row mb-0">
          <li className="nav-item me-3">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" to="/login">
              Login/Sign up
            </Link>
          </li>
        </ul>

        {/* Simple Search Bar */}
        <form className="d-flex searchbar" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search products..."
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
