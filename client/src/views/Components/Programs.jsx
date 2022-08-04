import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import ProgramCard from '../../components/utils/ProgramCard/ProgramCard'

const Programs = () => {
  return (
    <>
    <Container sx={{backgroundColor: '#f8faff', width:'100%', height:'100vh'}}>
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',pt:5, pb:5}}>
        <Typography sx={{fontSize:'21px', fontWeight:700}}>
            Scalar Programs
        </Typography>
      </Box>
      <Box sx={{display:'flex', flexDirection:'column'}}>
        <Box sx={{display:'flex', flexDirection:{xs:"column", sm:"row"}}}>
        <ProgramCard />
        <ProgramCard />
        </Box>
        <Box sx={{display:'flex',  flexDirection:{xs:"column", sm:"row"}}}>
        <ProgramCard />
        <ProgramCard />
        </Box>
      </Box>
    </Container>
    </>
  )
}

export default Programs