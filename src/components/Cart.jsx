const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container py-5 cart">
      <h1 className="mb-4 text-center">Shopping Cart</h1>
      <div className="row">
        <div className="col-lg-8">
          {cartItems.length === 0 && <p>Your cart is empty.</p>}
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3 shadow-sm">
              <div className="row g-0 align-items-center">
                <div className="col-md-3">
                  <img
                    src={item.image}
                    className="img-fluid rounded-start"
                    alt={item.name}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text fw-bold">₹{item.price}</p>
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <div className="d-flex flex-column align-items-center">
                    <input
                      type="number"
                      className="form-control mb-2 text-center"
                      value={item.qty}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                    />
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-header bg-dark text-white">Order Summary</div>
            <div className="card-body">
              <p className="d-flex justify-content-between">
                <span>Subtotal</span> <span>₹{subtotal}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Shipping</span> <span>₹{shipping}</span>
              </p>
              <hr />
              <h5 className="d-flex justify-content-between">
                <span>Total</span> <span>₹{total}</span>
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
