import React from "react";
import { Box } from "@mui/material";
import { theme } from "../../theme";
import { images } from "../../constants";

const LogoContainer = () => {
  return (
    <>
     <Box className='notif-marquee' sx={{width:'calc(100%)', display:'flex', alignItems:'center',justifyContent:'center',height:'100px'}}>
          <Box className='notif-track' sx={{width:'calc(100%)', display:'flex', alignItems:'center',justifyContent:'center',height:'40px'}}>
        <Box>
          <img src={images.bottom_logo_one} alt="" />
        </Box>
        <Box>
          <img src={images.bottom_logo_two} alt="" />
        </Box>
        <Box>
          <img src={images.bottom_logo_three} alt="" />
        </Box>
        <Box>
          <img src={images.bottom_logo_four} alt="" />
        </Box>
        <Box>
          <img src={images.bottom_logo_five} alt="" />
        </Box>
        <Box>
          <img src={images.bottom_logo_six} alt="" />
        </Box>
        <Box>
          <img src={images.bottom_logo_one} alt="" />
        </Box>
        <Box>
          <img src={images.bottom_logo_two} alt="" />
        </Box>
        <Box>
          <img src={images.bottom_logo_three} alt="" />
        </Box>
        <Box>
          <img src={images.bottom_logo_four} alt="" />
        </Box>
        <Box>
          <img src={images.bottom_logo_five} alt="" />
        </Box>
        <Box>
          <img src={images.bottom_logo_six} alt="" />
        </Box>
        <Box>
          <img src={images.bottom_logo_one} alt="" />
        </Box>
        <Box>
          <img src={images.bottom_logo_two} alt="" />
        </Box>
        <Box>
          <img src={images.bottom_logo_three} alt="" />
        </Box>
        <Box>
          <img src={images.bottom_logo_four} alt="" />
        </Box>
        <Box>
          <img src={images.bottom_logo_five} alt="" />
        </Box>
        <Box>
          <img src={images.bottom_logo_six} alt="" />
        </Box>
        </Box>
      </Box>
    </>
  );
};

export default LogoContainer;
