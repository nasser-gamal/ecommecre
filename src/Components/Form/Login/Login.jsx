import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BiHide, BiShow, BiRightArrow, BiDownArrow } from "react-icons/bi";

const data = JSON.parse(localStorage.getItem("users"));
const dataReg = data || [];

const initialValues = {
  email: "",
  password: "",
};

const userNameMat = /[A-Za-z]+\s?[A-Za-z]{5,20}$/g;
const passwordMat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
const emailMat = /^[\w]+@(\w+)\.com/g;

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email Is Required")
    .matches(emailMat, "inncorrect Email"),
  password: Yup.string()
    .required("Password Is Required")
    .matches(passwordMat, "[A-za-z][0-9] At Least 8 charcter"),
});

const Login = () => {

  const [show, setShow] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [help, setHelp] = useState(false);
  const onSubmit = (values) => {
    dataReg.push(values);
    setShowLoading(true);

 

  };


  return (
    <div className="login-page">
      <div className="login-done alert alert-primary" role="alert">
        <span className="fw-bold">login Done</span>
      </div>
      <div className="login-content">
        <div className="login">
          <div className="sign">Sign-In</div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <div className="login-info">
                    <div className="input-div mt-3">
                      <label className="mb-2">Email</label>
                      <Field
                        className={
                          formik.errors.email &&
                          formik.touched.email &&
                          "input-error"
                        }
                        type="email"
                        name="email"
                        placeholder="Your Eamil"
                      />
                      <ErrorMessage name="email">
                        {(msg) => (
                          <div className="error mt-2 text-center">{msg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="input-div mt-3">
                      <label className="mb-2">Password</label>
                      <div className="position-relative">
                        <Field
                          style={{ width: "100%" }}
                          className={
                            formik.errors.password &&
                            formik.touched.password &&
                            "input-error"
                          }
                          type={show ? "text" : "password"}
                          name="password"
                          placeholder="Your Password"
                          autoComplete="off"
                        />
                        {show ? (
                          <BiShow onClick={() => setShow(false)} />
                        ) : (
                          <BiHide onClick={() => setShow(true)} />
                        )}
                      </div>
                      <ErrorMessage name="password">
                        {(msg) => (
                          <div className="error mt-2 text-center">{msg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <button
                      // disabled={!(formik.dirty && formik.isValid)}
                      className="btn mt-4"
                      type="submit"
                    >
                      Login
                    </button>
                    <div className="help mt-3" onClick={() => setHelp(!help)}>
                      {
                        help ? <BiDownArrow /> : <BiRightArrow /> 
                      }
                      <span className="ms-2">Need help?</span>
                    </div>
                    {help && (
                      <div className="help-info mt-2 ms-3">
                        <NavLink className="d-block" to="/">
                          Forgot your password?
                        </NavLink>
                        <NavLink to="/">Other issues with Sign-In</NavLink>
                      </div>
                    )}
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div className="new-acc position-relative my-3 text-center">
          New to Pirates?
        </div>
        <NavLink to="/Register">
          <button className="p-1">Create your Pirates account</button>
        </NavLink>
      </div>
      {showLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Login;
