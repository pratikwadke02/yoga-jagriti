import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import './ContactComponent.css';
import { useState } from "react";
import axios from "axios";

const ContactComponent = () => {

  const [contactData, setcontactData] = useState(
    {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  )

  const handleChange = ({currentTarget: input}) => {
    setcontactData({ ...contactData, [input.name]: input.value })
    console.log(contactData)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await axios
        .post('http://localhost:8080/api/yoga/addResponse', contactData)
        .then((res) => {
          console.log(res)
          }).catch((err) => {
            console.log(err)
          });
      setcontactData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      alert("Response sent successfully");
    }catch(err){
      console.log(err)
    }
  }



  return (
    <Box sx={{wdith:'100%', backgroundColor:theme.palette.background.default, borderRadius:'5px', p:2  }}>
        <Box>
        <div class="section-title">
            <h2>Get In Touch With Us</h2>
            {/* <div class="bar"></div> */}
            <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
          </div>
        </Box>
        <Box sx={{wdith:'100%'}}>
        <form id="contactForm" onSubmit={handleSubmit}>
                <div class="row justify-content-center align-items-center">
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="form-control"
                        required
                        data-error="Please enter your name"
                        placeholder="Name"
                        onChange={handleChange}
                        value={contactData.name}
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="form-control"
                        required
                        data-error="Please enter your email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={contactData.email}
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-6">
                    <div class="form-group">
                      <input
                        type="number"
                        name="phone"
                        id="phone_number"
                        required
                        data-error="Please enter your number"
                        class="form-control"
                        placeholder="Phone"
                        onChange={handleChange}
                        value={contactData.phone}
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="subject"
                        id="msg_subject"
                        class="form-control"
                        required
                        data-error="Please enter your subject"
                        placeholder="Subject"
                        onChange={handleChange}
                        value={contactData.subject}
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
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
                        value={contactData.message}
                      ></textarea>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn" style={{backgroundColor:theme.palette.primary.main}}>
                        <Typography sx={{ color: theme.palette.background.default }}>
                      Send Message
                        </Typography>
                    </button>
                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </form>
        </Box>
    </Box>
  );
};

export default ContactComponent;
