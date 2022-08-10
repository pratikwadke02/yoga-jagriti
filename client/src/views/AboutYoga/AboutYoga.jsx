import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import {images} from '../../constants'
import PictureComponent from '../../components/utils/Picture/PictureComponent'
import { theme } from '../../theme'
import Pranayam from '../Pranayam/Pranayam'
import AccuPressure from '../AccuPressure/AccuPressure'
import Naturopathy from '../Naturopathy/Naturopathy'
import './AboutYoga.css'

const AboutYoga = () => {
  return (
    <>
        <Container
        sx={{
          maxWidth: { xs: "100%" },
          pt: 5,
          backgroundColor: theme.palette.background.light,
          height: "100%",
          minHeight: "95vh",
          pb:10,
        }}

        className="container"
      >
        <Box sx={{zIndex:2, m:'auto',display:'flex', flexDirection:'row', width:'80%'}}>
        <Box sx={{zIndex:2,width:{xs:'160%'}}}>
            <Typography variant="h2" sx={{m:'auto', fontWeight:theme.typography.fontWeightBold, color:theme.palette.primary.main}}>
                About Yoga
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign:'justify', textJustify:'inter-word'  }}>
            The word "yoga" comes from the Sanskrit root yuj, ... Yoga is an ancient art based on
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
        <Box sx={{mt:2}}>
            <Pranayam />
        </Box>
        <Box sx={{mt:2}}>
            <Naturopathy />
        </Box>
        <Box sx={{mt:2}}>
            <AccuPressure />
        </Box>
      </Container>
    </>
  )
}

export default AboutYoga