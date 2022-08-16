import { Box, Typography } from "@mui/material";
import React from "react";
import LoginComponent from "../../components/Login/LoginComponent";
import { theme } from "../../theme";
import { images } from "../../constants";

const Login = () => {
  return (
    <>
      <Box sx={{
          mt: 28, width: "100%", height: "95vh", backgroundImage:`url(${images.pattern_three})` }}>
        <LoginComponent />
      </Box>
    </>
  );
};

export default Login;
