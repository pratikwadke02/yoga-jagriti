import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import {Mail, Phone, MapPin} from 'react-feather'
import {theme} from '../../theme'
import {images} from '../../constants'
import ContactCard from '../../components/utils/ContactCard/ContactCard'
import ContactComponent from '../../components/ContactComponent/ContactComponent'
import ContactForm from '../../components/ContactForm/ContactForm'

const Contact = () => {
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
        <Box sx={{display: "flex", mb:5 }}>
            <Typography variant="h2" sx={{fontWeight: "bold", color: theme.palette.primary.main}}>
                Contact Us
            </Typography>
        </Box>
        <Box sx={{display: "flex", flexDirection: {xs:'column', md:"row"}, justifyContent: "center", alignItems: "flex-start", mr:{md:2}}}>
        <Box sx={{width:'100%', display:'flex', flexDirection:'column'}}>
            <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, justifyContent:'center'}}>
            <Box sx={{width:'100%', mr:{xs:0, md:2}}}>
            <ContactCard title="Mail Here" email="xyz@gmail.com" icon={<Mail />} />
            </Box>
            <Box sx={{width:'100%', ml:{xs:0, md:2}}}>
            <ContactCard title="Call Here" phone="+91 42424 42424" icon={<Phone />} />
            </Box>
            </Box>
            <Box sx={{mt:{md:4},width:'100%',display:'flex', justifyContent:'center'}}>
                <Box sx={{width:{xs:'100%', md:'50%'}}}>
                <ContactCard title="Visit Here" address="Mumbai, Maharashtra" icon={<MapPin />} />
                </Box>
            </Box>
        </Box>
        <Box sx={{width:'100%', ml:{md:2}, pl:{md:4}}}>
            <ContactComponent />
        </Box>
        </Box>
      </Container>
    </>
  )
}

export default Contact