import React from 'react'
import { Container, Box, Typography, Button } from '@mui/material'
import {theme} from '../../theme'
import {images} from '../../constants'
import {pdfs} from '../../constants'
import CheckIcon from "@mui/icons-material/Check";

const SyllabusComponent = () => {

    const syllabusData = [
        {
            title: "Yoga Volunteer",
            pdf: pdfs.YV,
        },
        {
            title: "Yoga Protocol Instructor",
            pdf: pdfs.YPI,
        },
        {
            title: "Yoga Wellness Instructor",
            pdf: pdfs.YWI,
        },
        {
            title: "Yoga Teacher & Evaluator",
            pdf: pdfs.YTE,
        },
        {
            title: "Yoga Master",
            pdf: pdfs.YM,
        },
        {
            title: "Assistant Yoga Therapist",
            pdf: pdfs.AYTH,
        },
        {
            title:"Yoga Therapist",
            pdf: pdfs.YTH,
        },
        {
            title: 'Therapeutic Yoga Consultant',
            pdf: pdfs.THYC,
        },
        {
            title: "Primary/Elementary School Yoga Teachers",
            pdf: pdfs.PS,
        },
        {
            title: "Secondary/Elementary School Yoga Teachers",
            pdf: pdfs.HS,
        }
    ]


  return (
    <>
    <Box sx={{maxWidth:'800px', m:'auto',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'space-between', border:'1px solid'+theme.palette.text.light, borderRadius:'4px'}}>
            {
                syllabusData.map((item, index) => 
                {
                    return (
                        <Box 
                        key={index}
                        sx={{display:'flex', justifyContent:'space-between', alignItems:'center', p:2, borderBottom:'1px solid'+theme.palette.text.light}}>
                            <Box sx={{display:'flex', alignItems:'center'}}>
                            <CheckIcon sx={{color:theme.palette.primary.main, border:
                              "1px solid" + theme.palette.background.main,
                            borderRadius: "50%",}} fontSize="small" />
                            <Typography variant="h6" sx={{ml:1}}>
                                {item.title}
                            </Typography>
                            </Box>
                            <Box sx={{display:'flex'}}>
                            <a href={item.pdf} 
                            target="_blank"
                            style={{textDecoration:'none', paddingRight:'10px', borderRight:'1px solid'+theme.palette.text.light}}>
                            <Typography variant="h6" sx={{color:theme.palette.text.main}}>
                                View
                            </Typography>
                            </a>
                            <a href={item.pdf} 
                            // target="_blank"
                            download={true} 
                            style={{textDecoration:'none', marginLeft:'10px'}}>
                                <Button variant="contained" color="primary" sx={{height:'30px'}}>
                            <Typography variant="h6" sx={{color:theme.palette.text.default}}>
                                Download
                            </Typography>
                            </Button>
                            </a>
                            </Box>
                        </Box>
                    )
                }
                )   
            }
        </Box>
    </>
  )
}

export default SyllabusComponent

{/* <Box sx={{mr:1, width:'100%'}}>
                <Typography variant="h5" sx={{}}>
                    Yoga Instructor
                </Typography>
            </Box>
            <Box sx={{display:'flex'}}>
                <a href={pdfs.YPI} 
                target="_blank"
                style={{textDecoration:'none', marginRight:'10px'}}>
                <Typography variant="h6" sx={{color:theme.palette.text.main}}>
                    View
                </Typography>
                </a>
                <a href={pdfs.YPI} 
                // target="_blank"
                download={true} 
                style={{textDecoration:'none', marginLeft:'10px'}}>
                    <Button variant="contained" color="primary" sx={{height:'30px'}}>
                <Typography variant="h6" sx={{color:theme.palette.text.default}}>
                    Download
                </Typography>
                </Button>
                </a>
            </Box> */}