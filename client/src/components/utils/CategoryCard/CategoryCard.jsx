import { Typography, Box } from '@mui/material'
import React from 'react'
import { theme } from '../../../theme'

const CategoryCard = (props) => {
    const {category, quantity} = props
  return (
    <>
    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderRadius:'5px', width:'100%', p:1, boxShadow:1, backgroundColor:theme.palette.background.light}}>
        <Box>
        <Typography variant='h6' sx={{color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightMedium}}>
            {category}
        </Typography>
        </Box>
        <Box sx={{borderRadius:'50%', backgroundColor:theme.palette.background.default, p:1}}>
        <Typography sx={{color:theme.palette.text.main}}>
            {quantity}
        </Typography>  
        </Box>
    </Box>
    </>
  )
}

export default CategoryCard
