import { Container, Box, Typography, Button } from "@mui/material";
import React from "react";
import BioCard from "../utils/BioCard/BioCard";
import { theme } from "../../theme";
import { images } from "../../constants";
import './CoursesComponent.css'
import CoursesCard from "../utils/CoursesCard/CoursesCard";
import { Link } from "react-router-dom";
import CoursesHeader from "./CoursesHeader/CoursesHeader";
import CoursesFooter from "./CoursesFooter/CoursesFooter";
import CoursesMenu from "../utils/CoursesMenu/CoursesMenu";

const CoursesComponnent = () => {

  const coursesData  = [
    {
      title: "Yoga Volunteer Course",
      fee: "1500",
      eligibility: "8th Pass",
      duration: "One month",
      age: "No age limit",
      noOfSeats: "100",
      image: images.course_five,
  },
    {
      title: "Yoga Protocol Instructor",
      fee: "7000",
      eligibility: "10th",
      duration: "Three months",
      age: "18 or above",
      noOfSeats: "20",
      image: images.course_four,
    },
    {
      title: "Yoga Wellness Instructor",
      fee: "15000",
      eligibility: "10 + 2",
      duration: "Six months",
      age: "18 or above",
      noOfSeats: "30",
      image: images.course_three,
    },
  ]


  return (
    <>
      <Container
        disableGutters
        sx={{
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
        <CoursesHeader />
        <Box  sx={{width:'100%', mt:4, mb:2, p:2}}>
          <Box sx={{maxWidth:'1175px',m:'auto', width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Typography variant="h4" sx={{ fontWeight:theme.typography.fontWeightBold,color:theme.palette.primary.main  }}>
            Our Yoga Courses
            
            <div className="darkbar"></div>
          </Typography>
          <Link to="/allcourses" style={{textDecoration:'none'}}>
            <Button sx={{textTransform:'none'}}>
          <Typography variant="h6" sx={{fontWeight:theme.typography.fontWeightBold,color:theme.palette.primary.main}}>
            See All
          </Typography>
          </Button>
          </Link>
          </Box>
        <Box  sx={{display:{xs:'none', md:'flex'}, flexDirection:'row', p:5, justifyContent:'center',}}>
          <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}}}>
          {
            coursesData.map((course, index) => {
              return (
                <Box style={{textDecoration:'none', marginRight:'40px'}} key={index}>
                  <div className="dropend">
                  <div className="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  <CoursesCard name={course.title} eligibility={course.eligibility} fee={course.fee} seats={course.noOfSeats} age={course.age} duration={course.duration} image={course.image} />
                  </div>
                  <div className="dropdown-menu">
                  <CoursesMenu name={course.title} eligibility={course.eligibility} fee={course.fee} seats={course.noOfSeats} age={course.age} duration={course.duration} image={course.image}/>
                  </div>
                  </div>
                </Box>
              )
            }
            )
          }
        </Box>
        <Box sx={{display:{xs:'none', lg:'flex'}, flexDirection:{xs:'column', md:'row'}}}>
          {/* <Link to="/course" style={{textDecoration:'none', marginRight:'40px'}}>
          <CoursesCard name="Course Name" desc="Course Details" price="9.99" enrolled="4242" favourites="5050"/>
          </Link> */}
        </Box>
        </Box>
        </Box>
        <Box className="marquee" sx={{display:{xs:'flex', md:'none'}}}>
          <Box className="track" sx={{display:'flex'}}>
          {
            coursesData.map((course, index) => {
              return (
                <Link to="/course" style={{textDecoration:'none', marginRight:'40px'}} key={index}>
                  <CoursesCard name={course.title} eligibility={course.eligibility} fee={course.fee} seats={course.noOfSeats} age={course.age} duration={course.duration} image={course.image} />
                </Link>
              )
            }
            )
          }
          </Box>
        </Box>
        <CoursesFooter />
      </Container>
    </>
  );
};

export default CoursesComponnent;
