import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BiHide, BiShow } from "react-icons/bi";
const data = JSON.parse(localStorage.getItem("users"));
const dataReg = data || [];

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const userNameMat = /[A-Za-z]+\s?[A-Za-z]{5,20}$/g;
const passwordMat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
const emailMat = /^[\w]+@(\w+)\.com/g;

const validationSchema = Yup.object({
  name: Yup.string()
    .required("UserName Is Required")
    .min(6, "At Least 8 Character")
    .matches(userNameMat, "At Least 6 Character(No Numbers)"),
  email: Yup.string()
    .required("Email Is Required")
    .matches(emailMat, "inncorrect Email"),
  password: Yup.string()
    .required("Password Is Required")
    .matches(passwordMat, "[A-za-z][0-9] At Least 8 charcter"),
  confirmPassword: Yup.string()
    .required("confirm Password Is Required")
    .oneOf([Yup.ref("password"), ""], "Password Not Match"),
});

const Register = () => {

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showt, setShowt] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const onSubmit = (values) => {
    dataReg.push(values);
    localStorage.setItem("users", JSON.stringify(dataReg));
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);
      navigate("/Home", { replace: true });
    }, 2000);

    localStorage.setItem(
      "online",
      JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
  };


  return (
    <div className="register-page">
      <div className="register-done alert alert-primary" role="alert">
        <span className="fw-bold">Register Done</span>
      </div>
      <div  className="register">
        <div className="regis">Create account</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <div className="register-info">
                  <div className="input-div mt-2">
                    <label className="mb-1">UserName</label>
                    <Field
                      className={
                        formik.errors.name &&
                        formik.touched.name &&
                        "input-error"
                      }
                      type="text"
                      name="name"
                      placeholder="Your Name"
                    />
                    <ErrorMessage name="name">
                      {(msg) => (
                        <div className="error mt-2 text-center">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="input-div mt-2">
                    <label className="mb-1">Email</label>
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
                  <div className="input-div mt-2">
                    <label className="mb-1">PassWord</label>
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
                  <div className="input-div mt-2">
                    <label className="mb-1">confirm Password</label>
                    <div className="position-relative">
                      <Field
                        style={{ width: "100%" }}
                        className={
                          formik.errors.confirmPassword &&
                          formik.touched.confirmPassword &&
                          "input-error"
                        }
                        name="confirmPassword"
                        type={showt ? "text" : "password"}
                        placeholder="confirmPassword"
                        autoComplete="off"
                      />
                      {showt ? (
                        <BiShow onClick={() => setShowt(false)} />
                      ) : (
                        <BiHide onClick={() => setShowt(true)} />
                      )}
                    </div>
                    <ErrorMessage name="confirmPassword">
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
                    Register
                  </button>
                  <div className='acc-info mt-4'>
                  Already have an account? <NavLink to='/Login'>Sign in</NavLink>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      {showLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Register;
