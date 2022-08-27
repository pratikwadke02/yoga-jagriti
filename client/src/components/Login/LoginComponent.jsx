import React, {useState} from "react";
import { Box, Typography } from "@mui/material";
import "./Login.css";
import { theme } from "../../theme";
import { Link, useNavigate } from "react-router-dom";
import { Facebook, Mail, Twitter } from "react-feather";
import { login } from "../../actions/auth";
import {useDispatch} from 'react-redux';

const initialState = {
  email: "",
  password: "",
};

const LoginComponent = () => {

  const [ authInfo, setAuthInfo] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setAuthInfo({ ...authInfo, [input.name]: input.value });
    console.log(authInfo);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      dispatch(login(authInfo, navigate));
    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <Box sx={{}}>
        <div className="ptb-80">
          <Box sx={{ width: "100%", m: "auto", textAlign: "center", mb: 5 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.primary.main,
              }}
            >
              LOGIN
            </Typography>
          <div className="darkbar" style={{margin:'auto', marginTop:'20px'}}></div>
          </Box>
          <div className="container" >
            <div className="auth-form" style={{backgroundColor:theme.palette.background.default}}>
              <div className="auth-head">
                {/* <a href="index.html">
                            <img src="assets/img/logo.png">
                        </a> */}
                <p>
                  Don't have an account yet?
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    <a
                      style={{
                        textDecoration: "none",
                        color: theme.palette.primary.main,
                        marginLeft: 5,
                      }}
                    >
                      Sign Up
                    </a>
                  </Link>
                </p>
              </div>
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label className="form-label">E-mail</label>
                  <input name="email" type="email" className="form-control" value={authInfo.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input name="password" type="password" className="form-control" value={authInfo.password} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <a
                    href="forgot-password.html"
                    style={{
                      textDecoration: "none",
                      color: theme.palette.primary.main,
                    }}
                  >
                    Forgot Password
                  </a>
                </div>
                <button
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: theme.palette.primary.main }}
                >
                  <Typography sx={{ color: theme.palette.background.default }}>
                    Login
                  </Typography>
                </button>
              </form>
              <div className="foot">
                <p>Or connect with</p>
                <ul>
                  <li>
                    <a href="#" className="linkedin" target="_blank">
                      <Mail style={{ color: theme.palette.text.dark }} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="facebook" target="_blank">
                      {/* <i data-feather="facebook"></i> */}
                      <Facebook style={{ color: theme.palette.text.dark }} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter" target="_blank">
                      <Twitter style={{ color: theme.palette.text.dark }} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default LoginComponent;
