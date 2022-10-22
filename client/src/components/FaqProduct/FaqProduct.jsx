import { Typography, Box } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import "./FaqProduct.css";

const FaqProduct = () => {

//   const faqData = [
//     {
//       question: "1. Does Yoga Certification Board offer Yoga Courses?",
//       answer:
//         "No, Yoga Certification Board does not conduct any course; Yoga Certification Board only conducts assessment/ examination for Yoga Professionals who are willing to take such assessment for certification of their skills.",
//     },
//     {
//       question:
//         "2. Who can appear for assesment for certification of Yoga Profession conducted by Yoga Certification Board?",
//       answer:
//         "Any Yoga professional willing to be certified as Yoga Certification Board certified Yoga Professional can undertake the exams. There is no minimum qualification required for appearing for the exam. Also there is no age limit for YCB Yoga Professional Certification.",
//     },
//     {
//       question:
//         "3. Anyone who is graduate or post graduates in yoga, does he / she needs to get Yoga Certification Board certificate?",
//       answer: "Not compulsory, it is upto the candidate.",
//     },
//     {
//       question:
//         "4. Does a Yoga Professional or any other person need to clear L-1, L-2 & L-3 sequentially?",
//       answer:
//         "No. Any Yoga Professional can apply for any of level directly. The Yoga Professional should undertake self assessment to decide for the level he/ she want to apply for.",
//     },
//     {
//       question: "5. Who is the issuing authority for the certificates?",
//       answer:
//         "Yoga Certification Board is the issuing authority for all the Certificates. Yoga Certification Board has been established by Ministry of AYUSH, Government of India under the aegis of Morarji Desai National Institute of Yoga with full functional autonomy.",
//     },
//     {
//       question:
//         "6. I am a student of Yoga Institution; do I have to appear for Yoga Certification Board Exam?",
//       answer:
//         "It is upto the candidate to decide. Yoga Certification Board certification is Voluntary certification which is part of the Scheme for Voluntary Certification of Yoga Professionals launched by Ministry of AYUSH, Government of India. If you decide to appear for the Yoga Certification Board certification exam, you can appear through your Yoga Institution if it is accreditated with Yoga Certification Board.",
//     },
//     {
//       question:
//         "7. I had done Yoga course from a Yoga institution before the launch of the programme, can I take exam through the same Yoga Institute?",
//       answer:
//         "If you are not student of the Institution at present, you have to appear as an open candidate through authorised Personnel Certificate Bodies.",
//     },
//     {
//       question:
//         "8. Can Accredited Yoga Institition conduct assessment and for who all?",
//       answer:
//         "Yoga Certification Board Accreditated Yoga Institutions can conduct exam for their own students only.",
//     },
//     {
//       question: "9. Does Yoga Certification Board offer any Job opportunity?",
//       answer: "No.",
//     },
//     {
//       question: "10. What is the validity of the certificate?",
//       answer:
//         "Initially the Certificate for Level 1 is valid for 5 years, level 2 and Level 3 for 3 years. Before the expiry of the validity period, the certified Yoga Professional has to attend the Continuing Yoga Education Program (CYEP) for its respective level. Based on the assessment in CYEP, the assessment team may recommend the extension of the certificate for life long or may recommend attending another CYEP.",
//     },
//     {
//       question: "11. Is the certificate valid in other countries also?",
//       answer: "Yes.",
//     },
//     {
//       question: "12. What is the status and validity of the QCI certificates?",
//       answer:
//         "The certificates issued by the QCI shall remain valid for the period it was issued. Yoga Certification Board will organise special CYEP for extension/ up-gradation of those certificates. Please refer to CYEP/ Special CYEP for details.",
//     },
//     {
//       question:
//         "13. Are the QCI Certified Yoga professionals required to take the Yoga Certification Board assessment also?",
//       answer:
//         "No. The certificates issued by the QCI shall remain valid for the period it was issued. Yoga Certification Board will organise special CYEP for extension/ up-gradation of those certificates. Please refer to CYEP/ Special CYEP for details.",
//     },
//     {
//       question:
//         "14. If a certified Yoga professional is unable to attend the CYEP, what happens to the certificate?",
//       answer:
//         "The Certificate will not be valid. The Yoga Professionals shall have to appear as a fresh candidate for assessment for seeking the Certificate.",
//     },
//     {
//       question: "15. What are the exam centres?",
//       answer: "Exams are conducted in any city in India and abroad.",
//     },
//     {
//       question: "16. What are the exam dates?",
//       answer:
//         "Exams are generally conducted on Saturday and Sundays. The tentative exam schedule is given on the website; interested candidate can select the date and city for exam from the dates available there.",
//     },
//     {
//       question:
//         "17. Who conducts the exam for Certification of Yoga professionals?",
//       answer:
//         "The exams for Certification of Yoga Professionals are generally conducted by authorised organisations called Personnel Certification Bodies (PrCBs). The list and details of such organisation is available on website. Any organisation not listed on Yoga Certification Board website is not an authorised PrCB. Accreditated Yoga Institutions and Centres will also be authorised to conduct exam for their own students once these Institutions/ centres have completed the process of Accreditation.",
//     },
//     {
//       question: "18. How to apply for Certification of Yoga Professionals?",
//       answer:
//         "The exam schedule is given on the website. As per the convenience of the interested Yoga Professionals, they can register with the respective Personnel Certification Body. The link of these PrCBs is available on Yoga Certification Board website itself. Yoga Certification Board will also start online and centralised enrolment of the Yoga Professionals on its Yoga Certification Board website (expected to start from July).",
//     },
//     {
//       question:
//         "19. How is QCI certification and Yoga Certification Board certification related or different?",
//       answer:
//         "The Scheme for Certification of Yoga Professionals was handled by Quality Council of India (QCI) till May, 2018. Ministry of AYUSH has established Yoga Certification Board for implementation of the scheme for Certification of Yoga Professionals and Accreditation of Yoga Institutions/ centres. Therefore the scheme is being handled by Yoga Certification Board since June 2018.",
//     },
//   ];

const faqData = [
    {
      question: "Why is Jagriti Pahadi Cow Ghee is costly as compared to other ghee?",
      answer: "Jagriti Pahadi Cow Ghee is made entirely from the milk extracted from Phadi desi cows of Himachal pradesh. This cow gives around 2-3 litres of milk per day which is more nutritious than other breeds that produce more milk. The cows are neither forced nor injected with hormones to enhance milk production. Our ghee is bilona churned with a wooden churner. This is why our cow ghee has a grainy texture, thicker consistency, high aroma, superior flavour, and is much healthier. It is collected from high mountain villages, Pahadi Cow Ghee is more expensive and better then other regular Ghee."
    },
    {
      question: "How Should ghee be consistency?",
      answer: "The consistency of ghee depends largely on the temperature at which you store it. Ghee remain soft in room temperature while during the winter it solidifies. Depending outside temperature this may happen quickly or slowly."
    },
    {
      question: "How can we identify pure cow ghee?",
      answer: "The easiest method to check the purity is to do a pan test. Add a teaspoon of ghee to a pan and heat it. If the ghee starts melting immediately and turns dark brown, it is pure. However, if it takes time to melt and is yellow in colour, then it is adulterated."
    },
    {
      question: "How is the taste of your ghee different from any other ghee in the market?",
      answer: "Our ghee is obtained by churning curd and not cream (malai). So the nutritional content is more as compared to others. Therefore our ghee tastes a lot tastier and aromatic because it preserves the all-natural nourishment of ghee."
    },
    {
      question: "What is the difference between refined and cold-pressed oils?",
      answer: "Refined oils are colourless, odourless and flavourless fluids. The regular refined oils are extracted using solvents and grinding them at high speed, which can generate heat up to 100°C, which degrades the oil's taste and nutritional composition. Trans fats are produced in this process, making them unfit for your heart. While our Semi cold pressed oils are extracted through pressing and grinding of seeds below a temperature of 50°C. Though it is a slow and time-consuming process, they retain their natural flavour, aroma, and nutritional value. They are high in antioxidants and vitamins and contain good fats for a healthy heart."
    },
    {
      question: "Can I use mustard oil for cooking?",
      answer: "Yes of Course. Just like most cooking oils, mustard oil has a diverse set of applications. It has a high smoke point and can be used to sauté or stir-fry vegetables, for marination, in salads, and aachar, and its aromatic qualities make it perfect for tadka."
    },
    {
      question: "Can I use it for body massage?",
      answer: "A regular massage with mustard oil helps in relieving aching joints and muscles. You also experience relief and comfort after a massage with mustard oil. Jagriti Mustard Oil is 100% pure and chemical-free, thus making it safe to use unless you are allergic to it."
    },
  ]
  //faq-area css
  //
  return (
    <>
      <div className="faq-area ptb-80">
        <div className="container">
          <div
            className="accordion accordion-flush"
            id="accordionFlushExample"
          >
            {faqData.map((faq, index) => {
              return (
                <Box 
                key={index}
                className="accordion-item" sx={{marginBottom:'10px', border:'none', boxShadow:1, borderRadius:'5px' }}>
                  <h2 className="accordion-header" 
				  id={`flush-heading-${index}`}
				  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse-${index}`}
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                      style={{ minHeight: "60px"}}
                    >
                      <Typography
                        variant="h5"
                        sx={{ color: theme.palette.text.main }}
                      >
                        {faq.question}
                      </Typography>
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse-${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`flush-heading-${index}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <Typography
                        variant="h6"
                        sx={{ color: theme.palette.text.dark }}
                      >
                        {faq.answer}
                      </Typography>
                    </div>
                  </div>
                </Box>
              );
            })}
          </div>

          {/* <div className="faq-contact">
            <h3>Ask Your Question</h3>
            <form>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      cols="30"
                      rows="6"
                      placeholder="Message"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <button className="btn btn-primary" type="submit">
                    Submit Now!
                  </button>
                </div>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FaqProduct;
