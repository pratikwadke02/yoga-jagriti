import {Container, Box, Typography } from '@mui/material'
import React from 'react'
import ProgressComponent from '../utils/ProgressComponent/ProgressComponent'

const MidBannerFour = () => {
  return (
    <>
    <Container>
        <Box>
            <Typography sx={{fontSize:'15px', fontWeight:500}}>
                _CONNECT WITH NATURE_
            </Typography>
            <Typography sx={{fontSize:'46px'}}>
                The natural way to get your mind & body together
            </Typography>
        </Box>
        <Box>
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
        <Box>
            <Box>
                <ProgressComponent title="Personal Trainers" value="80" />
            </Box>
            <Box>
                <ProgressComponent title="Yoga Training" value="70" />
            </Box>
        </Box>        
    </Container>
    </>
  )
}

export default MidBannerFour