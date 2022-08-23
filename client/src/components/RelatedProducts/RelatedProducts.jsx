import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme'
import ProductCard from '../utils/ProductCard/ProductCard'
import '../HeaderBanner/HeaderBanner.css'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const RelatedProducts = () => {

  const productsData = useSelector(state => state.product.products)
  const productDataOne = productsData.slice(0,3);
  const productDataTwo = productsData.slice(3,4);

  return (
    <Container sx={{mt:5}}>
        <Box sx={{mb:{xs:2, md:0},display:'flex', justifyContent:'space-between'}}>
            <Typography variant='h5' sx={{fontWeight:theme.typography.fontWeightBold }}>
                Related Products
            </Typography>
            <Typography variant='h6' sx={{fontWeight:theme.typography.fontWeightBold }}>
                See all
            </Typography>
        </Box>
        <Box  sx={{display:{xs:'none', md:'flex'}, flexDirection:'row', mt:2, justifyContent:'center'}}>
          <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}}}>
          {
                productDataOne.map((product, index) => {
                  return (
                    <>
                    <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", marginRight: "40px" }}
              >
                <ProductCard
                  name={product.name}
                  desc={product.description}
                  price={product.price}
                  discountPrice={product.discountPrice}
                />
              </Link>
                    </>
                  )
                })
              }
          {/* <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
          <ProgramCard name="Product Name" desc="Product details" price="9.99"/> */}
        </Box>
        <Box sx={{display:{xs:'none', lg:'none'}, flexDirection:{xs:'column', md:'row'}}}>
        {
                productDataTwo.map((product, index) => {
                  return (
                    <>
                    <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", marginRight: "40px" }}
              >
                <ProductCard
                  name={product.name}
                  desc={product.description}
                  price={product.price}
                  discountPrice={product.discountPrice}
                />
              </Link>
                    </>
                  )
                })
              }
          {/* <ProgramCard name="Product Name" desc="Product details" price="9.99"/> */}
        </Box>
          {/* <ProgramCard name="Product Name" desc="Product details" price="9.99"/> */}
        </Box>
        <Box className="marquee" sx={{display:{xs:'flex', md:'none'}}}>
          <Box className="track" sx={{display:'flex'}}>
          {productsData.map((product, index) => {
              return (
                <>
                  <Link
                    to={`/product/${product.id}`}
                    style={{ textDecoration: "none", marginRight: "40px" }}
                  >
                    <ProductCard
                      name={product.name}
                      desc={product.description}
                      price={product.price}
                      discountPrice={product.discountPrice}
                    />
                  </Link>
                </>
              );
            })}
            {/* <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
            <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
            <ProgramCard name="Product Name" desc="Product details" price="9.99"/>
            <ProgramCard name="Product Name" desc="Product details" price="9.99"/> */}
          </Box>
        </Box>
    </Container>
  )
}

export default RelatedProducts