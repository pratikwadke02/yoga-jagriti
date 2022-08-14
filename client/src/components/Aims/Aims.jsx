import { Container, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import { images } from "../../constants";
import PictureComponent from "../utils/Picture/PictureComponent";
import CheckIcon from '@mui/icons-material/Check';


const Aims = () => {

    const aims = [
        {
            item: "To provide assistance to institutes and persons working in field of Yoga & Naturopathy."
        },
        {
            item: "To enroll Yoga &amp; Naturopathy Institutions working in India and abroad as members of JYANS and Organize meeting, seminars, conferences, workshops, reorientation camps, refresher course etc. for greater benefits to the society thought Yoga & Naturopathy."
        },
        {
            item: "To provide technical and the human resources to organizations working in the field of research, education and promotion of Yoga & Naturopathy."
        },
        {
            item: "To spread its activities by creating units at central, states, regional and district/local level as well as abroad."
        },
        {
            item: "To establish, maintain and assist centers, franchisee & institutes for research & Development in the field of yoga and naturopathy."
        }
    ];

  return (
    <>
        <Box sx={{zIndex:2, m:'auto',display:'flex', flexDirection:{xs:'column', md:'row'}, width:{xs:'100%', md:'80%'}}}>
        <Box sx={{zIndex:2,width:{xs:'100%', md:'160%'}}}>
            <Typography variant="h2" sx={{m:'auto', fontWeight:theme.typography.fontWeightBold, color:theme.palette.primary.main}}>
                AIMS
            </Typography>
            <Typography variant="h6" sx={{m:'auto'}}>
            Jagriti yog & Naturopathy (JYANS) is launched as a moment to develop, promote
& propagate yoga & naturopathy as a system of Medical Science. The aim of JYANS is to
establish a strong platform for the development and promotion of Yoga & Naturopathy at
International level. The specific objectives of the JYNS are :-
            </Typography>
            <List disablePadding>
                {aims.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemIcon sx={{border:'1px solid'+theme.palette.primary.main, borderRadius:'50%'}}>
                            <CheckIcon sx={{color:theme.palette.primary.main}} fontSize="small" />
                        </ListItemIcon>
                        <ListItemText sx={{ml:1}}>
                            <Typography variant="h6" >
                                {item.item}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>
        <Box sx={{pl:5,display:{xs:'none', md:'flex'}, zIndex:2,width:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <PictureComponent image={images.team_three} size="big" color="dark" />
        </Box>
        <Box sx={{display:{xs:'flex', md:'none'}, mt:4, mb:4, flexDirection:'row', justifyContent:'center'}}>
                <PictureComponent image={images.team_three} size="small" color="dark" />
        </Box>
        </Box>
    </>
  )
}

export default Aims