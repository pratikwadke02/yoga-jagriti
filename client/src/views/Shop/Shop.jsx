import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { theme } from "../../theme";
import { images } from "../../constants";
import ProductCard from "../../components/utils/ProductCard/ProductCard";

const Shop = () => {

  const products = 3;

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
          minHeight: "95vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1400px",
            m: "auto",
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{
                m: "auto",
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.primary.main,
              }}
            >
              SHOP
            </Typography>
          </Box>
          <Box sx={{ width: "100%", maxWidth: "200px" }}>
            <input
              type="text"
              name="search"
              id="search"
              class="form-control"
              placeholder="Search"
              //   value={data.firstName}
              //   onChange={handleChange}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            maxWidth: "1400px",
            m: "auto",
            mt: 3,
          }}
        >
          <Box sx={{ width: "100%", maxWidth: "300px" }}>
            <Typography
              variant="h5"
              sx={{ m: "auto", color: theme.palette.text.main }}
            >
              Filters
            </Typography>
          </Box>
          <Box
            sx={{ width: "100%", maxWidth: "1100px", display: "flex",flexDirection:'column', p: 1 }}
          >
            {
              Array.from({ length: products }, (v, k) => k).map((product) => {
                return (
                  <Box sx={{display:'flex', width:'100%'}}>
              <Box sx={{ width: "100%", mr: 1, ml: 1, mb:2 }}>
                <ProductCard
                  name="Product Name"
                  desc="Product details"
                  price="9.99"
                />
              </Box>
              <Box sx={{ width: "100%", mr: 1, ml: 1,mb:2}}>
                <ProductCard
                  name="Product Name"
                  desc="Product details"
                  price="9.99"
                />
              </Box>
              <Box sx={{ width: "100%", mr: 1, ml: 1, mb:2 }}>
                <ProductCard
                  name="Product Name"
                  desc="Product details"
                  price="9.99"
                />
              </Box>
            </Box>
                )
                })
            }
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Shop;
