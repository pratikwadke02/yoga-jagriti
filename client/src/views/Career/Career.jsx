import {
  Typography,
  Container,
  Box,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import { images } from "../../constants";
import CheckIcon from "@mui/icons-material/Check";
import PictureComponent from "../../components/utils/Picture/PictureComponent";

const Career = () => {
  const careerOptionsOne = [
    {
      name: "Research Officer- Yoga and Naturopathy",
    },
    {
      name: "Assistant Ayurvedic Doctor",
    },
    {
      name: "Clinical Psychologist",
    },
    {
      name: "Yoga Therapist",
    },
  ];

  const careerOptionsTwo = [
    {
      name: "Yoga Teacher",
    },
    {
      name: "Yoga Instructor",
    },
    {
      name: "Therapist and Naturopaths",
    },
    {
      name: "Trainer/ Instructor Health Club",
    },
  ];

  const jobsDataOne = [
    {
      name: "Yoga Teacher",
      para_one:
        "Although getting your yoga teacher training doesn’t guarantee a job, it does set you on the pathway to becoming a ‘professional’ yoga teacher. A teacher training course costs between 12000 – 25000, and varies between 200 and 700-hour training certifications.",
      para_two:
        "Though many yoga teachers start out teaching free classes, or teach as a supplement to another job, more established yoga teachers are able to teach full-time and make a living.",
    },
    {
      name: "Yoga Therapist",
      para_one:
        "All of the research behind yoga has been used to design both psychological and physical therapy programs that utilize yoga and meditation. Yoga therapists often work in community health centers, rehabilitation clinics, or physical therapy offices, though some may open their own private practice.",
      para_two:
        "THIS field is an emerging one, several universities offer advanced degrees in yoga therapy and yoga science. For example, the Maryland University of Integrative Health offers a.",
    },
  ];

  const jobsDataTwo = [
    {
      name: "Yoga Researcher",
      para_one:
        "There has been continuing research into the physical and mental effects of yoga and its relation to health outcomes.Scientists have looked into yoga for diabetes, cancer, HIV, multiple sclerosis, post-traumatic stress disorder, and even for smoking cessation, menopause, and many other conditions.",
      para_two:
        "Many researchers are still exploring the benefits of yoga, in a variety of different fields, from psychology to physiology.",
    },
    {
      name: "Studio Owner",
      para_one:
        "Yoga-savvy individuals keen on owning a small business might want to consider opening a studio. However, it’s important to remember that there are more and more yoga studios popping up everywhere, every day, making competition fierce and success difficult to come by. Generally, it’s a good idea to establish yourself in the yoga community—usually as a teacher—before opening your own studio.",
      para_two:
        "And, of course, location is a huge factor in the success of a yoga studio. Breaking even in a place like New York City or Los Angeles is an extremely difficult feat, as there are literally hundreds of yoga studios within city bounds. But, if you happen to live in a small town with more people who are interested in yoga than there are yoga studios, you might just be in luck.",
    },
  ];

  const jobsDataThree = [
    {
      name: "Music and Yoga Teacher",
      para_one:
        "Music- and yoga? There’s actually a closer connection than you might think. As the popularity of yoga grows, the types of classes are evolving, too, and it’s becoming increasingly common for teachers to play music during their classes.",
      para_two:
        "“Hip-hop yoga” has even been trademarked, and many large classes, workshops, festivals, and retreats feature DJs that drop unique beats to accompany the yoga flow. MC Yogi, for example, has made a name for himself mixing music made specifically for yoga.",
    },
    {
      name: "Brand Ambassador",
      para_one:
        "If you have stellar people skills, you might want to consider working as a brand ambassador for yoga-related products or services, whether it be a new health food, a type of yoga mat, or a line of yoga wear. Many brand ambassadors run booths or demos at yoga festivals, studio openings, and other yoga-related events.",
      para_two: "",
    },
  ];

  return (
    <>
      <Container
        disableGutters
        sx={{
          pt: 5,
          maxWidth: { xs: "100%" },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: theme.typography.fontWeightBold,
            }}
          >
            Career in Yoga
          </Typography>
        </Box>
      </Container>
      <Container
        sx={{
          maxWidth: { xs: "100%"},
          backgroundColor: theme.palette.primary.main,
          backgroundImage: `url(${images.pattern})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 5,
          pb:5,
        }}
      >
        <Box
          sx={{
            maxWidth: {xs: "100%", md: "1500px"},
            width: "100%",
            mt: 4,
            mb: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.background.default,
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            Mostly professionals who have been sharing their knowledge of the
            science of meditation and yoga are called yogis or Yoga Teachers.
            With the rise in reputation of holistic and alternative medical
            care, a lot of weight is being given to yoga teachers and so it has
            resulted in becoming a great career choice. Yoga is an ancient art,
            and a natural way of remaining fit and healthy. It also helps in
            improving mental health. Curing health-related problems naturally is
            taught as part of the programme. An integral part of Yoga is
            practicing physical exercises (asanas) and breathing exercises
            (pranayam). Fitness is the call of today’s world, raising the need
            for a yoga instructor or teacher on the global platform.
          </Typography>
        </Box>
        <Box sx={{width:'100%', maxWidth:{xs: '100%', md: '1500px'},display:'flex',flexDirection:{xs:'column', md:'row'}, justifyContent:'center', alignItems:'center'}}>
        <Box
          sx={{
            width: "100%",
            mt: 1,
            display: "flex",
            flexDirection: { xs: "column" },
            justifyContent: "center",
            alignItems: "center",
            pb: 5,
          }}
        >
            <Box sx={{ width: { xs: "100%" }}}>
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              textAlign: "justify",
              textJustify: "inter-word",
              color: theme.palette.background.default,
            }}
          >
            After completing ones education, a student of yoga sciences can look
            for jobs in the following areas:
          </Typography>
        </Box>
          <Box
            sx={{
              width: "100%",  
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ mt: { xs: 2, md: 0 }, width: "100%" }}>
              <List disablePadding>
                {careerOptionsOne.map((item, index) => {
                  return (
                    <>
                      <ListItem sx={{pl:0}}>
                        <ListItemIcon
                          sx={{
                            border:
                              "1px solid" + theme.palette.background.default,
                            borderRadius: "50%",
                          }}
                        >
                          <CheckIcon
                            sx={{ color: theme.palette.background.default }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography
                            variant="h6"
                            sx={{ color: theme.palette.background.default }}
                          >
                            {item.name}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </>
                  );
                })}
              </List>
            </Box>
            <Box sx={{ width: "100%" }}>
              <List disablePadding>
                {careerOptionsTwo.map((item, index) => {
                  return (
                    <>
                      <ListItem sx={{pl:0}}>
                        <ListItemIcon
                          sx={{
                            border:
                              "1px solid" + theme.palette.background.default,
                            borderRadius: "50%",
                          }}
                        >
                          <CheckIcon
                            sx={{ color: theme.palette.background.default }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography
                            variant="h6"
                            sx={{ color: theme.palette.background.default }}
                          >
                            {item.name}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </>
                  );
                })}
              </List>
            </Box>
          </Box>
            </Box>
            <Box sx={{ml:{xs:0, md:5}, maxWidth:{xs:'100%', md:'410px'}}}>
                <PictureComponent image={images.team_four} size="small" />
            </Box>
        </Box>
      </Container>
      {/* <Container sx={{ maxWidth: { xs: "100%", md: "1500px" } }}></Container> */}
      <Container
        sx={{
          mt: 10,
          p: 5,
          maxWidth: { xs: "100%" },
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          backgroundColor: theme.palette.background.light,
          backgroundImage: `url(${images.pattern_two})`,
        }}
      >
        <Box sx={{ mr: { xs: 0, md: 2 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              color: theme.palette.primary.main,
            }}
          >
            Career Scope
          </Typography>
          <Box
            sx={{
              borderRadius: "10px",
              maxWidth: { xs: "100%", md: "750px" },
              minHeight: { xs: "fit-content", md: "180px" },
              mt: 2,
              backgroundColor: theme.palette.background.default,
              boxShadow: 1,
              p: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              Based on the Yoga training you have received, you can opt for the
              field of research, training or works as a Yoga therapist. You can
              find work in resorts, gyms, schools, health centres, housing
              societies and large organizations. Television channels also hire
              Yoga trainers, and renowned personalities prefer to hire personal
              Yoga instructors. Self-employment is an option many opt for as
              well. A great stress buster, Yoga is gaining ground among the
              ever-increasing number of foreign tourists who seek peaceful
              holidays, adding to the demand for Yoga specialists. There is no
              dearth of scope for the people in this noble profession.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ ml: { xs: 0, md: 2 }, mt: { xs: 4, md: 0 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              color: theme.palette.primary.main,
            }}
          >
            Salary in Yoga Field
          </Typography>
          <Box
            sx={{
              borderRadius: "10px",
              maxWidth: { xs: "100%", md: "750px" },
              mt: 2,
              minHeight: { xs: "fit-content", md: "180px" },
              backgroundColor: theme.palette.background.default,
              boxShadow: 1,
              p: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              A fresher can earn Rs 10,000 to Rs 25,000 a month. With
              experience, the salary climbs higher at a faster pace. However,
              yoga teaching when compared to other professions is less lucrative
              but it is the mental satisfaction attached with the profession
              that draws the attention of individuals. But also know that if
              good in your field there is an option of doing better as this
              field has been taken to the liking of many and people have
              realized the importance of yoga.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Container
        sx={{
          maxWidth: { xs: "100%", md: "1600px" },
          p: 5,
          mt: 5,
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: theme.typography.fontWeightBold,
              color: theme.palette.primary.main,
            }}
          >
            Jobs in Yoga
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 2, textAlign: "justify", textJustify: "inter-word" }}
          >
            The yoga industry brings in almost 40 billion dolors per year, and
            as the community grows, so do the opportunities for employment. When
            most people think of yoga as a profession, their minds immediately
            jump to yoga teachers and studio owners. Although these can
            certainly be viable pathways to earning a living through yoga, they
            aren’t the only ways.
            <br />
            If you live for yoga and want to make it your livelihood, read on –
            here’s a look at some of the best yoga jobs and career
            opportunities.
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              mt: { xs: 0, md: 2 },
              mb: { xs: 0, md: 2 },
            }}
          >
            {jobsDataOne.map((item, index) => {
              return (
                <>
                  <Box
                    sx={{
                      width: "100%",
                      backgroundColor: theme.palette.background.light,
                      p: 2,
                      boxShadow: 1,
                      borderRadius: "10px",
                      ml: { xs: 0 , md: index === 0 ? 0 : 2 },
                      mr: { xs: 0, md: index === 0 ? 2 : 0 },
                      mb: { xs: 2, md: 0 },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: theme.typography.fontWeightBold,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 2,
                        textAlign: "justify",
                        textJustify: "inter-word",
                      }}
                    >
                      {item.para_one}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 2,
                        textAlign: "justify",
                        textJustify: "inter-word",
                      }}
                    >
                      {item.para_two}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              mt: { xs: 0, md: 2 },
              mb: { xs: 0, md: 2 },
            }}
          >
            {jobsDataTwo.map((item, index) => {
              return (
                <>
                  <Box
                    sx={{
                      width: "100%",
                      backgroundColor: theme.palette.background.light,
                      p: 2,
                      boxShadow: 1,
                      borderRadius: "10px",
                      ml: { xs: 0, md: index === 0 ? 0 : 2 },
                      mr: { xs: 0, md: index === 0 ? 2 : 0 },
                      mb: { xs: 2, md: 0 },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: theme.typography.fontWeightBold,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 2,
                        textAlign: "justify",
                        textJustify: "inter-word",
                      }}
                    >
                      {item.para_one}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 2,
                        textAlign: "justify",
                        textJustify: "inter-word",
                      }}
                    >
                      {item.para_two}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              mt: { xs: 0, md: 2 },
              mb: { xs: 0, md: 2 },
            }}
          >
            {jobsDataThree.map((item, index) => {
              return (
                <>
                  <Box
                    sx={{
                      width: "100%",
                      backgroundColor: theme.palette.background.light,
                      p: 2,
                      boxShadow: 1,
                      borderRadius: "10px",
                      ml: { xs: 0, md: index === 0 ? 0 : 2 },
                      mr: { xs: 0, md: index === 0 ? 2 : 0 },
                      mb: { xs: 2, md: 0 },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: theme.typography.fontWeightBold,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 2,
                        textAlign: "justify",
                        textJustify: "inter-word",
                      }}
                    >
                      {item.para_one}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 2,
                        textAlign: "justify",
                        textJustify: "inter-word",
                      }}
                    >
                      {item.para_two}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Career;
