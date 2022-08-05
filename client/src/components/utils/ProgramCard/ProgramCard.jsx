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
          maxWidth:'350px',
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={images.software} alt="software" height={140} width={140} />
        </Box>
        <Box
          sx={{
            mb:1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            pl:3,
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
            pl:3,
            pr:6,
            mt:1,
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
          <Box>
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
