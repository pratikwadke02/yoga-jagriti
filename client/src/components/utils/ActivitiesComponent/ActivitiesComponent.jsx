import React from 'react'
import {Box, Typography} from '@mui/material';
import {theme} from '../../../theme'

const ActivitiesComponent = (props) => {

    const {activity} = props;

  return (
    <>
    <Box sx={{m:'auto',minHeight:{md:'105px'}, maxWidth:'450px', border:'3px dashed'+theme.palette.primary.main, p:1, borderRadius:'10px'}}>
                <Typography variant='h6' sx={{ fontWeight:theme.typography.fontWeightBold, textAlign:'justify',textJustify:'inter-word'}}>
                {activity}
                </Typography>
            </Box>
    </>
  )
}

export default ActivitiesComponent