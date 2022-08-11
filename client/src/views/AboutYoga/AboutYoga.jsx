import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import {images} from '../../constants'
import PictureComponent from '../../components/utils/Picture/PictureComponent'
import { theme } from '../../theme'
import Pranayam from '../../components/Pranayam/Pranayam'
import AccuPressure from '../../components/AccuPressure/AccuPressure'
import Naturopathy from '../../components/Naturopathy/Naturopathy'
import './AboutYoga.css'

const AboutYoga = () => {
  return (
    <>
        <Container
        sx={{
          maxWidth: { xs: "100%" },
          pt: 5,
          backgroundColor: theme.palette.background.light,
          backgroundImage: `url(${images.pattern_three})`,
          height: "100%",
          minHeight: "95vh",
          pb:10,
        }}
      >
        <Box sx={{zIndex:2, m:'auto',display:'flex', flexDirection:'row', width:{xs:'100%', md:'80%'}}}>
        <Box sx={{zIndex:2,width:{xs:'160%'}}}>
            <Typography variant="h2" sx={{m:'auto', fontWeight:theme.typography.fontWeightBold, color:theme.palette.primary.main}}>
                About Yoga
            </Typography>
            <Typography variant="h4" sx={{mt:2}}>
              What is Yoga?
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign:'justify', textJustify:'inter-word'  }}>
            The word Yoga comes from the Sanskrit word "Yuj" meaning to yoke, join or unite. This
implies joining or integrating all aspects of the individual - body with mind and mind with
soul - to achieve a happy, balanced and useful life, and spiritually, uniting the individual with
the supreme.
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign:'justify', textJustify:'inter-word'  }}>
            Yoga, in general, is a spiritual practice or discipline that helps the individual unify his/her
body, mind, and heart.
Yoga is a direct experience of the vast interrelatedness of all life and of all things. You will
feel at peace at the end of a yoga class because there is a natural realignment of your body
which leads to a natural realignment of your perception of life and of who you are.
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign:'justify', textJustify:'inter-word'  }}>
            You will need to develop discipline and there is hard work involved especially when you first
begin.
Hatha Yoga is the study and practice of physical alignments and breath.
Yoga is much more that postural alignment and breathing.
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign:'justify', textJustify:'inter-word'  }}>
            Yoga is an ancient art based on
a harmonizing system of development for the body, mind, and spirit. The continued
practice of yoga will lead you to a sense of peace and well-being, and also a feeling of
being at one with their environment.
            </Typography>
            <Box sx={{display:{xs:'flex', md:'none'}, mt:4, mb:4, flexDirection:'row', justifyContent:'center'}}>
                <PictureComponent image={images.team_three} size="small" color="dark" />
            </Box>
            <Typography variant="h6" sx={{mt:2, textAlign:'justify', textJustify:'inter-word'  }}>
            “Yoga" is an old discipline from India. It is both spiritual and physical. Yoga uses
breathing techniques, exercise and meditation. It helps to improve health and
happiness. ... He defined yoga as "the cessation of the modification of the mind".
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign:'justify', textJustify:'inter-word'  }}>
            Yoga is a group of physical, mental, and spiritual practices or disciplines which
originated in ancient India. Yoga is one of the six orthodox schools of Hindu
philosophical traditions. There is a broad variety of yoga schools, practices, and goals in
Hinduism, Buddhism, and Jainism.
            </Typography>
        </Box>
        <Box sx={{pl:5,display:{xs:'none', md:'flex'}, zIndex:2,width:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <PictureComponent image={images.team_three} size="big" color="dark" />
        </Box>
        </Box>
        <Box sx={{mt:4}}>
            <Pranayam />
        </Box>
        <Box sx={{mt:4}}>
            <Naturopathy />
        </Box>
        <Box sx={{mt:4}}>
            <AccuPressure />
        </Box>
      </Container>
    </>
  )
}

export default AboutYoga