// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import EastIcon from "@mui/icons-material/East";
// import { Box } from "@mui/system";
// import { images } from "../../../constants";


// export default function BioCard() {


//   return (
//     <Card sx={{ m: 1, borderRadius:'10px' }}>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           background: "linear-gradient(to right, #37234f, #6a4198)",
//           color: "#fff",
//         }}
//       >
//         <img src={images.product} alt="" style={{width:'100%', height:'auto'}} />
//       </Box>
//       <Box sx={{background:"linear-gradient(to right, #4c2e6b, #663e93)", color: '#fff', height:'26px'}}>
//         <Typography variant="h6">
//           Product Name
//         </Typography>
//         <Typography variant="h6">
//           Product Desc
//         </Typography>
//         <Typography variant="h6">
//           INR 999
//         </Typography>


//       </Box>
//     </Card>
//   );
// }


import { images } from "../../../constants";
import { Box, Button, Container, Typography, IconButton } from "@mui/material";
import React from "react";
import {theme} from '../../../theme'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const BioCard = (props) => {

  const {name, image, desc, price} = props;

  return (
    <>
      <Box
        sx={{
          mb:{xs:4, md:0},
          maxWidth:'400px',
          backgroundColor: "#fff",
          width: "100%",
          height:'fit-content',
          boxShadow: 1,
          display: "flex",
          flexDirection: "column",
          borderRadius: "4px",
          p:2,
          mr:6,
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={images.product} alt="software" style={{height:'auto', width:'100%'}} />
        </Box>
        <Box
          sx={{
            mt:1,
            mb:1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",

            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold,  }}>
            {name}
          </Typography>
          <Typography sx={{ fontSize: "11px", color: "#5a6273", }}>
            {desc}
          </Typography>
          <Typography variant="h6" sx={{color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold }}>
            INR {price}
          </Typography>
        </Box>
        <Box
          sx={{
            mb:1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor:theme.palette.primary.main, color: "#fff", width:'100%' }}
          >
            <Typography variant="h6" sx={{ }}>Enroll Now</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default BioCard;
