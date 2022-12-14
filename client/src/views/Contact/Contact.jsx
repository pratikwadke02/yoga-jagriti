import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import {Mail, Phone, MapPin} from 'react-feather'
import {theme} from '../../theme'
import {images} from '../../constants'
import ContactCard from '../../components/utils/ContactCard/ContactCard'
import ContactComponent from '../../components/ContactComponent/ContactComponent'


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
        <Box sx={{display: "flex", mb:3, width:'100%',  textAlign:'center', justifyContent:'center' }}>
            <Typography variant="h2" sx={{fontWeight: "bold", color: theme.palette.primary.main}}>
                CONTACT US
            </Typography>
        </Box>
        <div className="darkbar"
        style={{margin:'auto'}}
        ></div>
        <Box sx={{display: "flex", flexDirection: {xs:'column', md:"row"}, justifyContent: "center", alignItems: "center", mr:{md:2}}}>
        <Box sx={{width:'100%', display:'flex', flexDirection:{xs:'column'}}}>
            <Box sx={{display:'flex', flexDirection:{xs:'column', lg:'row'}, justifyContent:'center'}}>
            <Box sx={{width:'100%', mr:{xs:0, lg:2}}}>
            <ContactCard title="Mail Here" email="info@yogajagriti.com" icon={<Mail />} />
            </Box>
            <Box sx={{width:'100%', ml:{xs:0, lg:2}, mr:{xs:0, lg:2}}}>
            <ContactCard title="Call Here" phone="+91 9310247223" icon={<Phone />} />
            </Box>
            <Box sx={{width:{xs:'100%'}, ml:{xs:0, lg:2}}}>
                <ContactCard title="Visit Here" address="Delhi" icon={<MapPin />} />
            </Box>
            </Box>
            <Box sx={{mt:{md:4},width:'100%',display:'flex', justifyContent:'center'}}>
                
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