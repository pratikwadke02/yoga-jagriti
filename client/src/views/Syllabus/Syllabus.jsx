import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import {theme} from '../../theme'
import {images} from '../../constants'

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
        <Box sx={{maxWidth:'1400px', m:'auto', textAlign:'center'}}>
            <Typography variant="h2" sx={{color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold}}>
                Syllabus
            </Typography>
            <div className="darkbar" style={{margin:'auto', marginTop:'20px'}}></div>
        </Box>
        <Box sx={{pt:4, maxWidth:'1400px', m:'auto',display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Box sx={{mr:1}}>
                <Typography variant="h5" sx={{}}>
                    Yoga Instructor
                </Typography>
            </Box>
            <Box sx={{ml:1}}>
                <Typography variant="h6" sx={{}}>
                    Click here to download the syllabus
                </Typography>
            </Box>
        </Box>
      </Container>
    </>
  )
}

export default Syllabus
