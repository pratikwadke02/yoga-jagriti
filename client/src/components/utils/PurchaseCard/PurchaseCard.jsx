import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";

const PurchaseCard = (props) => {

    const {icon, title, price} = props;

  return (
    <>
      <Container>
        <Box></Box>
        <Box>
          <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: "16px" }}>{price}</Typography>
        </Box>
        <Box>
          <Button variant="contained" sx={{ backgroundColor: "#FAF6F2" }}>
            PURCHASE
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default PurchaseCard;
