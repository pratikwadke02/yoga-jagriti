import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { theme } from "../../theme";
import {Link} from 'react-router-dom'

const PaymentSummary = (props) => {
  const { totalPrice, totalDiscountPrice, totalDiscount } = props;

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Typography variant="h5" sx={{fontWeight: theme.typography.fontWeightMedium,}}>Payment Summary</Typography>
        </Box>
        <Box sx={{ width: "100%", display: "flex", mt:2 }}>
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.main,
                mt:1
              }}
            >
              Total:
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.main,
                mt:1
              }}
            >
              Discount:
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.main,
                mt:1
              }}
            >
              Discounted Price:
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.main,
                mt:1
              }}
            >
              ₹{totalPrice}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.main,
                mt:1
              }}
            >
              {totalDiscount > 0 ? totalDiscount : 0}%
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.main,
                mt:1
              }}
            >
              ₹{totalDiscountPrice}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Link to="/checkout" style={{textDecoration:'none'}}>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%", maxWidth: "200px" }}
          >
            <Typography variant="h6" sx={{ color: theme.palette.text.default }}>
              Checkout
            </Typography>
          </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default PaymentSummary;
