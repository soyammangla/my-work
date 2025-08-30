import { useEffect } from "react";
import "./Splash.css";
import logo from "./logo.png"; // apna logo import karo

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // 2 sec baad main site open
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <img src={logo} alt="EasyShop Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
