import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Homee/Home";
import Landing from "./Components/Landing/Landing";
import SearchPage from "./Components/SearchPage/SearchPage";
import Navbar from "./Components/NavBar/Navbar";
import Register from "./Components/Form/Register/Register";
import { useEffect } from "react";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Form/Login/Login";
import Product from "./Components/Product/Product";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";


const App = () => {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId" element={<Product />} />
        <Route path="/q=:userId" element={<SearchPage />} />
        <Route
          path="/Register"
          element={
              <Register />
          }
        />
        <Route
          path="/Login"
          element={
              <Login />
          }
        />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
