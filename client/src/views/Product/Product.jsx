import React from "react";
import Details from "../../components/Details/Details";
import Display from "../../components/Display/Display";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import { Box, Container, Typography } from "@mui/material";
import { theme } from "../../theme";
import { images } from "../../constants";
import './Product.css'

const Product = () => {
  return (
    <>
      <Container
        sx={{
          
          mt: 28,
          position: "relative",
        //   background: `url(${images.bg_pattern})`,
        //   backgroundSize: "800px",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
          maxWidth: { xs: "1600px" },
          height: "100%",
          pb:3,
          pt: 5,
          display: "flex",
          flexDirection: { xs: "column" },
          justifyContent: "center",
        }}

        className="product-container"
      >
        <Box sx={{ width: { xs: "100%" }, display: "flex", flexDirection: "column", maxWidth:'1100px' , justifyContent:'flex-start', m:'auto', mb:2,}}>
        <Typography variant="h2" sx={{fontWeight: "bold", color: theme.palette.primary.main}}>
            SHOP NOW
          </Typography>
          </Box>
        <Box sx={{position: "relative", display: "flex", flexDirection:{xs:'column', md:'row'}, zIndex:2,  }}>
          <Box sx={{ mr: { xs: 0, md: 2 }, width: { xs: "100%", md: "80%" } }}>
            <Display />
          </Box>
          <Box
            sx={{ mt: { xs: 2, md: 0 }, ml: { xs: 0, md: 2 }, width: "100%" }}
          >
            <Details />
          </Box>
        </Box>
        <Box sx={{zIndex:1, position: "relative", width: "100%", m: "auto" }}>
          <RelatedProducts />
        </Box>
      </Container>
    </>
  );
};

export default Product;
