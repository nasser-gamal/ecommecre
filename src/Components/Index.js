import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./Home/Home";
import Landing from "./Landing/Landing";
import SearchPage from "./SearchPage/SearchPage";
import Navbar from "./NavBar/Navbar";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/q=:userId" element={<SearchPage />} />
          </Routes>
    </BrowserRouter>
  );
}

export default Index;
