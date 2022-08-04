import {Container, Box, Typography } from '@mui/material'
import React from 'react'
import ProgressComponent from '../utils/ProgressComponent/ProgressComponent'
import {theme} from '../../theme'
import {images} from '../../constants'

const MidBannerFour = () => {
  return (
    <>
    <Container sx={{
        pt:10,
        maxWidth: { xs: "100%" },
        mt:10,
        pb:10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.background.main,
        backgroundImage: `url(${images.pattern})`,
        color:theme.palette.text.default,
    }}>
        <Box sx={{width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <Box sx={{width:'30vw'}}>
            <Typography variant="h6" sx={{fontWeight:theme.typography.fontWeightBold, mb:2}}>
                _CONNECT WITH NATURE_
            </Typography>
            <Typography variant='h1'>
                The natural way to get your mind & body together
            </Typography>
        </Box>
        <Box sx={{width:'30vw', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:'#22263133', p:3, }}>
            <Box>

            </Box>
            <Box>
                <Typography sx={{fontSize:'48px', fontWeight:500}}>
                    980+
                </Typography>
                <Typography sx={{fontSize:'15px', fontWeight:600}}>
                    Happy Students
                </Typography>
            </Box>
        </Box>
        <Box sx={{width:'30vw'}}>
            <Box sx={{mb:5}}>
                <ProgressComponent title="Personal Trainers" value="80" color="white" />
            </Box>
            <Box>
                <ProgressComponent title="Yoga Training" value="70" color="white" />
            </Box>
        </Box>
        </Box>        
    </Container>
    </>
  )
}

export default MidBannerFour