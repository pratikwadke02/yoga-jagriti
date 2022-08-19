import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme'
import ProgramCard from '../utils/ProductCard/ProductCard'
import '../HeaderBanner/HeaderBanner.css'

const RelatedProducts = () => {
  return (
    <Container sx={{mt:5}}>
        <Box sx={{mb:{xs:2, md:0},display:'flex', justifyContent:'space-between'}}>
            <Typography variant='h5' sx={{fontWeight:theme.typography.fontWeightBold }}>
                Related Products
            </Typography>
            <Typography variant='h6' sx={{fontWeight:theme.typography.fontWeightBold }}>
                See all
            </Typography>
        </Box>
        <Box  sx={{display:{xs:'none', md:'flex'}, flexDirection:'row', mt:2, justifyContent:'center'}}>
          <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}}}>

          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
        </Box>
        <Box sx={{display:{xs:'none', lg:'none'}, flexDirection:{xs:'column', md:'row'}}}>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
        </Box>
          {/* <ProgramCard name="Product Name" desc="Product details" price="9.99"/> */}
        </Box>
        <Box className="marquee" sx={{display:{xs:'flex', md:'none'}}}>
          <Box className="track" sx={{display:'flex'}}>
            <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
            <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
            <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
            <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          </Box>
        </Box>
    </Container>
  )
}

export default RelatedProducts