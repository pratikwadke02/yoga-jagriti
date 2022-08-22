import React from "react";
import { Box, Typography } from "@mui/material";
import { images } from "../../../constants";
import { theme } from "../../../theme";

const CartCard = (props) => {
  const { name, image, desc, price, quantity, discountPrice, id } = props;

  return (
    <>
      <Box
        sx={{
          p: 2,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{  }}>
          <img src={images.product} alt="" style={{ borderRadius: "5px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: theme.typography.fontWeightMedium,
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.main,
                fontWeight: theme.typography.fontWeightMedium,
              }}
            >
              ₹{discountPrice}{" "}
              <Typography variant="h6" sx={{ color: theme.palette.text.dark }}>
                <s>₹{price}</s>{" "}
              </Typography>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">Quantity: 1</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CartCard;
