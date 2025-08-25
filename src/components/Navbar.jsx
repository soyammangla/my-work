const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          <h3>EasyShop</h3>
        </a>

        <ul className="navbar-nav d-flex flex-row mb-0">
          <li className="nav-item me-3">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link" href="#">
              Products
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link" href="#">
              Cart
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact Us
            </a>
          </li>
        </ul>

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
