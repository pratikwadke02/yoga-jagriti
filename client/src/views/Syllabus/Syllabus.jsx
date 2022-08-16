import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import {theme} from '../../theme'
import {images, pdfs} from '../../constants'
import SyllabusComponent from '../../components/SyllabusComponent/SyllabusComponent'

const Syllabus = () => {


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
        <Box sx={{maxWidth:'1400px', m:'auto', textAlign:'center', mb:4}}>
            <Typography variant="h2" sx={{color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold}}>
                Syllabus
            </Typography>
            <div className="darkbar" style={{margin:'auto', marginTop:'20px'}}></div>
        </Box>
        <SyllabusComponent />
      </Container>
    </>
  )
}

export default Syllabus
