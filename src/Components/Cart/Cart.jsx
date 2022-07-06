import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteItems } from "../Features/User";
import "./Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  return (
    <div className="cart-page">
      {users.cart.length < 1 ? (
        <div className="empty-cart fw-bold d-flex justify-content-center align-items-center">
          <div className="empty-info">
          <span className="d-block">Your Cart Is Empty</span>
          <NavLink to='/' className='d-block text-center'>
            <button className="btn m-auto">Shopping Now</button>
          </NavLink>
        </div>
        </div>
      ) : (
          <div className="carts  container flex-column   gap-4">
          <div className="carts-info m-auto">
            {users.cart.map((user) => {
              return (
                <div className="cart d-flex align-items-center flex-column flex-md-row" key={user.id}>
                  <img
                    className="img-fluid"
                    src={user.img[0]}
                    alt="Not Found"
                  />
                  <div className="info ms-5 ">
                    <div className="text d-flex  align-items-center justify-content-between flex-column flex-md-row">
                      <h5 className="mt-4 text-center text-sm-start">{user.title}</h5>
                      <span> {user.price}EG</span>
                    </div>
                    <div className="reverse d-flex align-items-center justify-content-between mt-2">
                      <span>Brand: {user.Brand}</span>
                      <span>Quenitiy: {user.qnt}</span>
                      <div className="btns">
                        <button
                          className="btn me-2"
                          onClick={() => dispatch(deleteItems(user.id))}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
            <div className="checkout text-center mt-5 mx-auto">
                <button className="btn mt-4">CheckOut</button>
            </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
