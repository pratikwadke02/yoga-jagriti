import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../theme";
import { images } from "../../constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  const moreData = [
    {
      title: "Privacy Policy",
    },
    {
      title: "Terms & Conditions",
    },
    {
      title: "FAQ's",
    },
    {
      title: "Disclaimer",
    },
  ];

  const SocialMedia = [
    {
      icon: <FacebookIcon sx={{ color: theme.palette.text.dark }} />,
      title: "Facebook",
    },
    {
      icon: <InstagramIcon sx={{ color: theme.palette.text.dark }} />,
      title: "Instagram",
    },
    {
      icon: <YouTubeIcon sx={{ color: theme.palette.text.dark }} />,
      title: "YouTube",
    },
    {
      icon: <TwitterIcon sx={{ color: theme.palette.text.dark }} />,
      title: "Twitter",
    },
  ];

  const linkDataOne = [
    {
      name: "Home",
      path: "yoga-jagriti",
    },
    {
      name: "About",
      path: "about",
    },
    {
      name: "Know Yoga",
      path: "know-yoga",
    },
    {
      name: "Courses",
      path: "allcourses",
    },
    {
      name: "Syllabus",
      path: "syllabus",
    },
  ];

  const linkDataTwo = [
    {
      name: "Gallery",
      path: "gallery",
    },
    {
      name: "Shop",
      path: "shop",
    },
    {
      name: "Career",
      path: "career",
    },
    {
      name: "Notice Board",
      path: "notice-board",
    },
    {
      name: "Contact",
      path: "contact",
    },
  ];

  return (
    <>
      <Box
        sx={{
          borderTop: "1px solid" + theme.palette.text.light,
          backgroundColor: theme.palette.background.light,
          backgroundImage: `url(${images.pattern_two})`,
          bottom: 0,
          minHeight: "300px",
          p: 4,
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            justifyContent: "space-between",
            maxWidth: { xs: "100%", md: "1000px" },
            m: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <img
              src={images.yoga_jagriti_logo_two}
              alt=""
              style={{
                height: "auto",
                width: "100%",
                maxHeight: "170px",
                maxWidth: "170px",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: theme.typography.fontWeightMedium,
                color: theme.palette.text.main,
                mt: 1,
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              Jagriti Yoga & Naturopathy Sansthan
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: theme.typography.fontWeightMedium,
                color: theme.palette.text.main,
              }}
            >
              Links
            </Typography>
            <Box
              sx={{
                mt:1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", mr: 2 }}>
                {linkDataOne.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      to={item.path}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ color: theme.palette.text.main }}
                      >
                        {item.name}
                      </Typography>
                    </Link>
                  );
                })}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
                {linkDataTwo.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      to={item.path}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ color: theme.palette.text.main }}
                      >
                        {item.name}
                      </Typography>
                    </Link>
                  );
                })}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: theme.typography.fontWeightMedium,
                color: theme.palette.text.main,
              }}
            >
              More
              
            </Typography>
            <Box sx={{mt:1}}>
            {moreData.map((item, index) => {
              return (
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.text.main }}
                >
                  {item.title}
                </Typography>
              );
            })}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: theme.typography.fontWeightMedium,
                color: theme.palette.text.main,
              }}
            >
              Social Media
            </Typography>
            <Box sx={{mt:1}}>
            {SocialMedia.map((item, index) => {
              return (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {item.icon}
                  <Typography
                    variant="h6"
                    sx={{ color: theme.palette.text.main, ml: 1 }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              );
            })}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            maxWidth: { xs: "100%", md: "600px" },
            m: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width:'100%',
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: theme.typography.fontWeightMedium,
                  color: theme.palette.text.main,
                }}
              >
                Social Media
              </Typography>
              {SocialMedia.map((item, index) => {
                return (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {item.icon}
                    <Typography
                      variant="h6"
                      sx={{ color: theme.palette.text.main, ml: 1 }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            <Box
              sx={{
                width:'100%',
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: theme.typography.fontWeightMedium,
                  color: theme.palette.text.main,
                }}
              >
                More
              </Typography>
              {moreData.map((item, index) => {
                return (
                  <Typography
                    variant="h6"
                    sx={{ color: theme.palette.text.main }}
                  >
                    {item.title}
                  </Typography>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              width:'100%',
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <Box
              sx={{
                width:'100%',
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: theme.typography.fontWeightMedium,
                  color: theme.palette.text.main,
                }}
              >
                Links
              </Typography>
              <Box
                sx={{
                  width:'100%',
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{width:'100%', display: "flex", flexDirection: "column", }}>
                  {linkDataOne.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        to={item.path}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ color: theme.palette.text.main }}
                        >
                          {item.name}
                        </Typography>
                      </Link>
                    );
                  })}
                </Box>
                <Box sx={{width:'100%', display: "flex", flexDirection: "column" }}>
                  {linkDataTwo.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        to={item.path}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ color: theme.palette.text.main }}
                        >
                          {item.name}
                        </Typography>
                      </Link>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mt:2,
            }}
          >
            <Box
            sx={{
              m:'auto',
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={images.yoga_jagriti_logo_two}
              alt=""
              style={{
                height: "auto",
                width: "100%",
                maxHeight: "170px",
                maxWidth: "170px",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: theme.typography.fontWeightMedium,
                color: theme.palette.text.main,
                mt: 1,
                textAlign: "center",
              }}
            >
              Jagriti Yoga & Naturopathy Sansthan
            </Typography>
          </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
