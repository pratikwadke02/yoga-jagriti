import React from "react";
import "./HeaderBanner.css";
import { Box, Typography } from "@mui/material";
import {images} from '../../../constants'
import {theme} from '../../../theme'

const HeaderBanner = () => {
  const headBannerDataOne = [
    {
      name: "Support & Motivation",
      desc: "We are able to offer every yoga training with experienced & best yoga trainer.",
    },
    {
      name: "Experience Trainers",
      desc: "We are able to offer every yoga training with experienced & best yoga trainer.",
    },
  ];

  const headBannerDataTwo = [
    {
      name: "Improves Flexibility",
      desc: "We are able to offer every yoga training with experienced & best yoga trainer.",
    },
    {
      name: "Suppportive Community",
      desc: "We are able to offer every yoga training with experienced & best yoga trainer.",
    },
  ];

  return (
    <>
      <Box
        sx={{
          minHeight: "373px",
          display: "flex",
          flexDirection: {xs:"column", md:"row"},
          justifyContent: "space-between",
          alignItems: "center",
          backgroundImage: `url(${images.pattern})`,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.default,
        }}
      >
        <Box sx={{display:'flex'}}>
        {headBannerDataOne.map((item, index) => {
          return (
            <Box sx={{}} key={index}>
              <Typography variant="h3">{item.name}</Typography>
              <Typography variant="h6">{item.desc}</Typography>
            </Box>
          );
        })}
        </Box>
        <Box sx={{display:'flex'}}>
        {headBannerDataTwo.map((item, index) => {
            return (
                <Box sx={{}} key={index}>
                    <Typography variant="h3">{item.name}</Typography>
                    <Typography variant="h6">{item.desc}</Typography>
                </Box>
            );
        }
        )}
        </Box>
      </Box>
    </>
  );
};

export default HeaderBanner;
