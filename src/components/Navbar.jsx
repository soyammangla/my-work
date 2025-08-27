import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container d-flex justify-content-between align-items-center page-container">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          <h3>EasyShop</h3>
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
        </ul>
        {/* Search Bar */}
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
