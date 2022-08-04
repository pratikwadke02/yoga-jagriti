import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import {theme} from '../../../theme';

const PurchaseCard = (props) => {

    const {icon, title, price} = props;

  return (
    <>
      <Box sx={{display:'flex',mt:2,pb:2, borderBottom:'3px dashed'+theme.palette.text.light}}>
        <Box></Box>
        <Box sx={{width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <Typography  variant="h6" sx={{fontWeight: 500, mr:1 }}>
            {title}
          </Typography>
          <Typography variant="h6" sx={{color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold, mr:1}}>{price}</Typography>
        </Box>
        <Box>
          <Button variant="contained" sx={{ backgroundColor: "#FAF6F2", color:theme.palette.text.main, height:'38px' ,ml:1}}>
            PURCHASE
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PurchaseCard;
