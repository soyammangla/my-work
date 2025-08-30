const Products = ({ addToCart, searchTerm }) => {
  const productList = [
    { id: 1, name: "Elegant Kurtis", price: 499, image: "kurti.jpeg" },
    { id: 2, name: "Denim Luxe", price: 799, image: "jeans.jpeg" },
    { id: 3, name: "Heritage Sarees", price: 699, image: "saree.jpeg" },
    { id: 4, name: "Chic Tops", price: 399, image: "tops.jpeg" },
    { id: 5, name: "Graceful Skirts", price: 649, image: "skirts.jpeg" },
    { id: 6, name: "Graceful Ethnic Wear", price: 999, image: "suits.jpeg" },
  ];

  // Filter products based on search term
  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-5 products-container">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row g-4">
        {filteredProducts.length === 0 && (
          <p className="text-center">No products found.</p>
        )}
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card shadow-sm h-100">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top product-img"
              />
              <div className="card-body d-flex flex-column">
                <p className="card-text">{product.name}</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <small className="text-muted">₹{product.price}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
