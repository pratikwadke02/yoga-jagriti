import React from "react";
import { Container, Box, Typography, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import {theme} from '../../../theme'


const CommentCard = (props) => {

    const {comment, avatar, name, role, rating} = props;

  return (
    <>
      <Box sx={{display:'flex', flexDirection:'column', mr:{md:0}, mb:{xs:5, md:0}}}>
        <Box sx={{backgroundColor:theme.palette.background.default, p:4}}>
          <Typography variant="h6" sx={{color:theme.palette.text.light}}>
            {comment}
          </Typography>
          <Box sx={{mt:1}}>
            {Array(rating)
              .fill(0)
              .map((_, index) => {
                return <StarIcon fontSize="small" sx={{ color: "#e8bf00" }} />;
              })}
          </Box>
        </Box>
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',p:2}}>
          <Box sx={{mr:3}}>
            <Avatar alt="Remy Sharp" src="" height={100} width={100}/>
          </Box>
          <Box>
            <Typography variant="h3" sx={{  }}>{name}</Typography>
            <Typography  variant="h6" sx={{color:theme.palette.primary.main  }}>{role}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CommentCard;
