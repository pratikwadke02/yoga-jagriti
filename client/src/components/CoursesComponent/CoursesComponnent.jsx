import { Container, Box, Typography } from "@mui/material";
import React from "react";
import BioCard from "../utils/BioCard/BioCard";
import { theme } from "../../theme";
import { images } from "../../constants";
import '../Header/HeaderBanner/HeaderBanner.css'

const CoursesComponnent = () => {
  return (
    <>
      <Container
        sx={{
          mt:10,  
          maxWidth: {xs:'100%'},
          minHeight: "373px",
          display: "flex",
          flexDirection: {xs:"column"},
          justifyContent: "space-between",
          alignItems: "center",
          backgroundImage: `url(${images.pattern_two})`,
          backgroundColor: theme.palette.background.light,
          color: theme.palette.text.default,
        }}
      >
        <Box  sx={{width:'100%', mt:4, mb:2}}>
          <Box sx={{width:'100%', display:'flex',
          color:theme.palette.primary.main, 
          flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Typography variant="h4" sx={{ fontWeight:theme.typography.fontWeightBold,  }}>
            Our Natural Products
          </Typography>
          <Typography variant="h6" sx={{fontWeight:theme.typography.fontWeightBold,}}>
            See All
          </Typography>
          </Box>
        <Box  sx={{display:{xs:'none', md:'flex'}, flexDirection:'row', p:5, justifyContent:'center'}}>
          <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}}}>

          <BioCard name="Product Name" desc="Product details" price="9.99"/>
          <BioCard name="Product Name" desc="Product details" price="9.99"/>
          <BioCard name="Product Name" desc="Product details" price="9.99"/>
        </Box>
        <Box sx={{display:{xs:'none', lg:'flex'}, flexDirection:{xs:'column', md:'row'}}}>
          <BioCard name="Product Name" desc="Product details" price="9.99"/>
        </Box>
          {/* <BioCard name="Product Name" desc="Product details" price="9.99"/> */}
        </Box>
        </Box>
        <Box className="marquee" sx={{display:{xs:'flex', md:'none'}}}>
          <Box className="track" sx={{display:'flex'}}>
            <BioCard name="Product Name" desc="Product details" price="9.99"/>
            <BioCard name="Product Name" desc="Product details" price="9.99"/>
            <BioCard name="Product Name" desc="Product details" price="9.99"/>
            <BioCard name="Product Name" desc="Product details" price="9.99"/>
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

export default CoursesComponnent;
