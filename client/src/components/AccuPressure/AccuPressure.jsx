import { Container, Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import { images } from "../../constants";
import PictureComponent from "../utils/Picture/PictureComponent";
import './AccuPressure.css'

const AccuPressure = () => {
  return (
    <>
        <Box sx={{zIndex:2, m:'auto',display:'flex', flexDirection:'row-reverse', width:{xs:'100%', md:'80%'}}}>
        <Box sx={{zIndex:2,width:{xs:'160%'}}}>
            <Typography variant="h2" sx={{m:'auto', fontWeight:theme.typography.fontWeightBold, color:theme.palette.primary.main}}>
                ACCU - PRESSURE
            </Typography>
            <div className="darkbar"></div>
            <Typography variant="h6" sx={{mt:2, textAlign: 'justify', textJustify:'inter-word'}}>
            Acupressure is an ancient Chinese healing method that involves applying pressure to
certain meridian points on the body to relieve pain. The human body has fourteen
&quot;meridians&quot; that carry energy throughout the body. These meridians start at the fingertips,
connect to the brain, and then connect to the organ associated with the specific meridian.
Acupressure is the most effective method for self-treatment of tension-related ailments by
using the power and sensitivity of the human hand. Acupressure deals with all the aspects
of a person as a whole: body, emotions, mind, and spirit as one, not as separate parts. It
relaxes muscular tension and balances the vital life forces of the body.  
            </Typography>
            <Box sx={{display:{xs:'flex', md:'none'}, mt:4, mb:4, flexDirection:'row', justifyContent:'center'}}>
                <PictureComponent image={images.team_three} size="small" color="dark" />
            </Box>
            <Typography variant="h6" sx={{mt:2, textAlign: 'justify', textJustify:'inter-word'}}>
            Acupressure uses the fingers to press key points on the surface of the skin to stimulate the
body&#39;s natural self-curative abilities. When these points are pressed, they release muscular
tension and promote the circulation of blood and the body&#39;s life force to aid healing.
What Conditions Can Naturopathic Medicine Treat?
            </Typography>
            <Typography variant="h6" sx={{mt:2, textAlign: 'justify', textJustify:'inter-word'}}>
            Acupressure can be effective in helping relieve headaches, eyestrain, sinus problems, neck
pain, backaches, arthritis, muscle aches, and tension due to stress. There are also great
advantages to using Acupressure as a way to balance the body and maintain good health.
The healing touch of acupressure reduces tension, increases circulation, and enables the
body to relax deeply. By relieving stress, acupressure strengthens resistance to disease
and promotes wellness.
            </Typography>
        </Box>
        <Box sx={{pr:5,display:{xs:'none', md:'flex'}, zIndex:2,width:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <PictureComponent image={images.team_three} size="big" color="dark" />
        </Box>
        </Box>
    </>
  )
}

export default AccuPressure