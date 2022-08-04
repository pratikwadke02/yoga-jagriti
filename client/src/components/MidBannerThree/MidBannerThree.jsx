import { Button, Typography } from '@mui/material'
import { Container, Box } from '@mui/system'
import React from 'react'
import PurchaseCard from '../utils/PurchaseCard/PurchaseCard'

const MidBannerThree = () => {
  return (
    <>
    <Container>
        <Box>

        </Box>
        <Box>
            <Typography sx={{fontSize:'15px', fontWeight:500}}>
                _OUR BENEFITS_
            </Typography>
            <Typography sx={{fontSize:'46px'}}>
                Easy steps for healthier life
            </Typography>
            <Typography sx={{fontSize:'15px', fontWeight:500}}>
            Consectetur adipisicing elit, sed do eiusmod Tempor incididunt Labore et dolore magna aliqua ut enim. Veniam quis nostrud exercitation ullamco ut aliquip. Duis aute irure dolor.
            </Typography>
            <Box>
                <PurchaseCard title="Standard Pricing Plan" price="$35 / week" />"
                <PurchaseCard title="Professional Pricing Plan" price="$35 / week" />"
                <PurchaseCard title="Private Pricing Plan" price="$35 / week" />"   
            </Box>
        </Box>
    </Container> 
    </>
  )
}

export default MidBannerThree