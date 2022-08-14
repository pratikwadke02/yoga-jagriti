import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import {images} from '../../constants'
import PictureComponent from '../utils/Picture/PictureComponent'
import { theme } from '../../theme'

const Naturopathy = () => {
  return (
    <>
        <Box sx={{zIndex:2, m:'auto',display:'flex', flexDirection:'row', width:{xs:'100%', md:'80%'}}}>
        <Box sx={{zIndex:2,width:{xs:'160%'}}}>
            <Typography variant="h2" sx={{m:'auto', fontWeight:theme.typography.fontWeightBold, color:theme.palette.primary.main}}>
                NATUROPATHY
            </Typography>
            <Typography variant="h4" sx={{mt:2}}>
            What is Naturopathic Medicine?
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign: 'justify', textJustify:'inter-word'}}>
            An increased affinity towards the natural way of living &; the traditional methods of
treatment is observed now a day ,especially from the educated group. The reason is a new
awareness about the wonderful role of Mother Nature in the fields of promotion of health &amp;
prolongation of healthy life is gradually developing.
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign: 'justify', textJustify:'inter-word'}}>
            Naturopathy is a system of healing science stimulating the body's inherent power to regain
health with the help of five great elements of Nature-Earth, water, Air fire & Ether. Nature
cure principle says that aii the diseases arise due to accumulation of morbid matter in the
body & if the scope is given for removal of it, provides a cure of relief. It also believes that
the human body possesses inherent self- constructing &amp; self- healing powers.
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign: 'justify', textJustify:'inter-word'}}>
            Though the basic Nature Cure deals only with Pancha Mahabhoota's the recent
developments advocates the practice of drugless therapies like Massage, Electrotherapy,
Physiotherapy, Accupuncture &amp; Accupressure, Magneto therapy etc. Diet plays a major
role, above all.
            </Typography>
            <Box sx={{display:{xs:'flex', md:'none'}, mt:4, mb:4, flexDirection:'row', justifyContent:'center'}}>
                <PictureComponent image={images.team_three} size="small" color="dark" />
            </Box>
            <Typography variant="h4" sx={{mt:4}}>
            How Did Naturopathy Begin?
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign: 'justify', textJustify:'inter-word'}}>
            Naturopathic treatments originated as the use of herbs and foods for medicine, exposure to
fresh air and sunlight, and hydrotherapy (the use of hot and cold water application) as
steam or sauna. These techniques and methods have long been respected throughout the
world. While modern allopathic medicine is a youngster of less than 200 years old, Natural
Medicine has been the primary medicine used by most of the human community even into
the 21st Century. Herbal and traditional medical arts remain the primar
purpose of Naturopathic Medicine.
            </Typography>
        </Box>
        <Box sx={{pl:5,display:{xs:'none', md:'flex'}, zIndex:2,width:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <PictureComponent image={images.team_three} size="big" color="dark" />
        </Box>
        </Box>
    </>
  )
}

export default Naturopathy