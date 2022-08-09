import { images } from "../../../constants";
import { Box, Button, Container, Typography, IconButton } from "@mui/material";
import React from "react";
import {theme} from '../../../theme'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ProgramCard = (props) => {

  const {name, image, desc, price} = props;

  return (
    <>
      <Box
        sx={{
          mb:{xs:4, md:0},
          maxWidth:'400px',
          backgroundColor:theme.palette.background.default,
          width: "100%",
          height:'fit-content',
          boxShadow: 1,
          display: "flex",
          flexDirection: "column",
          borderRadius: "4px",
          p:2,
          ml:2,
          mr:2,
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={images.product} alt="software" style={{height:'auto', width:'100%'}} />
        </Box>
        <Box
          sx={{
            mt:1,
            mb:1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",

            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold,  }}>
            {name}
          </Typography>
          <Typography sx={{ fontSize: "11px", color: "#5a6273", }}>
            {desc}
          </Typography>
        </Box>
        <Box
          sx={{
            mb:1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold }}>
            INR {price}
          </Typography>
          <Box sx={{display:'flex'}}>
          <IconButton>
            <ShoppingCartOutlinedIcon fontSize="mdeium" sx={{color:theme.palette.primary.main, mr:1}} />
          </IconButton>
          <Button
            variant="contained"
            sx={{ backgroundColor:theme.palette.primary.main, color: "#fff", maxWidth:'120px', width:'100%' }}
          >
            <Typography variant="h6" sx={{ }}>BUY NOW</Typography>
          </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProgramCard;
