import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { fetchingData } from "../Features/User";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [filterData, setFilterData] = useState();
  const [search, setSearch] = useState();
  const [hideSearch, SetHideSearch] = useState(false);


  const user = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const handleResults = (event) => {
    setSearch(event.target.value);
    const search = event.target.value;
    const results = user.data.filter((data) => {
      return data.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilterData(results.slice(0, 6));
    if (search === "") {
      setFilterData();
    }
    event.value !== "" && SetHideSearch(false);
  };

  const input = useRef(null);

  useEffect(() => {
    dispatch(fetchingData());
  }, []);

  return (
    <nav>
      <div className="navbar">
        <div className="container">
          <div className="navbar-info d-flex align-items-center">
            <NavLink to="/" className="navbar-brand logo">
              Pirates
              <span>.eg</span>
            </NavLink>
          </div>
          <div className="navbar-nav mb-2 mb-lg-0 d-flex flex-row">
            <div className="search">
              <label htmlFor="inpu" hidden >search</label>
              <input id="inpu" ref={input} type="text" onChange={handleResults} />
              <span className="d-flex justify-content-center align-items-center position-absolute">
                <AiOutlineSearch />
              </span>
              {filterData && (
                <div
                  className={
                    hideSearch
                      ? "hide search-bar posiiton-absolute"
                      : "search-bar posiiton-absolute"
                  }
                >
                  <ul>
                    {filterData?.map((data) => {
                      return (
                        <li key={data.id}>
                          <NavLink
                            to={`/${data.id}`}
                            className=" d-block"
                            onClick={() => {
                              SetHideSearch(true);
                              input.current.value = "";
                            }}
                          >
                            <div className="results p-2 ">
                              <img
                                className="img-fluid"
                                src={data.img[0]}
                                alt="not found"
                              />
                              <span className="mx-3">
                                {data.title.slice(0, 45)}
                              </span>
                            </div>
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                  <li>
                    <NavLink
                      to={`/q=${search}`}
                      onClick={() => {
                        SetHideSearch(true);
                        input.current.value = "";
                      }}
                    >
                      <div className="results  p-2 more">
                        <AiOutlineSearch />
                        More About {search}
                      </div>
                    </NavLink>
                  </li>
                </div>
              )}
            </div>
          </div>
          <div className=" mb-2 mb-lg-0 info">
            <div className="shopping-cart">
              <NavLink to="/Cart" className="position-relative d-block">
                <RiShoppingCart2Line />
                <div className="cart-number">
                  <span className="d-flex justify-content-center align-items-center">
                    {user.cart.length}
                  </span>
                </div>
              </NavLink>
            </div>
            <div className="text">
            <NavLink to="/Login">
                  <div className="sign">Sign in / Register</div>
                </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
