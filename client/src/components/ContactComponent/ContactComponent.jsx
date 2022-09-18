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
        .post('https://yogajagriti.herokuapp.com/api/yoga/addResponse', contactData)
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
        <div className="section-title">
            <h2>Get In Touch With Us</h2>
            <div className="darkbar" style={{margin:'auto', marginTop:'20px', marginBottom:'20px'}}></div>
            <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
          </div>
        </Box>
        <Box sx={{wdith:'100%'}}>
        <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        required
                        data-error="Please enter your name"
                        placeholder="Name"
                        onChange={handleChange}
                        value={contactData.name}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        required
                        data-error="Please enter your email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={contactData.email}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="number"
                        name="phone"
                        id="phone_number"
                        required
                        data-error="Please enter your number"
                        className="form-control"
                        placeholder="Phone"
                        onChange={handleChange}
                        value={contactData.phone}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        id="msg_subject"
                        className="form-control"
                        required
                        data-error="Please enter your subject"
                        placeholder="Subject"
                        onChange={handleChange}
                        value={contactData.subject}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="5"
                        required
                        data-error="Write your message"
                        placeholder="Your Message"
                        onChange={handleChange}
                        value={contactData.message}
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="btn" style={{backgroundColor:theme.palette.primary.main}}>
                        <Typography sx={{ color: theme.palette.background.default }}>
                      Send Message
                        </Typography>
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </form>
        </Box>
    </Box>
  );
};

export default ContactComponent;
