import React, {useEffect, useState} from 'react'
import { Container, Box, Typography, Divider, Button } from '@mui/material'
import {theme} from '../../theme'
import {images} from '../../constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../../components/utils/CartCard/CartCard'

const Cart = () => {

    const [cartData, setCartData] = useState([])

    const dispatch = useDispatch();

    // useEffect(() => {
    //   const getCartData = async () => {
    //     const {data} = dispatch(getCart())
    //   }
    //   getCartData()
    // } , [])

    // console.log(cartData);

    const productIdData  = (useSelector(state => state.cart.cart));

    useEffect(() => {
      const getCartData = async () => {
        const {data} = await axios.post(`http://localhost:8080/api/yoga/getProduct`, productIdData)
        setCartData(data)
      }
      getCartData()
    } , [])

    function getTotalPrice() {
      let totalPrice = 0;
      let totalDiscountPrice = 0;
      cartData.map(item => {
        totalPrice += item.price * 1;
        totalDiscountPrice += item.discountPrice * 1;
      } )
      return {totalPrice, totalDiscountPrice}
    }
    
    function calculateDiscount(totalPrice, totalDiscountPrice) {
      return (100 - (totalDiscountPrice / totalPrice) * 100).toFixed(2)
    }

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
          minHeight: "50vh",
        }}
      >
        <Box sx={{maxWidth:'800px', display:'flex', flexDirection:'column', m:'auto', backgroundColor:theme.palette.background.default, borderRadius:'5px', p:2}}>
          <Box sx={{width:'100%', m:'auto', textAlign:'center', pb:2}}>
            <Typography variant="h2" sx={{color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold,  }}>
              CART
            </Typography>
            <div className="darkbar" style={{margin:'auto', marginTop:'20px' }}></div>
          </Box>
          
          {cartData ? (
            cartData.map((item, index) => {
              return (
                <>
                <Box sx={{m:'auto', width:'100%', maxWidth:'500px'}}>
                  <CartCard id={item.id} name={item.name} image={item.image} desc={item.description} price={item.price} quantity={item.quantity} discountPrice={item.discountPrice} /> 
                  <Divider sx={{backgroundColor:theme.palette.text.main}} />
                </Box>
                </>
              )
            } )

          ) : (
            <Box sx={{p:4, maxWidth:'400px', m:'auto'}}>
              <Typography variant="h4" sx={{color:theme.palette.text.main, fontWeight:theme.typography.fontWeightMedium,  }}>
                No Items in Cart
              </Typography>
            </Box>
          )
          }
              <Box sx={{ textAlign:'left', maxWidth:'530px',width:'100%', m:'auto', p:2}}>
            <Box>
              <Typography variant="h6" sx={{color:theme.palette.text.main, fontWeight:theme.typography.fontWeightMedium,  }}>
                Total: {getTotalPrice().totalPrice}
              </Typography>
              <Typography variant="h6" sx={{color:theme.palette.text.main, fontWeight:theme.typography.fontWeightMedium,  }}>
                Discount: {calculateDiscount(getTotalPrice().totalPrice, getTotalPrice().totalDiscountPrice)}%
              </Typography>
              <Typography variant="h6" sx={{color:theme.palette.text.main, fontWeight:theme.typography.fontWeightMedium,  }}>
                Discounted Price: {getTotalPrice().totalDiscountPrice}
              </Typography>
            </Box>
            <Box sx={{width:'100%', display:'flex', justifyContent:'center', mt:2}}>
              <Button variant="contained" color="primary" sx={{width:'100%', maxWidth:'200px'}}>
                <Typography variant="h6" sx={{color:theme.palette.text.default  }}>
                Checkout
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Cart
