import "./Landing.css";
import { NavLink } from "react-router-dom";

const Landing = () => {

  return (
    <div className='landing'>
      <div className="container">
        <div className="text">
          <h2 className="pt-4 pt-lg-0 fw-bold ">
            Welcome To <span>Pirates Store</span>
          </h2>
          <p className="fs-5 fw-bold">
            Best Store In The <span> Whole World</span>
          </p>
        </div>
        <div className="social">
          
        </div>
      </div>
    </div>
  );
};

export default Landing;
