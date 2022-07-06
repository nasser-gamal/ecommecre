import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchingData } from "../Features/User";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "./Trending.css";

const NewProducts = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const filter = users.users.data;

  useEffect(() => {
    dispatch(fetchingData());
  }, []);

  const [translate, setTranslate] = useState(0);

  return (
    <>
      <div className="new-products pt-5">
        <div className="container">
          <div className="content">
            <div className=" content-info d-flex justify-content-between mb-2">
              <h2 className="fs-4 fw-bold position-relative">Trending</h2>
              <div className="slider-btn mb-2">
                <span
                  className={
                    translate === 0 ? "un-clicked prev fs-4 mx-2" : " prev fs-4 mx-2"
                  }
                  onClick={() => {
                    if (translate !== 0) {
                      setTranslate((translate) => translate - -250);
                    }
                  }}
                >
                  <MdKeyboardArrowLeft className="  d-flex justify-content-center align-items-center" />
                </span>
                <span
                  className={
                    translate === -1000
                      ? "un-clicked next fs-4 mx-1"
                      : " next fs-4 mx-1"
                  }
                  onClick={() => {
                    if (translate !== -1000) {
                      setTranslate((translate) => translate + -250);
                    }
                  }}
                >
                  <MdKeyboardArrowRight className="  d-flex justify-content-center align-items-center" />
                </span>
              </div>
            </div>
            {users.loading && (
              <div className="loading">
                <span></span>
              </div>
            )}
            <div
              className="trending new-content text-center"
              style={{
                transform: `translateX(${translate}px)`,
                transition: "1s",
              }}
            >
              {filter &&
                filter.slice(0, 8).map((prod) => {
                  return (
                    <div className="slider-product  p-3 mt-3 mt-md-0 m-auto" key={prod.id}>
                      <NavLink to={`/${prod.id}`} >
                        <img
                          className="img-fluid"
                          src={prod.img[0]}
                          alt="Not Found"
                        />
                        <div className="text mt-3">
                          <span className="brand-name">{prod.Brand}</span>
                          <h1>{prod.title.slice(0, 25)}</h1>
                          <span className="price mt-1 d-block">
                            {prod.price}EG
                          </span>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewProducts;
