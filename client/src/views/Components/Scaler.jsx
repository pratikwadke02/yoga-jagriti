import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import BioCard from '../../components/utils/BioCard/BioCard'

const Scaler = () => {
  return (
    <>
    <Container sx={{backgroundColor: '#f8faff', width:'100%', height:'100vh'}}>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',pt:5, pb:5}}>
            <Typography sx={{fontSize:'21px', fontWeight:700}}>
                2500+ Scaler Lives Transformed And Counting
            </Typography>
        </Box>
        <Box sx={{display:'flex', flexDirection:'column'}}>
            <Box sx={{display:'flex', flexDirection:{xs:"column", md:"row"}}}>
                <BioCard />
                <BioCard />
            </Box>
            <Box sx={{display:'flex',  flexDirection:{xs:"column", md:"row"}}}>
                <BioCard />
                <BioCard />
            </Box>
        </Box>
    </Container>        
    </>
  )
}

export default Scaler