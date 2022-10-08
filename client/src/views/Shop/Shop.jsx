import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Grid, Slider, Button, Checkbox, FormControl, FormLabel, FormGroup, FormControlLabel, FormHelperText } from "@mui/material";
import { theme } from "../../theme";
import { images } from "../../constants";
import ShopCard from "../../components/utils/ProductCard/ShopCard";
import CategoryCard from "../../components/utils/CategoryCard/CategoryCard";
import { useSelector } from "react-redux";

const minDistance = 10;

function valuetext(value) {
  return `${value}°C`;
}



const Shop = () => {

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  const categoryData = [
    {
      category: "Pure Ghee",
      quantity: 35,
    },
    {
      category: "Mustard Oil",
      quantity: 70,
    },
    {
      category: "Turmeric",
      quantity: 150,
    },
    {
      category: "Naturopathy Products",
      quantity: 25,
    },
  ];

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const getProductsData = async () => {
  //     const { data } = await axios.get(
  //       "https://yogajagriti.herokuapp.com/api/yoga/getAllProducts"
  //     ); 
  //     setProducts(data);
  //     console.log(products);
  //   };
  //   getProductsData();
  // }, []);

  const products = useSelector((state) => state.product.products);

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
            <div className="darkbar"></div>
          </Box>
          <Box sx={{ width: "100%", maxWidth: "200px" }}>
            <input
              type="text"
              name="search"
              id="search"
              className="form-control"
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
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "space-between",
            maxWidth: "1400px",
            m: "auto",
            mt: 3,
          }}
        >
          {/* <Box
            sx={{
              width: "100%",
              minHeight: "95vh",
              maxWidth: "300px",
              backgroundColor: theme.palette.background.default,
              boxShadow: 1,
              borderRadius: "5px",
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              mr: 1,
              p: 1,
            }}
          > */}
            {/* <Box sx={{ width: "100%" }}>
              <Typography variant="h4" sx={{ color: theme.palette.text.main }}>
                Category
              </Typography>
              <Box sx={{ width: "100%", mt: 2 }}>
                {categoryData.map((item, index) => {
                  return (
                      <Box 
                      key={index}
                      sx={{ width: "100%", mb: 2 }}>
                        <CategoryCard
                          category={item.category}
                          quantity={item.quantity}
                        />
                      </Box>
                  );
                })}
              </Box>
            </Box>
            <Box sx={{ width: "100%", mt: 4 }}>
              <Typography variant="h4" sx={{ color: theme.palette.text.main }}>
                Filters
              </Typography>
              <Box sx={{ width: "100%", mt:1 }}>
                <Typography variant='h5'>
                  Price
                </Typography>

                <Slider
                  getAriaLabel={() => "Minimum distance shift"}
                  value={value2}
                  onChange={handleChange2}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  disableSwap
                />
                <Box sx={{width:'100%', display:'flex', justifyContent:'space-between'}}> 
                  <Typography variant='h7'>
                    From
                  </Typography>
                  <Typography variant='h7'>
                    To
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{mt:2}}>
            <FormControl sx={{}} component="fieldset" variant="standard">
        <Typography variant='h5' component="legend">Color</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Red"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Green"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Yellow"
          />
        </FormGroup>
      </FormControl>
            </Box>
            <Box sx={{mt:2}}>
              <Button variant="contained" >
                <Typography variant="h6">
                  Filter
                </Typography>

              </Button>
            </Box>
          </Box> */}

          <Box
            sx={{
              width: "100%",
              maxWidth: "1100px",
              display: "flex",
              flexDirection: "column",
              ml: 1,
              alignItems: "center",
              m:'auto'
            }}
          >
            <Grid container spacing={3}>
              {products.map((product, index) => {
                return (
                  <Grid 
                  key={index}
                  item xs={12} sm={6} lg={4}>
                  
                    <ShopCard
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      desc={product.description}
                      quantity={product.quantity}
                      discountPrice={product.discountPrice}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Shop;
