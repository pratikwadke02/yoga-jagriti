import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { images } from "../../../constants";
import { theme } from "../../../theme";
import { useDispatch } from "react-redux";
import { Decrement, Increment, Delete } from "../../../actions/cart";

const CartCard = (props) => {
  const { name, image, desc, price, quantity, discountPrice, id } = props;

  // const price = 2000
  // const discountPrice = 1900
  const [qty, setQty] = useState(quantity);

  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    try {
      dispatch(Increment(id));
      setQty(qty + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecrement = (id) => {
    try {
      if(qty > 1) {
        dispatch(Decrement(id));
        setQty(qty - 1);
      }else{
        dispatch(Delete(id));
        setQty(0);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    try {
      dispatch(Delete(id));
      setQty(0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    {
      qty > 0 ? (
        <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <img
            src={images.product}
            alt=""
            style={{ borderRadius: "5px", height: "auto" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              ml: { xs: 0, md: 2 },
              mt: { xs: 2, md: 0 },
            }}
          >
            <Box>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: theme.typography.fontWeightMedium,
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.main,
                mt: 1,
              }}
            >
              {desc}
            </Typography>
            </Box>
            <Button 
              variant="contained"
              sx={{
                mt: 1,
                maxWidth: "100px",
              }}
              onClick={() => handleDelete(id)}
              >
              <Typography
                variant="h6">
                Remove
                </Typography>
              </Button>
          </Box>
        </Box>
        <Box
          sx={{
            mt: { xs: 1, md: 0 },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.main,
                fontWeight: theme.typography.fontWeightMedium,
              }}
            >
              ???{discountPrice}{" "}
              <Typography variant="h7" sx={{ color: theme.palette.text.dark }}>
                <s>???{price}</s>{" "}
              </Typography>
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                mt: { xs: 1, md: 0 },
                width: "fit-content",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                border: "1px solid" + theme.palette.text.light,
              }}
            >
              <Button
                sx={{
                  minWidth: "20px",
                  borderRadius: "0px",
                  borderRight: "1px solid" + theme.palette.text.light,
                }}
                onClick={() => {
                  handleIncrement(id);
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: theme.typography.fontWeightBold }}
                >
                  +
                </Typography>
              </Button>
              <Typography variant="h6" sx={{ ml: 2, mr: 2 }}>
                {qty}
              </Typography>
              <Button
                sx={{
                  minWidth: "20px",
                  borderRadius: "0px",
                  borderLeft: "1px solid" + theme.palette.text.light,
                }}
                onClick={() => {
                  handleDecrement(id);
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    maxWidth: "10px",
                    fontWeight: theme.typography.fontWeightBold,
                  }}
                >
                  -
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      ) : null
    }
    </>
  );
};

export default CartCard;
