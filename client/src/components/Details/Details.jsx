import { Container, Box, Typography, Button } from "@mui/material";
import React from "react";
import { theme } from "../../theme";

const Details = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Box>
      <Typography
          variant="h2"
          sx={{display:{xs:'none', md:'block'}, mb: 1, color: theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold,  }}
        >
          Product Name
        </Typography>
        <Typography
          variant="h4"
          sx={{display:{xs:'block', md:'none'}, mb: 1, color: theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold,  }}
        >
          Product Name
        </Typography>
        <Typography variant="h7" sx={{display:{xs:'block', md:'none'}, mt: 1, mb: 1, textAlign:'justify', textJustify:'inter-word' }}>
          Product Desc Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Velit reiciendis cupiditate laborum quia aperiam sit nesciunt
          voluptates dolorum neque odio.
        </Typography>
        <Typography variant="h6" sx={{display:{xs:'none', md:'block'},width:'80%', mt: 1, mb: 1, textAlign:'justify', textJustify:'inter-word' }}>
          Product Desc Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Velit reiciendis cupiditate laborum quia aperiam sit nesciunt
          voluptates dolorum neque odio.
        </Typography>
        <Typography
          variant="h5"
          sx={{display:{xs:'none', md:'block'}, fontWeight: theme.typography.fontWeightBold, mt:1 }}
        >
          ₹ 999
        </Typography>
        <Typography
          variant="h6"
          sx={{display:{xs:'block', md:'none'}, fontWeight: theme.typography.fontWeightBold, mt:1 }}
        >
          ₹ 999
        </Typography>
      </Box>
      <Box
        sx={{
          width:'100%',
          mt: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            width: "fit-content",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: "1px solid" + theme.palette.text.light,
          }}
        >
          <Button
            sx={{
              borderRadius: "0px",
              borderRight: "1px solid" + theme.palette.text.light,
            }}
          >
            <Typography
              variant="h3"
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
              borderRadius: "0px",
              borderLeft: "1px solid" + theme.palette.text.light,
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: theme.typography.fontWeightBold }}
            >
              -
            </Typography>
          </Button>
        </Box>
        <Box sx={{width:'100%', mt:2, display: "flex", flexDirection:'row', position:{xs:'fixed', sm:'relative'}, bottom:0, left:0 , p:{xs:0, sm:0} }}>
          <Button variant="contained" sx={{backgroundColor:{xs:theme.palette.background.default, sm:theme.palette.primary.main}, height: "40px", width: {xs:"100%", md:"200px"},borderRadius:{xs:'0px', sm:'4px'}, mr:{xs:0, sm:2} }}>
            <Typography
              variant="h6"
              sx={{color:{xs:theme.palette.primary.main, sm:theme.palette.background.default }, fontWeight: theme.typography.fontWeightBold }}
            >
              Add to Cart
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ height: "40px",borderRadius:{xs:'0px', sm:'4px'}, width: {xs:"100%", md:"200px"} }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: theme.typography.fontWeightBold }}
            >
              Buy Now
            </Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Details;
