const Products = () => {
  return (
    <div className="album py-3 bg-body-tertiary">
      <div className="container">
        <h1 className="product-heading">Featured Products</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {/* Card 1 */}
          <div className="col">
            <div className="card shadow-sm">
              <img src="kurti.jpeg" className="card-img-top" alt="Product 1" />
              <div className="card-body">
                <p className="card-text">Elegant Kurtis</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button className="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      Add to Cart
                    </button>
                  </div>
                  <small className="text-muted">₹499</small>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="card shadow-sm">
              <img src="jeans.jpeg" className="card-img-top" alt="Product 2" />
              <div className="card-body">
                <p className="card-text">Denim Luxe</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button className="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      Add to Cart
                    </button>
                  </div>
                  <small className="text-muted">₹799</small>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="card shadow-sm">
              <img src="saree.jpeg" className="card-img-top" alt="Product 3" />
              <div className="card-body">
                <p className="card-text">Heritage Sarees</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button className="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      Add to Cart
                    </button>
                  </div>
                  <small className="text-muted">₹699</small>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col">
            <div className="card shadow-sm">
              <img src="tops.jpeg" className="card-img-top" alt="Product 4" />
              <div className="card-body">
                <p className="card-text">Chic Tops</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button className="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      Add to Cart
                    </button>
                  </div>
                  <small className="text-muted">₹399</small>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col">
            <div className="card shadow-sm">
              <img src="skirts.jpeg" className="card-img-top" alt="Product 5" />
              <div className="card-body">
                <p className="card-text">Graceful Skirts </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button className="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      Add to Cart
                    </button>
                  </div>
                  <small className="text-muted">₹649</small>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col">
            <div className="card shadow-sm">
              <img src="suits.jpeg" className="card-img-top" alt="Product 6" />
              <div className="card-body">
                <p className="card-text">Graceful Ethnic Wear</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button className="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      Add to Cart
                    </button>
                  </div>
                  <small className="text-muted">₹999</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
