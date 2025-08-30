import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5 border-top">
      <div className="container">
        <div className="row">
          {/* Brand Info */}
          <div className="col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-start">
            <span className="fs-5 fw-bold mb-2">EasyShop</span>
            <p className="small text-light">
              Your one-stop online store for trending fashion, quality products,
              and seamless shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 mb-md-0 quick-links text-end">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-light text-decoration-none"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-4 d-flex flex-column align-items-end follow-us">
            <h6 className="text-uppercase fw-bold mb-3">Follow Us</h6>
            <div className="d-flex">
              <a
                href="https://www.instagram.com/soyam_mangla/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4 me-3"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/soyam1134"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4 me-3"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 small text-light">
          © 2025 EasyShop, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
