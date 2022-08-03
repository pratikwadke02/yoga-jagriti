import React from "react";
import "./HeaderBanner.css";
import { Box, Typography } from "@mui/material";

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
        }}
        className="header_banner"
      >
        <Box sx={{display:'flex'}}>
        {headBannerDataOne.map((item, index) => {
          return (
            <Box sx={{}} className="header_banner_item" key={index}>
              <Typography sx={{ fontSize: "24px" }}>{item.name}</Typography>
              <Typography sx={{ fontSize: "15px" }}>{item.desc}</Typography>
            </Box>
          );
        })}
        </Box>
        <Box sx={{display:'flex'}}>
        {headBannerDataTwo.map((item, index) => {
            return (
                <Box sx={{}} className="header_banner_item" key={index}>
                    <Typography sx={{ fontSize: "24px" }}>{item.name}</Typography>
                    <Typography sx={{ fontSize: "15px" }}>{item.desc}</Typography>
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
