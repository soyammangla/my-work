import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5 border-top">
      <div className="container">
        <div className="row">
          {/* Logo & Company info */}
          <div className="col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-start">
            <div className="d-flex align-items-center mb-2">
              <span className="fs-5 fw-bold">EasyShop</span>
            </div>
            <p className="small text-light">
              Your one-stop online store for trending fashion, quality products,
              and seamless shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-4 d-flex flex-column align-items-start">
            <h6 className="text-uppercase fw-bold mb-3">Follow Us</h6>
            <div className="d-flex">
              <a
                href="#"
                className="text-light fs-4 me-3"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-light fs-4 me-3"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a href="#" className="text-light fs-4 me-3" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center mt-4 small text-light">
          © 2025 EasyShop, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
