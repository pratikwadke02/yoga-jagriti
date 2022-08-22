import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Container, Box, Typography, Grid } from "@mui/material";
import { theme } from "../../theme";
import { images } from "../../constants";
import ShopCard from "../../components/utils/ProductCard/ShopCard";

const Shop = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsData = async () => {
      const { data } = await axios.get('http://localhost:8080/api/yoga/getAllProducts');
      setProducts(data);
      console.log(products);
    };
    getProductsData();
  }, []);


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
            alignItems: {xs:'center', md:"flex-start"},
            justifyContent: "space-between",
            maxWidth: "1400px",
            m: "auto",
            mt: 3,
          }}
        >
          <Box sx={{width: "100%", height:'100%',minHeight:'95vh', maxWidth: "300px", backgroundColor:theme.palette.background.default, boxShadow:1, borderRadius:'5px',display:{xs:'none', md:'flex'}, mr:1 }}>
            <Typography
              variant="h5"
              sx={{ m: "auto", color: theme.palette.text.main }}
            >
              Filters
            </Typography>
          </Box>
          <Box
            sx={{ width: "100%", maxWidth: "1100px", display: "flex",flexDirection:'column',ml:1, alignItems:'center'}}
          >
            <Grid container spacing={3} >
              {
                products.map((product, index) => {
                  return (
                    <Grid item xs={12} sm={6} lg={4} key={index}>
                      <ShopCard id={product.id} name={product.name} price={product.price} desc={product.description} quantity={product.quantity} discountPrice={product.discountPrice} />
                    </Grid>
                  );
                }
                )
              }
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Shop;
