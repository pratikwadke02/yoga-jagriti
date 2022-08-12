import { Box, Typography } from "@mui/material";
import React from "react";
import LoginComponent from "../../components/Login/LoginComponent";
import { theme } from "../../theme";
import { images } from "../../constants";

const Login = () => {
  return (
    <>
      <Box sx={{ width: "100%", height: "95vh" }}>
        <LoginComponent />
      </Box>
    </>
  );
};

export default Login;
