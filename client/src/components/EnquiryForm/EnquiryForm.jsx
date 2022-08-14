import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { theme } from "../../theme";
import { images } from "../../constants";
import { useState } from "react";
import axios from 'axios';

const EnquiryForm = () => {
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setEnquiryData({ ...enquiryData, [input.name]: input.value });
    console.log(enquiryData);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await axios
        .post('http://localhost:8080/api/yoga/addEnquiry', enquiryData)
        .then((res) => {
          console.log(res)
          }).catch((err) => {
            console.log(err)
          });
      setEnquiryData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      alert("Response sent successfully");
    }catch(err){
      console.log(err)
    }
  };

  return (
    <Container
      sx={{
        mt: 10,
        pt: 4,
        pb: 4,
        maxWidth: { xs: "100%" },
        backgroundImage: `url(${images.pattern})`,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.default,
      }}
    >
      <Box
        sx={{
          width: "100%",
          p:2,
          borderRadius:'5px',
          maxWidth: "1000px",
          m: "auto",
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Typography variant="h2" sx={{ textAlign: "center", color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold, mb:2 }}>
        ENQUIRE NOW
        </Typography>
        <form id="enquiryForm" onSubmit={handleSubmit}>
            <Box
              sx={{
                mb:2,
                width: "100%",
                display: "flex",
                flexDirection: {xs:'column', md:"row"},
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "100%", mr:{md:1} }}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control"
                    required
                    data-error="Please enter your name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={enquiryData.name}
                  />
                  <div class="help-block with-errors"></div>
              </Box>
              <Box sx={{ width: "100%", ml:{md:1}, mr:{md:1}, mt:{xs:2, md:0}, mb:{xs:2, md:0} }}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="form-control"
                    required
                    data-error="Please enter your email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={enquiryData.email}
                  />
                  <div class="help-block with-errors"></div>
              </Box>
              <Box sx={{ width: "100%", ml:{md:1} }}>
                  <input
                    type="number"
                    name="phone"
                    id="phone_number"
                    required
                    data-error="Please enter your number"
                    class="form-control"
                    placeholder="Phone"
                    onChange={handleChange}
                    value={enquiryData.phone}
                  />
                  <div class="help-block with-errors"></div>
                </Box>
            </Box>
            <Box sx={{ width: "100%", mb:2}}>
                <textarea
                  name="message"
                  class="form-control"
                  id="message"
                  cols="30"
                  rows="5"
                  required
                  data-error="Write your message"
                  placeholder="Your Message"
                  onChange={handleChange}
                  value={enquiryData.message}
                  style={{ minHeight: "70px" }}
                ></textarea>
                <div class="help-block with-errors"></div>
            </Box>
            <div class="col-lg-12 col-md-12">
              <button
                type="submit"
                class="btn"
                style={{ backgroundColor: theme.palette.background.main }}
              >
                <Typography sx={{ color: theme.palette.secondary.main }}>
                  Send Message
                </Typography>
              </button>
              <div id="msgSubmit" class="h3 text-center hidden"></div>
              <div class="clearfix"></div>
            </div>
        </form>
      </Box>
    </Container>
  );
};

export default EnquiryForm;
