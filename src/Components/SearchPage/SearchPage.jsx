import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {  fetchingData } from "../Features/User";


import "./SearchPage.css";

const SearchPage = () => {
  const [loading, setLoading] = useState(false);

  const { userId } = useParams();
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingData());
  }, []);

  const filterSearch = users?.data.filter((user) => {
    return user.title?.toLowerCase().includes(userId.toLocaleLowerCase());
  });


  return (
    <div className="search-page position-relative container">
      {loading && (
        <div className="loading position-fixed d-flex justify-content-center align-items-center">
          <span></span>
        </div>
      )}
      {filterSearch.length > 0 ? (
        <>
          <div className="result mt-4 px-5 fw-bold fs-4 ">Results For <span>{userId}</span></div>
          <div className="search-info text-center  mt-3 mx-0">
            {filterSearch.map((data) => {
              return (
                <div
                  className="product p-3 m-auto mt-4"
                  key={data.id}
                >
                  <NavLink to={`/${data.id}`}>
                    <img
                      className="img-fluid"
                      src={data.img[0]}
                      alt="Not Found"
                    />
                    <div className="text mt-3">
                      <span className="brand-name">{data.Brand}</span>
                      <h1>{data.title.slice(0, 30)}</h1>
                      <span className="price mt-1 d-block">{data.price}EG</span>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </>
      ) : (
          <div  className='no-result fw-bold text-center'>
        <div>No Result For  <span>{userId}</span></div>
          </div>
      )}
    </div>
  );
};

export default SearchPage;
