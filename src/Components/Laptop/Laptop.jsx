import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchingData } from "../Features/User";
import { NavLink } from "react-router-dom";
const Laptop = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const filter = users.users.data.filter((data) => {
    return data.category === "laptop";
  });
  useEffect(() => {
    dispatch(fetchingData());
  }, []);

  return (
    <>
      <div className="laptop pt-3">
        <div className="container">
          <div className="content mt-2">
          <div className="content-info d-flex justify-content-between align-items-center  mb-2">
              <h2 className="fs-5 fw-bold position-relative mb-3 ">Laptop</h2>
                <NavLink className='me-2' to='/'>More</NavLink>
          </div>
            {users.loading && (
              <div className="loading">
                <span></span>
              </div>
            )}
            <div className="new-content row text-center  gap-1">
              {filter &&
                filter.slice(0, 5).map((prod) => {
                  return (
                    <div
                      className="slider-product col-5 col-sm-5 col-md-3 col-lg-2 p-3 mt-3 mt-md-0 mx-auto "
                      key={prod.id}
                    >
                      <NavLink to={`/${prod.id}`}>
                        <img
                          className="img-fluid"
                          src={prod.img[0]}
                          alt="Not Found"
                        />
                        <div className="text mt-2">
                          <span className="brand-name">{prod.Brand}</span>
                          <h1>{prod.title.slice(0, 30)}</h1>
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
export default Laptop;
