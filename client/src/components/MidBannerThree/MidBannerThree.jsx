import { Button, Typography } from '@mui/material'
import { Container, Box } from '@mui/system'
import React from 'react'
import PurchaseCard from '../utils/PurchaseCard/PurchaseCard'
import { theme } from '../../theme'
import { images } from '../../constants'

const MidBannerThree = () => {
  return (
    <>
    <Container 
        sx={{
            width:'100%',
            mt:10,
            display: "flex",
            flexDirection: {xs:'column', md:"row"},
            alignItems: "center",
        }}>
        <Box sx={{
            width:'100%',
            background: `url(${images.mid_banner_two_bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat', 
            }}>
            <img src={images.mid_banner_two} alt="" style={{width:'100%', height:'auto'}} />
        </Box>
        <Box sx={{ml:{md:3}, mt:{xs:5, md:0},display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
            <Typography variant='h6' sx={{ fontWeight:theme.typography.fontWeightBold, color:theme.palette.primary.main}}>
                _OUR BENEFITS_
            </Typography>
            <Typography variant="h1" sx={{mt:2,mb:2}}>
                Easy steps for healthier life
            </Typography>
            <Typography variant='h6' sx={{fontWeight:theme.typography.fontWeightMedium}}>
            Consectetur adipisicing elit, sed do eiusmod Tempor incididunt Labore et dolore magna aliqua ut enim. Veniam quis nostrud exercitation ullamco ut aliquip. Duis aute irure dolor.
            </Typography>
            <Box sx={{width:'100%'}}>
                <PurchaseCard title="Standard Pricing Plan" price="INR 35/week" />
                <PurchaseCard title="Professional Pricing Plan" price="INR 35/week" />
                <PurchaseCard title="Private Pricing Plan" price="INR 35/week" /> 
            </Box>
        </Box>
    </Container> 
    </>
  )
}

export default MidBannerThree