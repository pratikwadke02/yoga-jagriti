import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import CardComponent from '../../components/utils/Card/CardComponent'
import {theme} from '../../theme'
import {images} from '../../constants'

const MidBannerTwo = () => {

    const cardDetails = [
        {
            title: 'PRACTICE',
            desc: "Therapeutic for asthma",
            icon: "",
            image: "images.service_one",
        },
        {
            title: "FITNESS",
            desc: "Improves Flexibility",
            icon: "",
            image: "{images.service_two}",
        },
        {
            title: "BENIFITS",
            desc: "Fully Relieve Stress",
            icon: "",
            image: "{images.service_three}",
        }
    ]

  return (
    <>
    <Container
        sx={{
            pb:3,
            mt:10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: theme.palette.background.light,
            backgroundImage: `url(${images.pattern})`,
        }}
    >
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', p:2}}>
            <Typography variant="h6" sx={{fontWeight:theme.typography.fontWeightBold, color:theme.palette.primary.main}}>
                _HEALTHY LIFESTYLE_
            </Typography>
            <Typography variant='h1' sx={{mt:2}}>
                A joyfull investment in your body mind and spirit
            </Typography>
        </Box>
        <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'},justifyContent:'space-around', width:'100%', mt:2}}>
            {
                cardDetails.map((item, index) => {
                    return (
                        <CardComponent key={index} title={item.title} desc={item.desc} icon={item.icon} image={images.service_one} />
                    )
                }
                )
            }
        </Box>
    </Container>
    </>
  )
}

export default MidBannerTwo