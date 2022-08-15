import React from 'react'
import { Container } from '@mui/material'
import { theme } from '../../theme'
import { images } from '../../constants'

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
          minHeight: "95vh",
          pb:10,
        }}
      >
      </Container>
    </>
  )
}

export default AllCourses
