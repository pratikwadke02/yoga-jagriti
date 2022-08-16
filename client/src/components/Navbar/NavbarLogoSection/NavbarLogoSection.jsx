import { Box } from '@mui/material'
import React from 'react'
import { images } from '../../../constants'

const NavbarLogoSection = () => {
  return (
    <>
    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', mt:1}}>
    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <img src={images.yoga_jagriti_logo} alt="" style={{height:'auto', width:'100%', maxHeight:'100px'}} />
            {/* <img src={images.nav_logo} alt="" height={40} style={{marginLeft:'15px'}} /> */}
    </Box>
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <img src={images.ycb_nav_logo_one} alt="" 
            style={{
                height:'auto', width:'100%',
                maxHeight:'60px',
                maxWidth:'40px',
            }}
        />
        <img src={images.ycb_nav_logo_two} alt="" 
            style={{
                height:'auto', width:'100%'
            }}
        />
    </Box>
    </Box>
    </>
  )
}

export default NavbarLogoSection
