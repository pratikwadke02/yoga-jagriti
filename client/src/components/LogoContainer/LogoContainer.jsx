import React from "react";
import { Box } from "@mui/material";
import { theme } from "../../theme";
import { images } from "../../constants";

const LogoContainer = () => {
  return (
    <>
      <Box sx={{mt:8,p:2, mb:4, display:{xs:'none', md:'flex'}, flexDirection:'row', justifyContent:'space-between'}}>
        <Box>
          <img src={images.logo_one} alt="" />
        </Box>
        <Box>
          <img src={images.logo_two} alt="" />
        </Box>
        <Box>
          <img src={images.logo_three} alt="" />
        </Box>
        <Box>
          <img src={images.logo_four} alt="" />
        </Box>
        <Box>
          <img src={images.logo_five} alt="" />
        </Box>
        <Box>
          <img src={images.logo_six} alt="" />
        </Box>
      </Box>
    </>
  );
};

export default LogoContainer;
