import React from "react";
import './HeaderBanner.css'
import { Box, Typography, Container } from "@mui/material";
import {images} from '../../../constants'
import {theme} from '../../../theme'
import ProgramCard from "../../../components/utils/ProgramCard/ProgramCard";

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

  const card = 4;

  return (
    <>
      <Container
        sx={{
          maxWidth: {xs:'100%'},
          minHeight: "373px",
          display: "flex",
          flexDirection: {xs:"column"},
          justifyContent: "space-between",
          alignItems: "center",
          backgroundImage: `url(${images.pattern})`,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.default,
        }}
      >
        <Box  sx={{mt:4}}>
          <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Typography variant="h4" sx={{ fontWeight:theme.typography.fontWeightBold,  }}>
            Our Natural Products
          </Typography>
          <Typography variant="h6" sx={{fontWeight:theme.typography.fontWeightBold,}}>
            See All
          </Typography>
          </Box>
        <Box  sx={{display:'flex', flexDirection:'row', p:5}}>
          <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}}}>

          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
        </Box>
        <Box sx={{display:{xs:'none', md:'flex'}, flexDirection:{xs:'column', md:'row'}}}>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
        </Box>
          {/* <ProgramCard name="Product Name" desc="Product details" price="9.99"/> */}
        </Box>
        </Box>
        {/* <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, p:5, textAlign:'center'}}> */}
        {/* <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-around', mb:{xs:5, md:0}}}>
        {headBannerDataOne.map((item, index) => {
          return (
            <Box sx={{mr:4}} key={index}>
              <Typography variant="h3">{item.name}</Typography>
              <Typography variant="h6">{item.desc}</Typography>
            </Box>
          );
        })}
        </Box> */}
        {/* <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
        {headBannerDataTwo.map((item, index) => {
            return (
                <Box sx={{mr:4}} key={index}>
                    <Typography variant="h3">{item.name}</Typography>
                    <Typography variant="h6">{item.desc}</Typography>
                </Box>
            );
        }
        )}
        </Box> 
      </Box> */}
      </Container>
    </>
  );
};

export default HeaderBanner;
