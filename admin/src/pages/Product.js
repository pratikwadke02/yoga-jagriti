import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  TextField,
} from '@mui/material';
import Page from '../components/Page';

const Product = () => {

    const [product, setProduct] = useState({
        name: "",
        quantity: "",
        price: "",
        discountPrice: "",
        description: "",
    });

    const handleChange = ({currentTarget: input}) => {
        setProduct({
            ...product,
            [input.name]: input.value
        })
        console.log(product);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            console.log(product)
            await axios
                .post("https://yogajagriti.herokuapp.com/api/yoga/addProduct", product)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
            setProduct({
                name: "",
                quantity: "",
                price: "",
                discountPrice: "",
                description: "",
            });
            alert("Product added successfully");
        }catch(error){
            console.log(error);
        }
    };





  return (
    <>
      <Page title="User">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Add New Product
            </Typography>
          </Stack>
          <Card sx={{ p: 2 }}>
            <form onSubmit={handleSubmit}>
                <Box sx={{display:'flex',flexDirection:{xs:'column', md:'row'}, mb:2}}>
                    <TextField label="Product Name" variant="outlined" fullWidth  sx={{mr:{md:1}}} name="name" value={product.name} onChange={handleChange} />
                    <TextField label="Quantity" variant="outlined" fullWidth sx={{ml:{md:1}, mt:{xs:2, md:0}}} type="number" name='quantity' value={product.quantity} onChange={handleChange} />
                </Box>
                <Box sx={{display:'flex',flexDirection:{xs:'column', md:'row'}, mt:2, mb:2}}>
                    <TextField label="Price" variant="outlined" fullWidth  sx={{mr:{md:1}}} type="number" name='price' value={product.price} onChange={handleChange} />
                    <TextField label="Discount Price" variant="outlined" fullWidth sx={{ml:{md:1}, mt:{xs:2, md:0}}} type="number" name='discountPrice' value={product.discountPrice} onChange={handleChange} />
                </Box>
                <Box sx={{display:'flex', mt:2, mb:2}}>
                    <TextField label="Product Description" variant="outlined" fullWidth multiline rows={2} name='description' value={product.description} onChange={handleChange} />
                </Box>
                <Box>
                    <Button variant="contained" color="primary" type='submit' >
                        Add Product
                    </Button>
                </Box>
            </form>
          </Card>
        </Container>
      </Page>
    </>
  );
};

export default Product;
