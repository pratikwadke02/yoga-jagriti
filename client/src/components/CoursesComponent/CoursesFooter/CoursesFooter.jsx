import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../../constants'
import { theme } from '../../../theme'

const CoursesFooter = () => {
  return (
    <>
    <Box sx={{display:'flex', flexDirection:{xs:'column' , md:'row'}}}>
      <Box sx={{mr:{xs:0, md:4}, p:1, mt:2}}>
        <img src={images.certificate} alt="" style={{height:'auto', width:'100%', maxHeight:'390px'}} />
      </Box>
      <Box x={{ml:{xs:0, md:4},}}>
        <Typography variant="h6" sx={{color: 'primary.main', fontWeight:theme.typography.fontWeightBold, textAlign:{xs:'center', md:'initial'}, mt:2 }}>
        GET PROOF FOR YOUR NEWLY LEARNT SKILLS
        </Typography>
        <Typography variant="h3" sx={{color: 'text.primary', mt:2,textAlign:{xs:'center', md:'initial'} }}>
        Get Job ready with
NSDC Skill India Certificate
        </Typography>
        <Box sx={{mt:4, width:'100%', display:'flex', justifyContent:{xs:'center', md:'flex-start'}}}>
          <img src={images.ycb_logo} alt="" style={{height:'auto', width:'auto', maxHeight:'80px', marginRight:20}}/>
          <Divider orientation="vertical" color="primary"/>
          <img src={images.fit_india_logo} alt="" style={{height:'auto', width:'auto', maxHeight:'80px', marginRight:20}}/>
          <img src={images.spai_logo} alt="" style={{height:'auto', width:'auto', maxHeight:'80px', marginRight:20}}/>
          <img src={images.msme} alt="" style={{height:'auto', width:'auto', maxHeight:'80px', marginRight:20}}/>
          <img src={images.ncvt} alt="" style={{height:'auto', width:'auto', maxHeight:'80px', marginRight:20}}/>
        </Box>
        <Box sx={{mt:2,width:'100%', display:'flex', justifyContent:{xs:'center', md:'flex-start'}}}>
            <Link to={'/course'} style={{
              textDecoration: 'none',
            }}>
          <Button variant="contained" color="primary" sx={{mt:2}}>
            <Typography variant="h6">
            Enroll Now
            </Typography>
          </Button>
           </Link>
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default CoursesFooter
