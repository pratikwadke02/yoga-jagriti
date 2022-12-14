import { Typography, Box } from '@mui/material'
import React from 'react'
import {theme} from '../../theme'
import {images} from '../../constants'
import AllCoursesCard from '../utils/CoursesCard/AllCoursesCard'
import { Link } from 'react-router-dom'
import CoursesMenu from '../utils/CoursesMenu/CoursesMenu'
import './AllCourses.css'

const AllCoursesComponent = () => {

    const coursesData  = [
        {
          title: "Higher Sec. School Yoga Teacher Course",
          fee: "25000",
          eligibility: "Graduation",
          duration: "Six months",
          age: "18 or above",
          noOfSeats: "50",
          image: images.course_one,
          paymentForm: 'https://payments.cashfree.com/forms/hssytcy'
        },
        {
          title: "Primary/Elementary School Yoga Teacher Course",
          fee: "20000",
          eligibility: "10 + 2",
          duration: "Three months",
          age: "18 or above",
          noOfSeats: "50",
          image: images.course_two,
          paymentForm: 'https://payments.cashfree.com/forms/pesytcy'
      },
        
        {
          title: "Yoga Wellness Instructor",
          fee: "15000",
          eligibility: "10 + 2",
          duration: "Six months",
          age: "18 or above",
          noOfSeats: "30",
          image: images.course_three,
          paymentForm: 'https://payments.cashfree.com/forms/ywiy'
        },
      ]

      const coursesData1  = [
        {
          title: "Yoga Protocol Instructor",
          fee: "7000",
          eligibility: "10th",
          duration: "Three months",
          age: "18 or above",
          noOfSeats: "20",
          image: images.course_four,
          paymentForm: 'https://payments.cashfree.com/forms/ypiy'
        },
        {
            title: "Yoga Volunteer Course",
            fee: "1500",
            eligibility: "8th Pass",
            duration: "One month",
            age: "No age limit",
            noOfSeats: "100",
            image: images.course_five,
            paymentForm: 'https://payments.cashfree.com/forms/yvcy'
        },
        
    ];

  return (
    <>
    <Box sx={{
        maxWidth: { xs: "100%", md: '1500px' },
        width:'100%',
        m:'auto',
    }}>
        <Box sx={{textAlign:'center'}}>
            <Typography variant='h2' sx={{ fontWeight:theme.typography.fontWeightBold, color:theme.palette.primary.main}}>
                All Courses
            </Typography>
            <div className="darkbar" style={{margin:'auto', marginTop:'20px'}}></div>
        </Box>
        <Box sx={{display:'flex', mt:4, width:'100%', flexDirection:{xs:'column', lg:'row'}, justifyContent:'center', alignItems:'center'}}>
        {
            coursesData.map((course, index) => {
              return (
                <Box to="/course" style={{textDecoration:'none', marginRight:{md:'20px'}, marginBottom:'20px'}} key={index}>
                  {/* <div className="dropend">
                  <div className="dropdown" data-bs-toggle="dropdown" aria-expanded="false"> */}
                  <AllCoursesCard name={course.title} eligibility={course.eligibility} fee={course.fee} seats={course.noOfSeats} age={course.age} duration={course.duration} image={course.image} paymentForm={course.paymentForm}/>
                  {/* </div>
                  <div className="dropdown-menu">
                  <CoursesMenu name={course.title} eligibility={course.eligibility} fee={course.fee} seats={course.noOfSeats} age={course.age} duration={course.duration} image={course.image} paymentForm={course.paymentForm}/>
                  </div>
                  </div> */}
                </Box>
              )
            }
            )
          }
        </Box>
        <Box sx={{display:'flex', mt:{md: 4}, flexDirection:{xs:'column', lg:'row'}, justifyContent:'center', alignItems:'center'}}>
        {
            coursesData1.map((course, index) => {
              return (
                <Box to="/course" style={{textDecoration:'none', marginRight:{md:'20px'}, marginBottom:'20px',m:'auto'}} key={index}>
                  {/* <div className="dropend">
                  <div className="dropdown" data-bs-toggle="dropdown" aria-expanded="false"> */}
                  <AllCoursesCard name={course.title} eligibility={course.eligibility} fee={course.fee} seats={course.noOfSeats} age={course.age} duration={course.duration} image={course.image} paymentForm={course.paymentForm}/>
                  {/* </div>
                  <div className="dropdown-menu">
                  <CoursesMenu name={course.title} eligibility={course.eligibility} fee={course.fee} seats={course.noOfSeats} age={course.age} duration={course.duration} image={course.image} paymentForm={course.paymentForm}/>
                  </div>
                  </div> */}
                </Box>
              )
            }
            )
          }
        </Box>
    </Box>
    </>
  )
}

export default AllCoursesComponent

