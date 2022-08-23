import React from 'react'
import {Box, Icon, Typography} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {theme} from '../../../theme'

const LocationCard = (props) => {

    const {head, location} = props;

  return (
    <>
    <Box sx={{width:'100%', maxWidth:{xs:'100%', sm:'400px'}, backgroundColor:theme.palette.background.default, p:2, boxShadow:1, borderRadius:'5px'}}>
        <Box sx={{textAlign:'center'}}>
            <Typography variant='h4'>
                {head}
            </Typography>
        </Box>
        <Box sx={{display:'flex', flexDirection:'row',alignItems:'flex-start', mt:1 }}>
            <LocationOnIcon  sx={{mt:.5, mr:1}} />
            <Typography variant='h6'>
                {location}
            </Typography>
        </Box>
    </Box>
    </>
  )
}

export default LocationCard
