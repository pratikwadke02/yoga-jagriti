import { Container, Box, Typography } from "@mui/material";
import React from "react";
import BioCard from "../utils/BioCard/BioCard";
import { theme } from "../../theme";
import { images } from "../../constants";
import './CoursesComponent.css'
import CoursesCard from "../utils/CoursesCard/CoursesCard";
import { Link } from "react-router-dom";
import CoursesHeader from "./CoursesHeader/CoursesHeader";
import CoursesFooter from "./CoursesFooter/CoursesFooter";

const CoursesComponnent = () => {

  const coursesData  = [
    {
      title: "Higher Sec. School Yoga Teacher Course",
      fee: "25000",
      eligibility: "Graduation",
      duration: "Six months",
      age: "18 or above",
      noOfSeats: "50",
      image: images.course_one,
    },
    {
      title: "Yoga Protocol Instructor",
      fee: "7000",
      eligibility: "10th",
      duration: "Three months",
      age: "18 or above",
      noOfSeats: "20",
      image: images.course_two,
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
          </Typography>
          <Typography variant="h6" sx={{fontWeight:theme.typography.fontWeightBold,color:theme.palette.primary.main}}>
            See All
          </Typography>
          </Box>
        <Box  sx={{display:{xs:'none', md:'flex'}, flexDirection:'row', p:5, justifyContent:'center',}}>
          <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}}}>
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
