import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import {theme} from '../../theme'
import {images} from '../../constants'
import { useSelector } from 'react-redux'
import MyOrderTable from '../../components/MyOrderTable/MyOrderTable'

const Orders = () => {

    const orderDetails = (useSelector(state => state.order.orders))
    console.log(orderDetails)

  return (
    <>
    <Container
        sx={{
          pb:8,
          maxWidth: { xs: "100%" },
          pt: 5,
          backgroundColor: theme.palette.background.light,
          backgroundImage: `url(${images.pattern_three})`,
          height: "100%",
          minHeight: "95vh",
        }}
      >
        <Box sx={{textAlign:'center'}}>
            <Typography variant='h4' sx={{color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold}}>
                Orders
            </Typography>
            <div className="darkbar" style={{margin:'auto', marginTop:'20px'}}></div>
        </Box>
        <Box
        sx={{
            maxWidth:'1400px',
            width:'100%',
            m:'auto',
            mt:4
        }}
        >
            <MyOrderTable />

        </Box>
      </Container>
    </>
  )
}

export default Orders
