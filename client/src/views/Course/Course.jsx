import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import {theme} from '../../theme'
import {images} from '../../constants'
import ContactForm from '../../components/EnrollForm/EnrollForm'

const Course = () => {
  return (
    <>
    <Container
        sx={{
          
          mt: 28,
          pb:8,
          maxWidth: { xs: "100%" },
          pt: 5,
          backgroundColor: theme.palette.background.light,
          backgroundImage: `url(${images.pattern_three})`,
          height: "100%",
          minHeight: "95vh",
        }}
      >
        <Box sx={{ maxWidth:{xs:'100%', md:'1000px'}, m:'auto'}}>
            <ContactForm />
        </Box>
      </Container>
    </>
  )
}

export default Course
