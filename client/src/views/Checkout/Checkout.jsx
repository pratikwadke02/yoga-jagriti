import { Typography, Box, Container } from '@mui/material'
import React from 'react'
import {theme} from '../../theme'
import { images } from '../../constants'
import BillingInformation from '../../components/BillingInformation/BillingInformation'
import YourOrdersComponent from '../../components/YourOrdersComponent/YourOrdersComponent'

const Checkout = () => {
  return (
  <>
   <Container
        sx={{
          pb:8,
          maxWidth: { xs: "100%" },
          pt: 5,
          backgroundColor: theme.palette.background.light,
          backgroundImage: `url(${images.pattern_three})`,
          height: "100%",
          minHeight: "95vh",
        }}
      >
        <Box sx={{width:'100%', m:'auto', textAlign:'center'}}>
            <Typography variant='h4' sx={{color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold}}>
                Checkout
            </Typography>
            <div className="darkbar" style={{margin:'auto', marginTop:'20px'}}></div>
        </Box>
        <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'},alignItems:'flex-start', justifyContent:'center', mt:4}}>
        <Box sx={{width:'100%', mr:{xs:0, md:2}}}>
            <BillingInformation />
        </Box>
        <Box sx={{width:'100%',maxWidth:'750px', ml:{xs:0, md:2}, mt:{xs:2, md:0}}}>
            <YourOrdersComponent />
        </Box>
        </Box>
      </Container>
  </>
  )
}

export default Checkout
