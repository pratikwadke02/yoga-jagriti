import { Container, Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import { images } from "../../constants";
import PictureComponent from "../../components/utils/Picture/PictureComponent";
import './About.css';
import Objectives from "../../components/Objectives/Objectives";
import TeamMemberBanner from "../../components/TeamMemberBanner/TeamMemberBanner";

const About = () => {
  return (
    <>
      <Container
        sx={{
          pb:8,
          maxWidth: { xs: "100%" },
          pt: 5,
          backgroundColor: theme.palette.background.light,
          backgroundImage: `url(${images.pattern_three})`,
          height: "100%",
          minHeight: "95vh",
        }}
      >
        <Box sx={{zIndex:2, m:'auto',display:'flex', flexDirection:'row', width:{xs:'100%', md:'80%'}}}>
        <Box sx={{zIndex:2,width:{xs:'160%'}}}>
            <Typography variant="h2" sx={{m:'auto', fontWeight:theme.typography.fontWeightBold, color:theme.palette.primary.main}}>
                About
            </Typography>
          <Typography variant="h6" sx={{mt:2, textAlign:'justify', textJustify:'inter-word'}}>
            JAGRITI YOGA AND NATUROPATHY SANSTHAN (JYANS) ESTABLISTED IN THE
            YEAR 2015 UNDER S.R.ACT. 1860. A MASTER FRANCHISEE OF THE ‘INDIAN
            FOUNDATION OF YOGA AND NATUROPATHY’ UNDER THE ‘INDIAN BOARD OF YOGA
            AND NATUROPATHIC MEDICINE, NEW DELHI.
          </Typography>
          <Typography variant="h6" sx={{mt:2, textAlign:'justify', textJustify:'inter-word'}}>
            JYANS IS A UNIT of MKAGS NGO ESTED IN MAY 2002.it has its own Vocational training centres, ITI,
AFFILIATED TO NCVT, GOVT OF INDIA, NEW DELHI and Naturopathy and yoga clinics at many places in
Delhi and in UP
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign:'justify', textJustify:'inter-word'}}>
            It is registered under income tax act 80G and 12 A.
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign:'justify', textJustify:'inter-word'}}>
            The Organisation is a non-profitable, non-political and non- religious body, set-up with
the sole and bona-fide aim to develop and promote the knowledge, education and
applications of Yoga and Naturopathy for the benefit of all sections of the society. A self-
regulatory body Of Leading Yoga &amp; Naturopatyhic Institutions of India established in 5
july, 2015.
            </Typography>
            <Box sx={{display:{xs:'flex', md:'none'}, mt:4, mb:4, flexDirection:'row', justifyContent:'center'}}>
                <PictureComponent image={images.team_three} size="small" color="dark" />
            </Box>
            <Typography variant="h6" sx={{mt:2, textAlign:'justify', textJustify:'inter-word'}}>
            Its a statutory body with the responsibility of establishing and maintaining high
standards of Yoga and Naturopathy education and recognition of alternative
Medicines and therapies qualifications in India. It registers Yoga and
Naturopathic therapists to practice in India, in order to protect and promote the
health and safety of the public by ensuring proper standards in the Education and
Practice. The Organization grants recognition of Yoga and Naturopathic
qualifications, gives accreditation/affiliation to Yoga and Naturopathy
colleges/institutions’ guidance and Examination centers and monitors them
regularly.
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign:'justify', textJustify:'inter-word'}}>
            This Organization is conducting its own Colleges/Institutes and Training/study
Centre in All over India with its clinics and Yoga Centres.The various certificate
,diploma and P.G level courses conducted by the colleges/Institutes.

This organization conducts Free Health workshops, Seminars, Yoga Karya
shalas, conferences, get together convocation and free aid camp in various
portion of the country to make people aware about Yoga and Naturopathic
treatments.
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign:'justify', textJustify:'inter-word'}}>
            After completing yoga Course,Yoga Certification candidate has to pass QCI
Examination for Govt.Jobs. Jagriti Yog and Naturopathy Sansthan is also the
member of QCI( Quality Council of India). And also has the certification of ISO
9001-2015(Quality Management System. London UK and a certify Education
Centre by MSME New Delhi.
            </Typography>
        </Box>
        <Box sx={{pl:5,display:{xs:'none', md:'flex'}, zIndex:2,width:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <PictureComponent image={images.team_three} size="big" color="dark" />
        </Box>
        </Box>
        <Box sx={{mt:8}}>
            <Objectives />
        </Box>
        <Box>
            <TeamMemberBanner />
        </Box>
      </Container>
    </>
  );
};

export default About;
