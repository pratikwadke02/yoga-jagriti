import { Container, Box, Typography } from "@mui/material";
import React from "react";
import BioCard from "../utils/BioCard/BioCard";
import { theme } from "../../theme";
import { images } from "../../constants";
import '../Header/HeaderBanner/HeaderBanner.css'
import CoursesCard from "../utils/CoursesCard/CoursesCard";
import { Link } from "react-router-dom";

const CoursesComponnent = () => {
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
          backgroundImage: `url(${images.pattern_two})`,
          backgroundColor: theme.palette.background.light,
          color: theme.palette.text.default,
        }}
      >
        <Box  sx={{width:'100%', mt:4, mb:2}}>
          <Box sx={{maxWidth:'1325px',m:'auto', width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Typography variant="h4" sx={{ fontWeight:theme.typography.fontWeightBold,color:theme.palette.primary.main  }}>
            Our Yoga Courses
          </Typography>
          <Typography variant="h6" sx={{fontWeight:theme.typography.fontWeightBold,color:theme.palette.primary.main}}>
            See All
          </Typography>
          </Box>
        <Box  sx={{display:{xs:'none', md:'flex'}, flexDirection:'row', p:5, justifyContent:'center',}}>
          <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}}}>
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <CoursesCard name="Course Name" desc="Course Details" price="9.99"/>
          </Link>
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <CoursesCard name="Course Name" desc="Course Details" price="9.99"/>
          </Link>
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <CoursesCard name="Course Name" desc="Course Details" price="9.99"/>
          </Link>
        </Box>
        <Box sx={{display:{xs:'none', lg:'flex'}, flexDirection:{xs:'column', md:'row'}}}>
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <CoursesCard name="Course Name" desc="Course Details" price="9.99"/>
          </Link>
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <CoursesCard name="Course Name" desc="Course Details" price="9.99"/>
          </Link>
        </Box>
          {/* <CoursesCard name="Course Name" desc="Course Details" price="9.99"/> */}
        </Box>
        </Box>
        <Box className="marquee" sx={{display:{xs:'flex', md:'none'}}}>
          <Box className="track" sx={{display:'flex'}}>
            {/* <CoursesCard name="Course Name" desc="Course Details" price="9.99"/>
            <CoursesCard name="Course Name" desc="Course Details" price="9.99"/>
            <CoursesCard name="Course Name" desc="Course Details" price="9.99"/>
            <CoursesCard name="Course Name" desc="Course Details" price="9.99"/> */}
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <CoursesCard name="Course Name" desc="Course Details" price="9.99"/>
          </Link>
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <CoursesCard name="Course Name" desc="Course Details" price="9.99"/>
          </Link>
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <CoursesCard name="Course Name" desc="Course Details" price="9.99"/>
          </Link>
          <Link to="/products" style={{textDecoration:'none', marginRight:'40px'}}>
          <CoursesCard name="Course Name" desc="Course Details" price="9.99"/>
          </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CoursesComponnent;
