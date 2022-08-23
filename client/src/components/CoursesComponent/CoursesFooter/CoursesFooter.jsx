import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../../constants'
import { theme } from '../../../theme'

const CoursesFooter = () => {
  return (
    <>
    <Box sx={{width:'100%',display:'flex', flexDirection:{xs:'column' , md:'row'}, justifyContent:'center'}}>
      <Box sx={{mr:{xs:0, md:4}, p:1, mt:2}}>
        <img src={images.certificate} alt="" style={{height:'auto', width:'100%', maxHeight:'390px'}} />
      </Box>
      <Box x={{width:'100%', ml:{xs:0, md:4},}}>
        <Typography variant="h3" sx={{color: 'primary.main', fontWeight:theme.typography.fontWeightBold, textAlign:{xs:'center', md:'initial'}, mt:2 }}>
        We are Affiliated with
        </Typography>
        <Typography variant="h5" sx={{color: 'text.primary', mt:2,textAlign:{xs:'center', md:'initial'} }}>
        Yoga Certification Board, Ministry of Ayush , Govt of India
 
        </Typography>
        <Box sx={{mt:4, width:'100%', display:{xs:'none', sm:'flex'}, justifyContent:{xs:'center', md:'flex-start'}, flexDirection:{xs:'column', sm:'row'}, alignItems:'flex-end'}}>
          <a href="https://yogacertificationboard.nic.in/">
          <img src={images.ycb_logo} alt="" style={{height:'80px', width:'80px', marginRight:25}}/>
          </a>
          <a href="https://fitindia.gov.in/">
          <img src={images.fit_india_logo} alt="" style={{height:'80px', width:'80px', marginRight:25}}/>
          </a>
          <a href="https://sportsauthorityofindia.gov.in/sai/">
          <img src={images.spai_logo} alt="" style={{height:'80px', width:'80px',  marginRight:25}}/>
          </a>
          <a href="https://msme.gov.in/">
          <img src={images.msme} alt="" style={{height:'80px', width:'80px', marginRight:25}}/>
          </a>
          <a href="https://www.ncvtmis.gov.in/">
          <img src={images.ncvt} alt="" style={{height:'80px', width:'80px',  marginRight:25}}/>
          </a>
        </Box>
        <Box sx={{mt:4, width:'100%', display:{xs:'flex', sm:'none'}, justifyContent:{xs:'center', md:'flex-start'}, flexDirection:{xs:'row', sm:'row'}, alignItems:'center'}}>
        <a href="https://yogacertificationboard.nic.in/">
          <img src={images.ycb_logo} alt="" style={{height:'auto', width:'60px', maxHeight:'60px', marginRight:10}}/>
          </a>
          <a href="https://fitindia.gov.in/">
          <img src={images.fit_india_logo} alt="" style={{height:'auto', width:'60px', maxHeight:'60px', marginRight:10}}/>
          </a>
          <a href="https://sportsauthorityofindia.gov.in/sai/">
          <img src={images.spai_logo} alt="" style={{height:'auto', width:'60px', maxHeight:'60px', marginRight:10}}/>
          </a>
          <a href="https://msme.gov.in/">
          <img src={images.msme} alt="" style={{height:'auto', width:'60px', maxHeight:'60px', marginRight:10}}/>
          </a>
          <a href="https://www.ncvtmis.gov.in/">
          <img src={images.ncvt} alt="" style={{height:'auto', width:'60px', maxHeight:'60px', marginRight:10}}/>
          </a>
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
