import React from "react";
import Details from "../../components/Details/Details";
import Display from "../../components/Display/Display";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import FaqProduct from '../../components/FaqProduct/FaqProduct'
import { Box, Container, Typography } from "@mui/material";
import { theme } from "../../theme";
import { images } from "../../constants";
import './Product.css'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Product = () => {

  const productId = (useParams()).id;
  const productsData = useSelector(state => state.product.products);
  // console.log(productId)
  const productData = (productsData.filter((item) => item.id == productId))[0];
  // console.log(productData)


  return (
    <>
      <Container
        sx={{
          backgroundImage: `url(${images.pattern_three})`,
          maxWidth: { xs: "100%" },
          height: "100%",
          pb:3,
          pt: 5,
          display: "flex",
          flexDirection: { xs: "column" },
          justifyContent: "center",
        }}
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
            <Details id={productData.id} name={productData.name} desc={productData.description} price={productData.price} discountPrice={productData.discountPrice} />
          </Box>
        </Box>
        <Box sx={{zIndex:1, position: "relative", width: "100%", m: "auto" }}>
          <FaqProduct />
        </Box>
        <Box sx={{zIndex:1, position: "relative", width: "100%", m: "auto" }}>
          <RelatedProducts />
        </Box>
      </Container>
    </>
  );
};

export default Product;
