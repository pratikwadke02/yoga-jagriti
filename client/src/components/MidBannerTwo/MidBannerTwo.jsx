import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import CardComponent from '../../components/utils/Card/CardComponent'

const MidBannerTwo = () => {

    const cardDetails = [
        {
            title: 'PRACTICE',
            desc: "Therapeutic for asthma",
            icon: "",
            image: "",
        },
        {
            title: "FITNESS",
            desc: "Improves Flexibility",
            icon: "",
            image: "",
        },
        {
            title: "BENIFITS",
            desc: "Fully Relieve Stress",
            icon: "",
            image: "",
        }
    ]

  return (
    <>
    <Container>
        <Box>
            <Typography sx={{fontSize:'15px'}}>
                _HEALTHY LIFESTYLE_
            </Typography>
            <Typography sx={{fontSize:'46px'}}>
                A joyfull investment in your body mind and spirit
            </Typography>
        </Box>
        <Box sx={{display:'flex'}}>
            {
                cardDetails.map((item, index) => {
                    return (
                        <CardComponent key={index} title={item.title} desc={item.desc} icon={item.icon} image={item.image} />
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