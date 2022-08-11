import { Typography, Box } from '@mui/material'
import React from 'react'
import { images } from '../../../constants';
import {theme} from '../../../theme'

const TeamCard = (props) => {

    const {role, name, image} = props;

  return (
    <>
    <Box sx={{width:'100%', mr:2, mb:{xs:4, md:0}}}>
          <img src= {image} alt="" style={{width:'100%', height:'auto'}} />
        <Box sx={{width:'100%', backgroundColor:theme.palette.background.main, p:2, textAlign:'center'}}>
            <Typography variant='h6' sx={{color:theme.palette.text.light }}>
                {role}
            </Typography>
            <Typography variant='h4' sx={{mt:.5, color:theme.palette.background.default}}>{name}</Typography>
        </Box>
    </Box>
    </>
  )
}

export default TeamCard