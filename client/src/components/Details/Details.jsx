import { Container, Box, Typography, Button, Modal } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { images} from "../../constants";
import { addToCart, BuyNow } from "../../actions/cart";

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

const Details = (props) => {

  const {name, id} = props

  const price = 2000;
  const discountPrice = 1900;

  const desc = "Our bilona churned Cow ghee is made from the milk of grass-fed Pahadi local (Desi) cows of Tehsil Nerwa,Distt Shimla,Himachal Pradesh. Made in small batches, the ghee has a fresh and   tempting flavour. Ghee is Prepared and collected by Women self help groups and from other Cow lovers of local villages Grass-fed Pahadi local (Desi) cow milk is used to make our bilona churned cow ghee from Tehsil Nerwa, Distt Shimla, Himachal Pradesh. The ghee is handmade in small batches, resulting in a wonderful taste. Ghee is Prepared and collected by Women self help groups and from other Cow lovers of local villages"

  

  const user = (JSON.parse(localStorage.getItem('profile'))) ? JSON.parse(localStorage.getItem('profile')).data : null;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        image: images.product_ghee
      }
      if(user){
        dispatch(addToCart(data));
      }else{
        handleOpen();
      }
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
        image: images.product_ghee
      }
      if(user){
        dispatch(BuyNow(data, navigate));
      }else{
        handleOpen();
      }
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
          variant="h4"
          sx={{display:{xs:'none', md:'block'}, mb: 1, color: theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold,  }}
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          sx={{display:{xs:'block', md:'none'}, mb: 1, color: theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold,  }}
        >
          {name}
        </Typography>
        <Typography variant="h7" sx={{display:{xs:'block', md:'none'}, mt: 1, mb: 1, textAlign:'justify', textJustify:'inter-word' }}>
          {desc}
        </Typography>
        <Typography variant="h6" sx={{display:{xs:'none', md:'block'},width:'80%', mt: 1, mb: 1, textAlign:'justify', textJustify:'inter-word' }}>
        {desc}
        </Typography>
        <Typography
          variant="h5"
          sx={{display:{xs:'none', md:'flex'}, fontWeight: theme.typography.fontWeightBold, mt:1, alignItems:'center' }}
        >
          ₹{discountPrice} <s><Typography variant="h6" sx={{ml:1}}>₹{price}</Typography></s>
        </Typography>
        <Typography
          variant="h6"
          sx={{display:{xs:'flex', md:'none'}, fontWeight: theme.typography.fontWeightBold, mt:1, alignItems:'center' }}
        >
          ₹{discountPrice} <s><Typography variant="h6" sx={{ml:1}}>₹{price}</Typography></s>
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
          <Button variant="contained" sx={{
            display:{xs:'none', sm:'block'},
            backgroundColor:{xs:theme.palette.background.default, sm:theme.palette.primary.main}, height: "40px", width: {xs:"100%", md:"200px"},borderRadius:{xs:'0px', sm:'4px'}, mr:{xs:0, sm:2} }}
            onClick={() => handleAddToCart(id)}
            >
            <Typography
              variant="h6"
              sx={{color:{xs:theme.palette.primary.main, sm:theme.palette.background.default }, fontWeight: theme.typography.fontWeightBold }}
            >
              Add to Cart
            </Typography>
          </Button>
          <Button variant="contained" color="secondary" sx={{
            display: {xs:'block', sm:'none'},
            height: "40px",
            width: '100%',
            borderRadius: {xs:'0px', sm:'4px'},
          }}
          onClick={() => handleAddToCart(id)}
          >
            <Typography
              variant="h6"
              sx={{
                color:theme.palette.primary.main,
                fontWeight: theme.typography.fontWeightBold,
              }}
              >
                Add to Cart
              </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ height: "40px",borderRadius:{xs:'0px', sm:'4px'}, width: {xs:"100%", md:"200px"} }}
            onClick={() => handleBuyNow(id)}
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
    </>
  );
};

export default Details;
