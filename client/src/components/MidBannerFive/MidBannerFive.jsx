import React from "react";
import { Container, Box, Typography, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { theme } from "../../theme";
import CommentCard from "../utils/CommentCard/CommentCard";
import {images} from '../../constants';

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
      <Container sx={{mt:10,backgroundColor:theme.palette.background.light,
      backgroundImage: `url(${images.pattern_two})`,
         p:2}}>
        <Box  sx={{mt:5,display:'flex', flexDirection:'column'}}>
          <Typography variant="h2" sx={{color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold}}>
            ASKING FOR TESTIMONIALS
          </Typography>
          
          <div className="darkbar"></div>
          <Typography variant="h4" sx={{mt:1}}>
            What our clients say about us
          </Typography>
        </Box>
        <Box sx={{witdh:'100%', mt:3, display:'flex', flexDirection:{xs:'column',md:'row'}, justifyContent:{xs:'center', md:'center'}, alignItems:'center'}}>
          {
            testimonials.map((testimonial, index) => {
                return (
                  <Box sx={{mr:{md:index === 0 ? 2 : 0}}}>
                    <CommentCard
                    key={index}
                    name={testimonial.name}
                    role={testimonial.role}
                    comment={testimonial.comment}
                    rating={testimonial.rating}
                    />
                  </Box>
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
