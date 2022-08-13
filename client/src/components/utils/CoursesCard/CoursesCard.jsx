import { images } from "../../../constants";
import { Box, Button, Container, Typography, IconButton, Card } from "@mui/material";
import React from "react";
import {theme} from '../../../theme'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const ProgramCard = (props) => {

  const {name, image, desc, price, enrolled, favourites} = props;

  return (
    <>
      <Card
        sx={{
          mb:{xs:4, md:0},
          maxWidth:'400px',
          backgroundColor:theme.palette.background.default,
          width: "100%",
          height:'auto',
          boxShadow: 1,
          display: "flex",
          flexDirection: "column",
          ml:2,
          mr:2,
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={images.product} alt="software" heigh style={{height:'auto', width:'100%', maxHeight:'200px', minWidth:{xs:'220px',lg:'200px',xl:'220px'}}} />
        </Box>
        <Box
          sx={{
            width: "100%",
            pl:2,
            pr:2,
            mt:1,
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
            width: "100%",
            pl:2,
            pr:2,
            mb:1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" sx={{color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold }}>
            INR {price}
          </Typography>
          <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
              <PeopleOutlineIcon fontSize="small" color="primary" />
              <Typography variant="h6" sx={{ml:1}}>
                {enrolled}
              </Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
              <StarOutlineIcon fontSize="small" color="primary" />
              <Typography variant="h6" sx={{ml:1}}>
                {favourites}
              </Typography>
            </Box>
          <Button
            variant="contained"
            sx={{mt:1, backgroundColor:theme.palette.primary.main, color: "#fff", maxWidth:'120px', width:'100%' }}
          >
            <Typography variant="h6" sx={{ }}>Enroll Now</Typography>
          </Button>
          </Box>    
        </Box>
      </Card>
    </>
  );
};

export default ProgramCard;
