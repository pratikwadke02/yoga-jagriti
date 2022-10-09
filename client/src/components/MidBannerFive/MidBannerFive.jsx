import React from "react";
import { Container, Box, Typography, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { theme } from "../../theme";
import CommentCard from "../utils/CommentCard/CommentCard";
import { images } from "../../constants";
// import { videos } from '../../constants'
import VideoCarousel from "../utils/VideoCarousel/VideoCarousel";
import TestimonyCarousel from "../utils/TestimonyCorousel/TestimonyCarousel";

const MidBannerFive = () => {
  const testimonials = [
    {
      name: "Aarav Kumar",
      role: "FINANCIAL ADVISOR",
      comment:
        " I appreciate your coaching center really good environment and excellent student training. You are continously handle student training wonderfully. Thanks for your great service.",
      rating: 5,
    },
    {
      name: "Abhishek Rao",
      role: "MANAGING DIRECTOR",
      comment:
        "I appreciate your coaching center really good environment and excellent student training. You are continously handle student training wonderfully. Thanks for your great service.",
      rating: 4,
    },
    {
      name: "Mukti Arora",
      role: "FINANCIAL ADVISOR",
      comment:
        " I appreciate your coaching center really good environment and excellent student training. You are continously handle student training wonderfully. Thanks for your great service.",
      rating: 5,
    }
  ];

  const videoProps = [
    {
        id: 1,
        title: "Video 1",
        // src: videos.vid_one,
    },
    {
        id: 2,
        title: "Video 2",
        // src: videos.vid_two,
    }
]

  return (
    <>
      <Container
        sx={{
          maxWidth: { xs: "100%" },
          mt: 10,
          backgroundColor: theme.palette.background.light,
          backgroundImage: `url(${images.pattern_two})`,
          p: 2,
          pb: 4,
          pt: 4,
          display:'flex',
          flexDirection:{xs:'column'},
          justifyContent:'center',
          alignItems:'center',

        }}
      >
        <Box sx={{maxWidth:'1600px'}}>
        <Box sx={{textAlign:'center'}}>
        <Typography
            variant="h2"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: theme.typography.fontWeightBold,
            }}
          >
            TESTIMONIALS
          </Typography>

          <div className="darkbar" style={{margin:'auto', marginTop:'10px'}}></div>
          <Typography variant="h4" sx={{ mt: 1 }}>
            What our clients say about us
          </Typography>
        </Box>
        <Box sx={{ mt: 5, display: "flex", flexDirection: {xs:'column', lg:"row"}, width:'100%' , mr:{lg:4}, textAlign:'center'}}>
        <Box
          sx={{
            width: "100%",
            mt: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "center" },
            alignItems: "center",
          }}
        >
          <TestimonyCarousel testimonials={testimonials} />
        </Box>
        {/* <Box sx={{width:'100%', ml:{xs:0, lg:4}, mt:{xs:4, lg:0}}}>
            <VideoCarousel videoData = {videoProps} />
        </Box> */}
        </Box>
        <Box sx={{display:'flex', mt:4}}>
          <Box sx={{width:'100%', mr:{sm:1}}}>
          <iframe style={{width:'100%', height:'100%', }} width="560" height="315" src="https://www.youtube.com/embed/dAqQqmaI9vY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
          <Box sx={{width:'100%', display:{xs:'none', sm:'block'}, ml:{sm:1}, mr:{md:1}}}>
          <iframe style={{width:'100%', height:'100%'}} width="560" height="315" src="https://www.youtube.com/embed/dAqQqmaI9vY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
          <Box sx={{width:'100%', display:{xs:'none', lg:'block'}, ml:1, mr:1}}>
          <iframe style={{width:'100%', height:'100%'}} width="560" height="315" src="https://www.youtube.com/embed/dAqQqmaI9vY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
          <Box sx={{width:'100%', display:{xs:'none', lg:'block'}, ml:1}}>
          <iframe style={{width:'100%',display:{xs:'none', lg:'block'}, height:'100%'}} width="560" height="315" src="https://www.youtube.com/embed/dAqQqmaI9vY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
        </Box>
        </Box>
      </Container>
    </>
  );
};

export default MidBannerFive;
