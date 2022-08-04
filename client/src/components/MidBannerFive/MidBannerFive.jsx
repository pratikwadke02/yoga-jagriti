import React from "react";
import { Container, Box, Typography, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CommentCard from "../utils/CommentCard/CommentCard";

const MidBannerFive = () => {
  const testimonials = [
    {
      name: "Amanda Kinedy",
      role: "FINANCIAL ADVISOR",
      comment:
        " I appreciate your coaching center really good environment and excellent student training. You are continously handle student training wonderfully. Thanks for your great service.",
      rating: 5,
    },
    {
      name: "Elena Blackwell",
      role: "MANAGING DIRECTOR",
      comment:
        "I appreciate your coaching center really good environment and excellent student training. You are continously handle student training wonderfully. Thanks for your great service.",
      rating: 4,
    },
  ];

  return (
    <>
      <Container>
        <Box>
          <Typography sx={{ fontSize: "15px" }}>
            _ASKING FOR TESTIMONIALS_
          </Typography>
          <Typography sx={{ fontSize: "46px" }}>
            What our clients say about us
          </Typography>
        </Box>
        <Box>
          {
            testimonials.map((testimonial, index) => {
                return (
                    <CommentCard
                    key={index}
                    name={testimonial.name}
                    role={testimonial.role}
                    comment={testimonial.comment}
                    rating={testimonial.rating}
                    />
                );
                }
            )
          }
        </Box>
      </Container>
    </>
  );
};

export default MidBannerFive;
