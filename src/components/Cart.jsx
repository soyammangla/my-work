const Cart = () => {
  return (
    <div className="container py-5 cart">
      <h1 className="mb-4 text-center">Shopping Cart</h1>
      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8 col-md-7">
          {/* Cart Item */}
          <div className="card mb-3 shadow-sm">
            <div className="row g-0 align-items-center">
              <div className="col-md-3">
                <img
                  src="https://picsum.photos/150"
                  className="img-fluid rounded-start"
                  alt="Product"
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">Product Name</h5>
                  <p className="card-text text-muted">Short description here</p>
                  <p className="card-text fw-bold">₹499</p>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <input
                    type="number"
                    className="form-control mb-2 text-center"
                    defaultValue="1"
                    min="1"
                  />
                  <button className="btn btn-danger btn-sm">Remove</button>
                </div>
              </div>
            </div>
          </div>
          {/* Another Cart Item */}
          <div className="card mb-3 shadow-sm">
            <div className="row g-0 align-items-center">
              <div className="col-md-3">
                <img
                  src="https://picsum.photos/150"
                  className="img-fluid rounded-start"
                  alt="Product"
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">Another Product</h5>
                  <p className="card-text text-muted">Description here</p>
                  <p className="card-text fw-bold">₹299</p>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <input
                    type="number"
                    className="form-control mb-2 text-center"
                    defaultValue="2"
                    min="1"
                  />
                  <button className="btn btn-danger btn-sm">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Order Summary */}
        <div className="col-lg-4 col-md-5">
          <div className="card shadow-sm">
            <div className="card-header bg-dark text-white">Order Summary</div>
            <div className="card-body">
              <p className="d-flex justify-content-between">
                <span>Subtotal</span> <span>₹1297</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Shipping</span> <span>₹50</span>
              </p>
              <hr />
              <h5 className="d-flex justify-content-between">
                <span>Total</span> <span>₹1347</span>
              </h5>
              <button className="btn btn-success w-100 mt-3">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
