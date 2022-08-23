import React from 'react'
import {Box, Divider, Typography} from '@mui/material'
import {theme} from '../../theme'

const YourOrdersComponent = () => {
  return (
    <>
    <Box sx={{
        backgroundColor:theme.palette.background.default,
        p:2,
        borderRadius:'5px',
        boxShadow:1,
    }}>
        <Box>
            <Typography variant='h4' sx={{fontWeight:theme.typography.fontWeightMedium}}>
                Your Orders
            </Typography>
        </Box>
        <Box sx={{display:'flex', flexDirection:'row', border:'1px solid'+theme.palette.text.light, mt:2}}>
            <Box sx={{display:'flex', flexDirection:'column', width:'100%', borderRight:'1px solid'+theme.palette.text.light}}>
                <Box sx={{backgroundColor:theme.palette.primary.main, p:1, textAlign:'center'}}>
                    <Typography variant='h5' sx={{color:theme.palette.text.default}}>
                        Product
                    </Typography>
                </Box>
                <Box sx={{p:1}}>
                    <Typography variant='h6'>
                        Yoga Matt
                    </Typography>
                </Box>
                <Divider sx={{backgroundColor:theme.palette.text.dark}} />
                <Box sx={{p:1}}>
                    <Typography variant='h6'>
                        Sub Total
                    </Typography>
                </Box>
                <Box sx={{p:1}}>
                    <Typography variant='h6'>
                        Shipping
                    </Typography>
                </Box>
                <Box sx={{p:1}}>
                    <Typography variant='h6'>
                        Total
                    </Typography>
                </Box>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column',width:'100%'}}>
                <Box sx={{backgroundColor:theme.palette.primary.main, p:1, textAlign:'center'}}>
                    <Typography variant='h5' sx={{color:theme.palette.text.default}}>
                        Total
                    </Typography>
                </Box>
                <Box sx={{p:1}}>
                    <Typography variant='h6'>
                    ₹999  
                    </Typography>
                </Box>
                <Divider sx={{backgroundColor:theme.palette.text.dark}} />
                <Box sx={{p:1}}>
                    <Typography variant='h6'>
                    ₹999
                    </Typography>
                </Box>
                <Box sx={{p:1}}>
                    <Typography variant='h6'>
                       Free Shipping
                    </Typography>
                </Box>
                <Box sx={{p:1}}>
                    <Typography variant='h6'>
                    ₹999
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default YourOrdersComponent
