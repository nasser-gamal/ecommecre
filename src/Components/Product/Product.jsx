import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addItems, fetchingData } from "../Features/User";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "./Product.css";

const Product = () => {
  const [imgShow, setImageShow] = useState(0);
  const [imgSlider, setImageSLider] = useState(false);
  const [loading, setLoading] = useState(false);

  const { userId } = useParams();
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingData());
  }, []);

  const filter = users?.data.filter((user) => {
    return user.id === parseInt(userId);
  });

  const filterData = filter[0];

  const suggestData = users?.data.filter((data) => {
    return data.category === filterData.category;
  });

  const filterSuggest = suggestData.filter((data) => {
    return data.id !== filterData.id;
  });

  return (
    <div className="product-page">
      {loading && (
        <div className="loading position-fixed d-flex justify-content-center align-items-center">
          <span></span>
        </div>
      )}
      {imgSlider && (
        <div className="img-slider">
          {filter.length > 0 && (
            <div className="image-info">
              <span onClick={() => setImageSLider(false)} className="close">
                <AiOutlineCloseCircle />
              </span>
              <img
                className="img-fluid"
                src={filterData.img[imgShow]}
                alt="Not Found"
              />
            </div>
          )}
        </div>
      )}
      {filter?.length > 0 && (
        <div className="product-page">
          <div className="container">
            <div className="product-details row">
              <div className="image col-12 col-lg-6 d-flex align-items-center align-items-lg-start flex-column-reverse flex-sm-row">
                <div className="image-info row mt-sm-3  ">
                  <div
                    style={{
                      width: "100%",
                    }}
                    className=" p-2 col-8 row flex-row flex-sm-column "
                  >
                    {filterData?.img?.map((img, index) => {
                      return (
                        <div className="col-3 col-sm-12" key={index}>
                          <img
                            onMouseOver={() => {
                              setImageShow(index);
                            }}
                            className={
                              imgShow === index
                                ? "img-fluid changing-img p-1 m-1 hover"
                                : "img-fluid changing-img p-1 m-1"
                            }
                            src={img}
                            alt="Not Found"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="image-prod col-9 text-center">
                  <img
                    className="img-fluid"
                    src={filterData.img[imgShow]}
                    alt="Not Found"
                    onClick={() => setImageSLider(true)}
                  />
                </div>
              </div>
              <div className="text col-8 col-lg-6 mx-auto mt-5 mt-sm-0">
                <h2 className="pb-2">{filterData.title}</h2>
                <div className="pt-3">
                  <div className="table pb-2">
                    <table>
                      <tbody>
                        {filterData.Brand && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">Brand:</span>
                              <span className="span-info">
                                {filterData.Brand && filterData.Brand}
                              </span>
                            </td>
                          </tr>
                        )}
                        {filterData.price && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">price:</span>
                              <span className="span-info">
                                {filterData.price && filterData.price}
                              </span>
                            </td>
                          </tr>
                        )}
                        {filterData.Size && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">Size:</span>
                              <span className="span-info">
                                {filterData.Size && filterData.Size}
                              </span>
                            </td>
                          </tr>
                        )}
                        {filterData.Screensize && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">Screen Size:</span>
                              <span className="span-info">
                                {filterData.Screensize && filterData.Screensize}
                              </span>
                            </td>
                          </tr>
                        )}
                        {filterData.Series && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">Series :</span>
                              <span className="span-info">
                                {filterData.Series && filterData.Series}
                              </span>
                            </td>
                          </tr>
                        )}
                        {filterData.Harddisksize && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">Hard Disk Size :</span>
                              <span className="span-info">
                                {filterData.Harddisksize &&
                                  filterData.Harddisksize}
                              </span>
                            </td>
                          </tr>
                        )}
                        {filterData.OperatingSystem && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">
                                Operating System :
                              </span>
                              <span className="span-info">
                                {filterData.OperatingSystem &&
                                  filterData.OperatingSystem}
                              </span>
                            </td>
                          </tr>
                        )}
                        {filterData.Processorcount && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">Processor Count :</span>
                              <span className="span-info">
                                {filterData.Processorcount &&
                                  filterData.Processorcount}
                              </span>
                            </td>
                          </tr>
                        )}
                        {filterData.Humaninterfaceinput && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">
                                Human inter face input :
                              </span>
                              <span className="span-info">
                                {filterData.Humaninterfaceinput &&
                                  filterData.Humaninterfaceinput}
                              </span>
                            </td>
                          </tr>
                        )}
                        {filterData.Material && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">Material :</span>
                              <span className="span-info">
                                {filterData.Material && filterData.Material}
                              </span>
                            </td>
                          </tr>
                        )}
                        {filterData.Color && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">Color :</span>
                              <span className="span-info">
                                {filterData.Color && filterData.Color}
                              </span>
                            </td>
                          </tr>
                        )}
                        {filterData.Closuretype && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">Closure type :</span>
                              <span className="span-info">
                                {filterData.Closuretype &&
                                  filterData.Closuretype}
                              </span>
                            </td>
                          </tr>
                        )}
                        {filterData.Itemdimensions && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">Item dimensions :</span>
                              <span className="span-info">
                                {filterData.Itemdimensions &&
                                  filterData.Itemdimensions}
                              </span>
                            </td>
                          </tr>
                        )}
                        {filterData.InstalledRAMmemorysize && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">
                                Installed RAM MemorySize :
                              </span>
                              <span className="span-info">
                                {filterData.InstalledRAMmemorysize &&
                                  filterData.InstalledRAMmemorysize}
                              </span>
                            </td>
                          </tr>
                        )}
                        {filterData.Itemweight && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">Item Weight :</span>
                              <span className="span-info">
                                {filterData.Itemweight && filterData.Itemweight}
                              </span>
                            </td>
                          </tr>
                        )}
                        {filterData.Modelyear && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">Model year :</span>
                              <span className="span-info">
                                {filterData.Modelyear && filterData.Modelyear}
                              </span>
                            </td>
                          </tr>
                        )}
                        {filterData.CPUModel && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">CPU Model :</span>
                              <span className="span-info">
                                {filterData.CPUModel && filterData.CPUModel}
                              </span>
                            </td>
                          </tr>
                        )}
                        {filterData.OperatingSystem && (
                          <tr>
                            <td className="d-flex align-items-center">
                              <span className="fw-bold">
                                Operating System :
                              </span>
                              <span className="span-info">
                                {filterData.OperatingSystem &&
                                  filterData.OperatingSystem}
                              </span>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <button
                      onClick={() => {
                        dispatch(addItems(filterData));
                        setLoading(true);
                        setTimeout(() => {
                          setLoading(false);
                        }, 500);
                      }}
                      className="mt-3 btn fw-bold"
                    >
                      Add To Cart
                    </button>
                  </div>
                  <div className="details pt-4">
                    <div className="fw-bold pb-2">About this item</div>
                    <ul>
                      {filterData.body &&
                        filterData.body.map((item, index) => {
                          return (
                            <li className="mt-2 ms-3 ms-sm-0" key={index}>
                              {item}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="suggest-product mt-5 container">
        <div className="text pb-2">
            <span className="px-3 fw-bold">You May Also Like</span>
        </div>
        <div className=" suggest-content gap-2 row mx-0 mt-4">
          
        {
          filterSuggest.map(prod => {
            return (
              <div
              className=" slider-product col-5 col-sm-5 col-md-3 col-lg-2 p-3 mt-3 mt-md-0 mx-auto text-center "
              key={prod.id}
            >
              <NavLink to={`/${prod.id}`}>
                <img
                  className="img-fluid"
                  src={prod.img[0]}
                  alt="Not Found"
                />
                <div className="text">
                  <span className="brand-name">{prod.Brand}</span>
                  <h1>{prod.title.slice(0, 30)}</h1>
                  <span className="price mt-1 d-block">
                    {prod.price}EG
                  </span>
                </div>
              </NavLink>
            </div>
            )
          })
            }
                        </div>
      </div>
    </div>
  );
};

export default Product;
