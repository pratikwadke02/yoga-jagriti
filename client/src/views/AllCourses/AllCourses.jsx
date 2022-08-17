import React from 'react'
import { Container } from '@mui/material'
import { theme } from '../../theme'
import { images } from '../../constants'
import AllCoursesComponent from '../../components/AllCoursesComponent/AllCoursesComponent'

const AllCourses = () => {
  return (
    <>
    <Container
        sx={{
          maxWidth: { xs: "100%" },
          pt: 5,
          backgroundColor: theme.palette.background.light,
          backgroundImage: `url(${images.pattern_three})`,
          height: "100%",
          minHeight: {lg:"95vh"},
          maxHeight: {xs:'100%', lg:'90vh'},
          pb:10,
        }}
      >
        <AllCoursesComponent />
      </Container>
    </>
  )
}

export default AllCourses
