import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Divider, Button } from "@mui/material";
import { theme } from "../../theme";
import { images } from "../../constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../../components/utils/CartCard/CartCard";
import OrderComponent from "../../components/OrderComponent/OrderComponent";
import PaymentDetails from "../../components/PaymentSummary/PaymentSummary";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getCartData = async () => {
  //     const {data} = dispatch(getCart())
  //   }
  //   getCartData()
  // } , [])

  // console.log(cartData);

  const productIdData = useSelector((state) => state.cart.cart);

  useEffect(() => {
    const getCartData = async () => {
      const { data } = await axios.post(
        `http://localhost:5000/api/yoga/getProduct`,
        productIdData
      );
      setCartData(data);
    };
    getCartData();
  }, []);

  function getTotalPrice() {
    let totalPrice = 0;
    let totalDiscountPrice = 0;
    cartData.map((item) => {
      totalPrice += item.price * 1;
      totalDiscountPrice += item.discountPrice * 1;
    });
    return { totalPrice, totalDiscountPrice };
  }

  function calculateDiscount(totalPrice, totalDiscountPrice) {
    return (100 - (totalDiscountPrice / totalPrice) * 100).toFixed(2);
  }

  return (
    <>
      <Container
        sx={{
          pb: 8,
          maxWidth: { xs: "100%" },
          pt: 5,
          backgroundColor: theme.palette.background.light,
          backgroundImage: `url(${images.pattern_three})`,
          height: "100%",
          minHeight: "50vh",
        }}
      >
        <Box sx={{ width: "100%", m: "auto", textAlign: "center", pb: 2 }}>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: theme.typography.fontWeightBold,
            }}
          >
            CART
          </Typography>
          <div
            className="darkbar"
            style={{ margin: "auto", marginTop: "20px" }}
          ></div>
        </Box>

        {cartData.length === 0 ? (
          <Box
            sx={{ width: "100%", m: "auto", textAlign: "center", pb: 2, mt: 10 }}
          >
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.text.main,
                fontWeight: theme.typography.fontWeightMedium,
              }}
            >
              Cart Is Empty
            </Typography>
            <Link to="/shop" style={{textDecoration:'none'}}>
              <Button variant="contained" color="primary" sx={{mt:3}}>
                <Typography variant="h6">Shop Now</Typography>
              </Button>
            </Link>
          </Box>
        ) : (
          <Box
            sx={{
              maxWidth: "1300px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "flex-start",
              justifyContent: "center",
              width: "100%",
              m: "auto",
            }}
          >
            <Box
              sx={{
                maxWidth: "800px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: theme.palette.background.default,
                borderRadius: "5px",
                p: 2,
                width: "100%",
                boxShadow: 1,
                mr: { xs: 0, md: 2 },
              }}
            >
              <OrderComponent />
            </Box>
            <Box
              sx={{
                maxWidth: "400px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: theme.palette.background.default,
                borderRadius: "5px",
                p: 2,
                width: "100%",
                boxShadow: 1,
                ml: { xs: 0, md: 2 },
                m: { xs: "auto", md: 0 },
                mt: { xs: 4, md: 0 },
              }}
            >
              <PaymentDetails
                totalDiscountPrice={getTotalPrice().totalDiscountPrice}
                totalPrice={getTotalPrice().totalPrice}
                totalDiscount={calculateDiscount(
                  getTotalPrice().totalPrice,
                  getTotalPrice().totalDiscountPrice
                )}
              />
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Cart;
