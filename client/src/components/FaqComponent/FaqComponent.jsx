import { Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import "./FaqComponent.css";

const FaqComponent = () => {
	
const faqData = [
    {
        question: "1. Does Yoga Certification Board offer Yoga Courses?",
        answer: "No, Yoga Certification Board does not conduct any course; Yoga Certification Board only conducts assessment/ examination for Yoga Professionals who are willing to take such assessment for certification of their skills."
    },
    {
        question: "2. Who can appear for assesment for certification of Yoga Profession conducted by Yoga Certification Board?",
        answer: "Any Yoga professional willing to be certified as Yoga Certification Board certified Yoga Professional can undertake the exams. There is no minimum qualification required for appearing for the exam. Also there is no age limit for YCB Yoga Professional Certification."
    },
    {
        
    }
]
  //faq-area css
  //
  return (
    <>
      <div class="faq-area ptb-80">
        <div class="container">
          <div class="accordion accordion-flush" id="accordionFlushExample" style={{backgroundColor:theme.palette.background.default}}>
			{
				faqData.map((faq, index) => {
					return (
						<div className="accordion-item">
							<h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
				  style={{height:'60px'}}
                >
					<Typography variant="h5" sx={{color:theme.palette.text.main}}>
						{faq.question}
					</Typography>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
					<Typography variant="h6" sx={{color:theme.palette.text.dark}}>
                  {faq.answer}
					</Typography>
                </div>
              </div>
            </div>
					)
				})
			}
            </div>

          <div class="faq-contact">
            <h3>Ask Your Question</h3>
            <form>
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Name"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <textarea
                      name="message"
                      cols="30"
                      rows="6"
                      placeholder="Message"
                      class="form-control"
                    ></textarea>
                  </div>
                </div>

                <div class="col-lg-12 col-md-12">
                  <button class="btn btn-primary" type="submit">
                    Submit Now!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqComponent;
