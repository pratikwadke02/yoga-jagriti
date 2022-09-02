import React from "react";
import {
    Container,
    Box,
    Typography,
}from "@mui/material";
import { theme } from "../../theme";
import { images } from "../../constants";

const AboutUs = () => {
  return (
    <>
      <Container
        sx={{
          pb: 8,
          maxWidth: { xs: "100%" },
          pt: 5,
          backgroundColor: theme.palette.background.light,
          backgroundImage: `url(${images.pattern_three})`,
          height: "100%",
          minHeight: "95vh",
        }}
      >
        <Box sx={{width:'100%', textAlign:'center'}}>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: theme.typography.fontWeightBold,
            }}
          >
            ABOUT US
          </Typography>
          <div className="darkbar" style={{margin:'auto',marginTop:'20px' }}></div>
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{ mt: 2 }}
          >
            Get to know us!
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
          >
            Jagriti Yoga & Naturopathy Sansthan was established in --MM/YY-- at---Place---.
            Jagriti Yoga & Naturopathy Sansthan was formed by ---Founder Name-- , And he/ She has
            been actively engaged in the same field since ---YYYY--. We are the
            leading retailers / wholesaler/ manufacturer for consumer ---Product
            you deal in--- articles since the --YYYY--.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
          >
            At present, we have services across India. We focus to help our
            customers by saving time and money as we offer proper Product /
            Service descriptions and extremely competitive & unmatchable prices.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
          >
            When you are buying from Jagriti Yoga & Naturopathy Sansthan, you can be rest assured
            that you are buying from a Trusted Name.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
          >
            GST
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
          >
            Trade Name
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
          >
            Jagriti Yoga & Naturopathy Sansthan
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
          >
            GSTIN
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default AboutUs;
