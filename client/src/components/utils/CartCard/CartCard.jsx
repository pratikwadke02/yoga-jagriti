import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { images } from "../../../constants";
import { theme } from "../../../theme";

const CartCard = (props) => {
  const { name, image, desc, price, quantity, discountPrice, id } = props;

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {xs:'column', md:"row"},
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display:'flex', flexDirection:{xs:'column', md:'row'}  }}>
          <img src={images.product} alt="" style={{ borderRadius: "5px", height:'auto' }} />
          <Box sx={{display:'flex', flexDirection:'column', ml:{xs:0, md:2}, mt:{xs:2, md:0}}}>
          <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: theme.typography.fontWeightMedium,
              }}
            >
              {name}
            </Typography>
            <Typography variant="h7" sx={{color:theme.palette.text.main, fontWeight: theme.typography.fontWeightMedium,mt:1 }}>
              {desc}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mt:{xs:1, md:0},
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
              ₹{discountPrice}{" "}
              <Typography variant="h7" sx={{ color: theme.palette.text.dark }}>
                <s>₹{price}</s>{" "}
              </Typography>
            </Typography>
          </Box>
          <Box>
            <Box
          sx={{
            mt:{xs:1, md:0},
            width: "fit-content",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: "1px solid" + theme.palette.text.light,
          }}
        >
          <Button
            sx={{
              minWidth:'20px',
              borderRadius: "0px",
              borderRight: "1px solid" + theme.palette.text.light,
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
            1
          </Typography>
          <Button
            sx={{
              minWidth:'20px',
              borderRadius: "0px",
              borderLeft: "1px solid" + theme.palette.text.light,
            }}
          >
            <Typography
              variant="h6"
              sx={{maxWidth:'10px', fontWeight: theme.typography.fontWeightBold }}
            >
              -
            </Typography>
          </Button>
        </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CartCard;
