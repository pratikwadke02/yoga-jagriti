import { Box, Typography } from '@mui/material'
import React from 'react'
import { images } from '../../../constants'
import {theme} from '../../../theme'

const NavbarLogoSection = () => {
  return (
    <>
    <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, alignItems:'center', mt:1}}>
    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', mr:{xs:0, md:5}}}>
            <img src={images.yoga_jagriti_logo} alt="" style={{height:'auto', width:'100%', maxHeight:'100px'}} />
            {/* <img src={images.nav_logo} alt="" height={40} style={{marginLeft:'15px'}} /> */}
    </Box>
    <Box sx={{ml:{xs:0, md:5}, display:'flex', flexDirection:'column', alignItems:'center'}}>
        {/* <img src={images.ycb_nav_logo_two} alt="" 
            style={{
                height:'auto', width:'100%'
            }}
        /> */}
        <Typography variant="h2" sx={{
            fontWeight:theme.typography.fontWeightBold,
            color:theme.palette.primary.main,
            textAlign:'center',
            mb:1,
            mt:{xs:1, md:0},
            }}>
         Jagriti Yoga & Naturopathy Sansthan
        </Typography>
        <Box sx={{display:'flex', alignItems:'center', mt:1, mb:1, width:'100%', justifyContent:'center'}}>
            <img src={images.ycb_logo} alt="" 
            style={{

                height:'auto', width:'100%',
                maxHeight:'80px',
                maxWidth: '80px'
            }}
            />
        <Typography variant="h4" sx={{
            fontWeight:theme.typography.fontWeightmedium,
            color:theme.palette.primary.main,
            ml:2,
        }}>
            Yoga Certification Board
        </Typography>
        </Box>
        <Box sx={{width:'100%', m:'auto', textAlign:'center'}}>
        <Typography variant="h6" sx={{
            fontWeight:theme.typography.fontWeightmedium,
            color:theme.palette.text.main,
        }}>
            Ministry of Ayush, Government of India
        </Typography>
        </Box>
    </Box>
    </Box>
    </>
  )
}

export default NavbarLogoSection
