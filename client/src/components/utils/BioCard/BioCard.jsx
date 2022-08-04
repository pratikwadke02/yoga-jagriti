import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import EastIcon from "@mui/icons-material/East";
import { Box } from "@mui/system";
import { images } from "../../../constants";


export default function BioCard() {


  return (
    <Card sx={{ m: 1, borderRadius:'10px' }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          background: "linear-gradient(to right, #37234f, #6a4198)",
          color: "#fff",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={images.avatar}
          sx={{ ml: 4, mr: 2, height: "65px", width: "65px" }}
        />
        <CardContent>
          <Box>
            <Typography sx={{ fontSize: "11px" }}>
              Getting to learn System Design topics from people having worked at
              top companies that face a large scale, getting to learn algorithms
              from people who have been at ICPC World Finals is an altogether
              different experience.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Typography sx={{ fontSize: "11px", fontWeight: 600 }}>
                Naman Bhalla
              </Typography>
              <Box
                sx={{
                  ml: 2,
                  p: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  color: "#000",
                  backgroundColor: "#fff",
                  width: "170px",
                  height: "30px",
                  borderRadius: "20px",
                }}
              >
                <Typography sx={{ fontSize: "11px", mr: 0.75 }}>
                  BML Munjal
                </Typography>
                <EastIcon fontSize="small" />
                <Box>
                  <img src={images.google} alt="google" height={20} />
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Box>
      <Box sx={{background:"linear-gradient(to right, #4c2e6b, #663e93)", color: '#fff', height:'26px'}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            pl:1,
            pr:1,
          }}
        >
          <Typography sx={{fontSize:'9px'}}>Read the full story on Linkedin</Typography>
          <IconButton aria-label="arrow">
            <EastIcon fontSize="small" sx={{color:'#fff'}} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
