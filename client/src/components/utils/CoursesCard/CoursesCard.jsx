import { images } from "../../../constants";
import { Box, Button, Container, Typography, IconButton, Card, dialogTitleClasses } from "@mui/material";
import React from "react";
import {theme} from '../../../theme'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Link } from "react-router-dom";

const ProgramCard = (props) => {

  const {name, image, eligibility, age , fee, seats, duration,paymentForm } = props;

  return (
    <>
      <Card
        sx={{
          mb:{xs:0, md:0},
          minWidth: {xs:'300px',md:'230px', xl:'300px'},
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
          <img src={image} alt="software" style={{height:'auto', width:'100%', maxHeight:'150px', minWidth:{xs:'220px',lg:'200px',xl:'320px'}}} />
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
          <Typography variant="h6" sx={{color:theme.palette.text.main, fontWeight:theme.typography.fontWeightMedium }}>
            ₹ {fee}
          </Typography>
          <Box sx={{display:'flex', flexDirection:'column'}}>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-start'}}>
              <Box sx={{width:'100%'}}>
              <Typography variant="h6" sx={{color:theme.palette.text.main }}>
              Eligibility: {eligibility}
            </Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="h6" sx={{color:theme.palette.text.main }}>
              Age: {age}
            </Typography>
              </Box>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-start'}}>
            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',width:'100%'}}>
              <AccessTimeIcon fontSize="small" color="text" />
              <Typography variant="h6" sx={{ml:1}}>
                {duration}
              </Typography>
              </Box>
            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',width:'100%'}}>
              <PeopleOutlineIcon fontSize="small" color="text" />
              <Typography variant="h6" sx={{ml:1}}>
                {seats}
              </Typography>
              </Box>
            </Box>
            
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-start', width:'100%'}}>
<Box sx={{width:'100%', mt:1}}>
              <a href={paymentForm} style={{textDecoration:'none'}}>
              <Button variant="contained" color="primary" sx={{width:'100%'}}>
                <Typography variant="h6" sx={{color:theme.palette.text.default }}>
                Enroll Now
                </Typography>
              </Button>
              </a>
              </Box>
            </Box>  
          </Box>
          </Box>
      </Card>
    </>
  );
};

export default ProgramCard;
