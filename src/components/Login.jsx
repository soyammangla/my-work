import { useState } from "react";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <div className="p-4 border rounded" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">{isSignup ? "Sign Up" : "Login"}</h3>

        <form>
          {isSignup && (
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" required />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>

          <button type="submit" className="btn btn-dark w-100">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <hr />

        {/* Dummy Google Login */}
        <button
          className="btn btn-outline-danger w-100 mb-3"
          onClick={() => alert("Google Login (dummy)")}
        >
          <i className="bi bi-google me-2"></i>
          Continue with Google
        </button>

        <p className="text-center mb-0">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
