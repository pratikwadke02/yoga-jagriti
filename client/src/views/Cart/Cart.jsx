import React, {useEffect} from 'react'
import { Container, Box } from '@mui/material'
import {theme} from '../../theme'
import {images} from '../../constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART } from '../../constants/actionTypes'
import { getCart } from '../../actions/cart'

const Cart = () => {

    const [cartData, setCartData] = React.useState([])

    const dispatch = useDispatch();

    // useEffect(() => {
    //   const getCartData = async () => {
    //     const {data} = dispatch(getCart())
    //   }
    //   getCartData()
    // } , [])

    // console.log(cartData);

    const productIdData  = (useSelector(state => state.cart.cart));
    console.log(productIdData);


    

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
          minHeight: "45vh",
        }}
      >
        <Box sx={{maxwidth:'1400px', display:'flex', flexDirection:'column'}}>


        </Box>
      </Container>
    </>
  )
}

export default Cart
