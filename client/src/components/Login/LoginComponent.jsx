import React, {useState} from "react";
import { Box, Typography } from "@mui/material";
import "./Login.css";
import { theme } from "../../theme";
import { Link } from "react-router-dom";
import { Facebook, Mail, Twitter } from "react-feather";
import axios from "axios";

const LoginComponent = () => {

  const [ authInfo, setAuthInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setAuthInfo({ ...authInfo, [input.name]: input.value });
    console.log(authInfo);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      console.log(authInfo);
        const { user } = await axios
          .post("http://localhost:8080/api/yoga/login", authInfo)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
          console.log(user);
          setAuthInfo({
            email: "",
            password: "",
            });
        } catch (error) {
            console.log(error);
            }
  }

  return (
    <>
      <Box sx={{}}>
        <div class="ptb-80">
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
          <div class="container" >
            <div class="auth-form" style={{backgroundColor:theme.palette.background.default}}>
              <div class="auth-head">
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
                <div class="mb-3">
                  <label class="form-label">E-mail</label>
                  <input name="email" type="email" class="form-control" value={authInfo.email} onChange={handleChange} />
                </div>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input name="password" type="password" class="form-control" value={authInfo.password} onChange={handleChange} />
                </div>
                <div class="mb-3">
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
                  class="btn"
                  style={{ backgroundColor: theme.palette.primary.main }}
                >
                  <Typography sx={{ color: theme.palette.background.default }}>
                    Login
                  </Typography>
                </button>
              </form>
              <div class="foot">
                <p>Or connect with</p>
                <ul>
                  <li>
                    <a href="#" class="linkedin" target="_blank">
                      <Mail style={{ color: theme.palette.text.dark }} />
                    </a>
                  </li>
                  <li>
                    <a href="#" class="facebook" target="_blank">
                      {/* <i data-feather="facebook"></i> */}
                      <Facebook style={{ color: theme.palette.text.dark }} />
                    </a>
                  </li>
                  <li>
                    <a href="#" class="twitter" target="_blank">
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
