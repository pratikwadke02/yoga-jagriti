import React from "react";
import { Box } from "@mui/material";
import { images } from "../../constants";

const Display = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: {xs:'column-reverse', md:"row"}, alignItems: "center", justifyContent: {xs:"center", md:"flex-end" }}}
      >
        <Box
          sx={{
            height: "100%",
            width:{xs:"100%", md:'fit-content'},
            maxWidth:{xs:'350px', md:'100%'},
            mt:{xs:2, md:0},
            mr:{xs:0,md:2},
            display: "flex",
            flexDirection: {xs:"row", md:"column"},
            justifyContent:{xs:'space-between', md:'flex-start'},
            alignItems:{xs:'center', md:'flex-start'},
          }}
        >
          <Box sx={{ mb:1   }}>
            <img
              src={images.product_ghee}
              alt=""
              height={80}
              style={{ borderRadius: "4px" }}
            />
          </Box>
          <Box sx={{mb:1}}>
            <img
              src={images.product_ghee}
              alt=""
              height={80}
              style={{ borderRadius: "4px" }}
            />
          </Box>
          <Box sx={{   mb:1 }}>
            <img
              src={images.product_ghee}
              alt=""
              height={80}
              style={{ borderRadius: "4px" }}
            />
          </Box>
          <Box sx={{  mb:{xs:1, md:0}  }}>
            <img
              src={images.product_ghee}
              alt=""
              height={80}
              style={{ borderRadius: "4px" }}
            />
          </Box>
          
        </Box>
        <Box>
          <img
            src={images.product_ghee}
            alt=""
            style={{
              width: "100%",
              height: "auto",
              width: "350px",
              borderRadius: "4px",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Display;
