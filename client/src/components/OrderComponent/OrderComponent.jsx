import React, { useEffect, useState } from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../../components/utils/CartCard/CartCard";
import { theme } from "../../theme";
import { clearCart } from "../../actions/cart";

const OrderComponent = () => {
  const [cartData, setCartData] = useState([]);

  const productIdData = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    try {
      dispatch(clearCart());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{}}>
            <Typography
              variant="h4"
              sx={{ fontWeight: theme.typography.fontWeightMedium }}
            >
              Order Summary
            </Typography>
          </Box>
          <Box sx={{}}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.light,
                mt: 2,
                mb: 2,
              }}
              onClick={handleDeleteAll}
            >
              Remove All Items
            </Button>
          </Box>
        </Box>
        <Box sx={{ mt: 2, width: "100%" }}>
          {productIdData.map((item, index) => {
            return (
              <>
                <Box sx={{ width: "100%", mb: 4 }}>
                  <CartCard
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    desc={item.desc}
                    price={item.price}
                    quantity={item.quantity}
                    discountPrice={item.discountPrice}
                  />
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default OrderComponent;
