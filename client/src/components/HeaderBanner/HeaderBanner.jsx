import React from "react";
import './HeaderBanner.css'
import { Box, Typography, Container } from "@mui/material";
import {images} from '../../constants'
import {theme} from '../../theme'
import ProgramCard from "../../components/utils/ProgramCard/ProgramCard";
import { Link } from "react-router-dom";

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
          mt:10,
          pb:4,
          maxWidth: {xs:'100%'},
          minHeight: "393px",
          display: "flex",
          flexDirection: {xs:"column"},
          justifyContent: "space-between",
          alignItems: "center",
          backgroundImage: `url(${images.pattern})`,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.default,
        }}
      >
        <Box  sx={{width:'100%', mt:4, mb:2}}>
          <Box sx={{m:'auto', maxWidth:'1500px', width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Typography variant="h4" sx={{ fontWeight:theme.typography.fontWeightBold,  }}>
            Our Natural Products   
          <div className="lightbar"></div>
          </Typography>
          <Typography variant="h6" sx={{fontWeight:theme.typography.fontWeightBold,}}>
            See All
          </Typography>
          </Box>
        <Box  sx={{display:{xs:'none', md:'flex'}, flexDirection:'row', p:5, justifyContent:'center',}}>
          <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}}}>
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          </Link>
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          </Link>
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          </Link>
        </Box>
        <Box sx={{display:{xs:'none', lg:'flex'}, flexDirection:{xs:'column', md:'row'}}}>
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          </Link>
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          </Link>
        </Box>
          {/* <ProgramCard name="Product Name" desc="Product details" price="9.99"/> */}
        </Box>
        </Box>
        <Box className="marquee" sx={{display:{xs:'flex', md:'none'}}}>
          <Box className="track" sx={{display:'flex'}}>
            {/* <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
            <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
            <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
            <ProgramCard name="Product Name" desc="Product details" price="9.99"/> */}
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          </Link>
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          </Link>
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          </Link>
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HeaderBanner;
