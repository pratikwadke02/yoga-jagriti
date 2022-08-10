import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import {images} from '../../constants'
import PictureComponent from '../../components/utils/Picture/PictureComponent'
import { theme } from '../../theme'
const Pranayam = () => {
  return (
    <>
    <Container
        sx={{
          maxWidth: { xs: "100%" },
          pt: 5,
          backgroundColor: theme.palette.background.light,
          height: "100%",
        }}
      >
        <Box sx={{zIndex:2, m:'auto',display:'flex', flexDirection:'row-reverse', width:'80%'}}>
        <Box sx={{zIndex:2,width:{xs:'160%'}}}>
            <Typography variant="h2" sx={{m:'auto', fontWeight:theme.typography.fontWeightBold, color:theme.palette.primary.main}}>
                Pranayam
            </Typography>
            <Typography variant="h4" sx={{mt:4}}>
                What is Pranayam?
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign:'justify', textJustify: 'inter-word'}}>
            Pranayama is "control of Breath". "Prana" is Breath or bio energy in the body. On subtle
levels prana represents the pranic energy responsible for life or life force, and "ayama"
means control. So Pranayama is "Control of Breath". One can control the rhythms of pranic
energy with pranayama and achieve healthy body and mind.
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign:'justify', textJustify: 'inter-word'}}>
            Five types of prana are responsible for various pranic activities in the body, they are Prana,
Apana, Vyan, Udana &amp; Samana. Out of these Prana and Apana are most important. Prana
is upward flowing and Apana is downward flowing. Practice of Pranayama achieves the
balance in the activities of these pranas, which results in healthy body and mind.
            </Typography>
            <Box sx={{display:{xs:'flex', md:'none'}, mt:4, mb:4, flexDirection:'row', justifyContent:'center'}}>
                <PictureComponent image={images.team_three} size="small" color="dark" />
            </Box>
            <Typography variant="h4" sx={{mt:4}}>
            Benefits of Pranayama
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign:'justify', textJustify: 'inter-word'}}>
            Patanjali has said that one develops concentration and clarity of thought by practising
Pranayama. It helps in increasing the mental and physical powers of endurance. It is the
path to deeper relaxation and meditation and is a scientific method of controlling breath. It
provides complete relaxation to the nervous system. It provides relief from pain caused by
the compression of nerve endings. It helps in increasing oxygen supply to the brain which in
turn helps controlling the mind.
            </Typography>
        </Box>
        <Box sx={{pr:5,display:{xs:'none', md:'flex'}, zIndex:2,width:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <PictureComponent image={images.team_three} size="big" color="dark" />
        </Box>
        </Box>
      </Container>
    </>
  )
}

export default Pranayam