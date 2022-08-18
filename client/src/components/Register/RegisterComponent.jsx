import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Register.css";
import { theme } from "../../theme";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../actions/auth";
import { useDispatch } from "react-redux";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterComponent = () => {
  const [authInfo, setAuthInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setAuthInfo({ ...authInfo, [input.name]: input.value });
    console.log(authInfo);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
        console.log(authInfo);
        dispatch(register(authInfo, navigate));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box>
        <div class="ptb-80">
          <Box sx={{ width: "100%", m: "auto", textAlign: "center", mb: 5 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.primary.main,
              }}
            >
              REGISTER
            </Typography>
            <div
              className="darkbar"
              style={{ margin: "auto", marginTop: "20px" }}
            ></div>
          </Box>
          <div class="container">
            <div
              class="auth-form"
              style={{ backgroundColor: theme.palette.background.default }}
            >
              <div class="auth-head">
                <a href="index.html">{/* <img src="assets/img/logo.png"> */}</a>
                <p>Create a new account</p>
              </div>
              <form onSubmit={submitHandler}>
                <div class="mb-3">
                  <label class="form-label">E-mail</label>
                  <input
                    name="email"
                    type="email"
                    class="form-control"
                    value={authInfo.email}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input
                    name="password"
                    type="password"
                    class="form-control"
                    value={authInfo.password}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Confirm Password</label>
                  <input
                    name="confirmPassword"
                    type="password"
                    class="form-control"
                    value={authInfo.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  class="btn"
                  style={{ backgroundColor: theme.palette.primary.main }}
                >
                  <Typography sx={{ color: theme.palette.background.default }}>
                    Sign Up
                  </Typography>
                </button>
              </form>
              <div class="foot">
                <p>
                  Already have an account yet?
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <a
                      style={{
                        textDecoration: "none",
                        color: theme.palette.primary.main,
                        marginLeft: 5,
                      }}
                    >
                      Login
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default RegisterComponent;
