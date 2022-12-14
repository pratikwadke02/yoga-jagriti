import { images } from "../../../constants";
import { Box, Button, Container, Typography, IconButton, Modal } from "@mui/material";
import React from "react";
import {theme} from '../../../theme'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch } from "react-redux";
import { addToCart, BuyNow } from "../../../actions/cart";
import {Link, useNavigate} from 'react-router-dom'

const style = {
  position: 'absolute',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',

  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '4px',
  boxShadow: 24,
  p: 4,
};

const ProgramCard = (props) => {

  const user = (JSON.parse(localStorage.getItem('profile'))) ? JSON.parse(localStorage.getItem('profile')).data : null;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {name, image, desc, quantity, id} = props;
  const price = 2000
  const discountPrice = 1900

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (id) => {
    try{
      const data = {
        id: id,
        quantity: 1,
        name: name,
        desc: desc,
        price: price,
        discountPrice: discountPrice,
        image: image
      }
        dispatch(addToCart(data));
    }catch(error){
      console.log(error);
    }
  }

  const handleBuyNow = (id) => {
    try{
      const data = {
        id: id,
        quantity: 1,
        name: name,
        desc: desc,
        price: price,
        discountPrice: discountPrice,
        image: image
      }
        dispatch(BuyNow(data, navigate));
    }catch(error){
      console.log(error);
    }
  }


  return (
    <>
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You need to login first
          </Typography>
          <Link to="/login" style={{textDecoration:'none'}}>
          <Button variant="contained" sx={{mt:2}}>
            Login Now
            </Button>
          </Link>
        </Box>
      </Modal>
      <Box
        sx={{
          maxWidth:'400px',
          backgroundColor:theme.palette.background.default,
          width: "100%",
          height:'auto',
          boxShadow: 1,
          display: "flex",
          flexDirection: "column",
          borderRadius: "4px",
          p:2,
          position: "relative",
        }}
      >
        <Link to={`/product/${id}`} style={{textDecoration:'none'}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={images.product_ghee} alt="software" style={{height:'auto', width:'100%'}} />
        </Box>
        </Link>
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
            {desc.slice(0, 50)}...
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
          <Typography variant="h6" sx={{color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightMedium }}>
          ???{discountPrice} <Typography variant="h7" sx={{color:theme.palette.text.dark,}}><s>???{price}</s> </Typography>
          </Typography>
          <Box sx={{display:'flex'}}>
          <IconButton onClick={() => handleAddToCart(id)}>
            <ShoppingCartOutlinedIcon fontSize="mdeium" sx={{color:theme.palette.primary.main, mr:1}} />
          </IconButton>
          <Button
            onClick={()=>handleBuyNow(id)}
            variant="contained"
            sx={{ backgroundColor:theme.palette.primary.main, color: "#fff", maxWidth:'120px', width:'100%' }}
          >
            <Typography variant="h6">BUY NOW</Typography>
          </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProgramCard;
