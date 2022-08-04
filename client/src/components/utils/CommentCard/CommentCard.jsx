import React from "react";
import { Container, Box, Typography, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";


const CommentCard = (props) => {

    const {comment, avatar, name, role, rating} = props;

  return (
    <>
      <Box>
        <Box>
          <Typography sx={{ fontSize: "16px" }}>
            {comment}
          </Typography>
          <Box>
            {Array(rating)
              .fill(0)
              .map((_, index) => {
                return <StarIcon fontSize="small" sx={{ color: "#e8bf00" }} />;
              })}
          </Box>
        </Box>
        <Box>
          <Box>
            <Avatar alt="Remy Sharp" src="" />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "24px" }}>{name}</Typography>
            <Typography sx={{ fontSize: "15px" }}>{role}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CommentCard;
