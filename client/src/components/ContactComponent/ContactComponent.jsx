import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import './ContactComponent.css';

const ContactComponent = () => {
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
        <form id="contactForm">
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
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        required
                        data-error="Please enter your number"
                        class="form-control"
                        placeholder="Phone"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="msg_subject"
                        id="msg_subject"
                        class="form-control"
                        required
                        data-error="Please enter your subject"
                        placeholder="Subject"
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
      {/* <div class="contact-area ptb-80">
        <div class="container">

          <div class="row h-100 justify-content-center align-items-center">
            {/* <div class="col-lg-6 col-md-12">
              {/* <img src="assets/img/1.png" alt="image">
            </div> 
            <div class="col-lg-6 col-md-12">
            </div>
          </div>
        </div>
      </div> */}
    </Box>
  );
};

export default ContactComponent;
