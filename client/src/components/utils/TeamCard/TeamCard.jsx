import { Typography, Box } from '@mui/material'
import React from 'react'
import { images } from '../../../constants';
import {theme} from '../../../theme'

const TeamCard = (props) => {

    const {role, name, image} = props;

  return (
    <>
    <Box sx={{width:'100%', mr:2}}>
          <img src= {image} alt="" style={{width:'100%'}} />
        <Box sx={{width:'100%', backgroundColor:theme.palette.background.light, p:2, textAlign:'center'}}>
            <Typography variant='h6' sx={{color:theme.palette.primary.main }}>
                {role}
            </Typography>
            <Typography variant='h4' sx={{mt:.5}}>{name}</Typography>
        </Box>
    </Box>
    </>
  )
}

export default TeamCard