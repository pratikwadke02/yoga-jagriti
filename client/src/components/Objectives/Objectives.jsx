import { ListItemIcon, Box, Typography, List, ListItem } from '@mui/material';
import React from 'react'
import CheckIcon from "@mui/icons-material/Check";
import {theme} from '../../theme'
import {images} from '../../constants'
import PictureComponent from '../utils/Picture/PictureComponent';

const Objectives = () => {

    const objectives = [
        {
            item: "Formulation of YogaTraining Centres/Study Centres on scientific lines in Yoga & Naturopathy."
        },
        {
            item: "Developments and propogation of Yoga &amp; Naturopathy in India and abroad."
        },
        {
            item: "Prosecution and assistance in research, the propagation of knowledge and experimental measures generally in connection with the causation, mode of spread and prevention of diseases."
        },
        {
            item: "Initiate, aid, develop and coordinate scientific research in different aspects, fundamental and applied of Yoga and Naturopathy and to promote and assist institutions of research for the study of diseases, their prevention, causation and remedy."
        },
        {
            item: "Prepare, print, publish and exhibit any papers, posters, pamphlets, periodicals and books for furtherance of the objects of the Central Council and to contribute to such literature."
        },
        {
            item: "Offer prizes and grant of scholarships, including travelling scholarships in furtherance of the objects of the Central Council."
        },
        {
            item: "Grant accreditation to organisations for conducting courses in Yoga and Naturopathy."
        },
        {
            item: "Grant registration to the practitioners of Yoga and Naturopathy."
        }
    ];

  return (
    <>
    <Box sx={{zIndex:2, m:'auto',display:'flex', flexDirection:{xs:'column', md:'row-reverse'}, width:{xs:'100%', md:'80%'}}}>
        <Box sx={{zIndex:2,width:{xs:'100%', md:'160%'}}}>
            <Typography variant="h2" sx={{m:'auto', fontWeight:theme.typography.fontWeightBold, color:theme.palette.primary.main}}>
                OBJECTIVES
            </Typography>
            <div className="darkbar"></div>
            
            <Typography variant="h6" sx={{mt:2, textAlign: 'justify', textJustify:'inter-word'}}>
            JAGRITI Yoga & Naturopathy (JYANS) is an autonomous institution for Research and
Development in Yoga & Naturopathy, established in 2015 under the Societies
Registration Act, 1860. IT is a self funded and some projects are funded by Govt. of
INDIA. As per the Memorandum of Association, the objectives of the Institution are as
under:-
            </Typography>
            <List disablePadding sx={{mt:2}}>
                {objectives.map((item, index) => (
                    <ListItem disablePadding key={index} sx={{mt:1}}>
                        <ListItemIcon sx={{
                            border:
                              "1px solid" + theme.palette.background.main,
                            borderRadius: "50%",
                          }}>
                            <CheckIcon sx={{color:theme.palette.primary.main}} fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="h6" sx={{ml:1, textAlign: 'justify', textJustify:'inter-word'}}>
                            {item.item}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
        <Box sx={{pr:5,display:{xs:'none', md:'flex'}, zIndex:2,width:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <PictureComponent image={images.team_three} size="big" color="dark" />
        </Box>
        <Box sx={{display:{xs:'flex', md:'none'}, mt:4, mb:4, flexDirection:'row', justifyContent:'center'}}>
                <PictureComponent image={images.team_three} size="small" color="dark" />
            </Box>
        </Box>
    </>
  )
}

export default Objectives