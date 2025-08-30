import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Search state

  // Splash screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Add item to cart
  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, qty) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, qty: qty } : item
      )
    );
  };

  if (loading) {
    return (
      <div className="splash-screen">
        <img src="/logo.png" alt="Logo" className="splash-logo" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar
        cartCount={cartItems.length}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/products"
          element={<Products addToCart={addToCart} searchTerm={searchTerm} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
