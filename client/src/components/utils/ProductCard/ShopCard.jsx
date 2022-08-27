import { images } from "../../../constants";
import { Box, Button, Container, Typography, IconButton } from "@mui/material";
import React from "react";
import {theme} from '../../../theme'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch } from "react-redux";
import { addToCart } from "../../../actions/cart";

const ProgramCard = (props) => {

  const {name, image, desc, price, quantity, discountPrice, id} = props;

  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    try{
      dispatch(addToCart(id));
    }catch(error){
      console.log(error);
    }
  }


  return (
    <>
      <Box
        sx={{
          maxWidth:'400px',
          backgroundColor:theme.palette.background.default,
          width: "100%",
          height:'auto',
          boxShadow: 1,
          display: "flex",
          flexDirection: "column",
          borderRadius: "4px",
          p:2,
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
          <Typography variant="h6" sx={{color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightMedium }}>
          ₹{discountPrice} <Typography variant="h7" sx={{color:theme.palette.text.dark,}}><s>₹{price}</s> </Typography>
          </Typography>
          <Box sx={{display:'flex'}}>
          <IconButton onClick={() => handleAddToCart(id)}>
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