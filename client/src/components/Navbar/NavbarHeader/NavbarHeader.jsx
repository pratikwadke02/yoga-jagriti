import { Button, Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {theme} from '../../../theme'
import CallIcon from '@mui/icons-material/Call';

const NavbarHeader = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'row', mt:1, float:'right'}}>
        <Box sx={{mr:1}}>
        <Link to="/login" style={{textDecoration:'none'}}>
            <Button variant="contained" sx={{height:{xs:'20px', md:'30px'}}}>
              <Typography variant="h6" sx={{ color: theme.palette.text.default, fontWeight: theme.typography.fontWeightBold, display:{xs:'none', md:'block'} }}>
                Login
              </Typography>
              <Typography variant="h7" sx={{ color: theme.palette.text.default, fontWeight: theme.typography.fontWeightBold, display:{md:'none'} }}>
                Login
              </Typography>
            </Button>
            </Link>
        </Box>
        <Box sx={{ml:1, mr:1}}>
        <Link to="/register" style={{textDecoration:'none'}}>
        <Button variant="contained" sx={{height:{xs:'20px', md:'30px'}}}>
              <Typography variant="h6" sx={{ color: theme.palette.text.default, fontWeight: theme.typography.fontWeightBold, display:{xs:'none', md:'block'} }}>
                register
              </Typography>
              <Typography variant="h7" sx={{ color: theme.palette.text.default, fontWeight: theme.typography.fontWeightBold, display:{md:'none'} }}>
                Register
              </Typography>
            </Button>
            </Link>
        </Box>
        <Box sx={{ml:1, display:'flex', flexDirection:'row', alignItems:'center'}}>
            <CallIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />
            <Typography variant="h6" sx={{ color: theme.palette.text.main, fontWeight: theme.typography.fontWeightMedium, ml:1, display:{xs:'none', md:'block'} }}>
                +91-11-42765248
            </Typography>
            <Typography variant="h7" sx={{ color: theme.palette.text.main, fontWeight: theme.typography.fontWeightMedium, ml:1, display: {md:'none'} }}>
                +91-11-42765248
            </Typography>
        </Box>
    </Box>
  )
}

export default NavbarHeader
