import { images } from "../../../constants";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const ProgramCard = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
          width: "100%",
          boxShadow: 1,
          display: "flex",
          flexDirection: "column",
          borderRadius: "4px",
          p: 1,
          m: 1,
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", overflow: "hidden",
              display: "inline-block",m:-1 }}>
          <Box
            sx={{
              width: "100px",
              height:'100px',
              transform: "rotate(-45deg)",
            }}
          >
              <Typography sx={{p:1, textAlign:'center', fontSize: "7px",backgroundColor: "#56c68e", fontWeight:800}}>Intake Ongoing</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={images.software} alt="software" height={170} width={170} />
        </Box>
        <Box
          sx={{
            mt:1,
            mb:1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "13px", fontWeight:800 }}>
            Software Engineering for Working Professionals
          </Typography>
          <Typography sx={{ fontSize: "11px", color: "#5a6273" }}>
            1+ years of experience
          </Typography>
        </Box>
        <Box
          sx={{
            mt:1,
            mb:1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#e21032", color: "#fff", maxWidth:'120px', width:'100%' }}
          >
            <Typography sx={{ fontSize: "11px" }}>KNOW MORE</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ProgramCard;
