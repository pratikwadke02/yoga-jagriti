import { Typography, Box } from '@mui/material'
import React from 'react'
import { theme } from '../../theme'
import ActivitiesComponent from '../utils/ActivitiesComponent/ActivitiesComponent'

const Activities = () => {

    const activity = [
        {
            item:"Organises scientific and technical seminars, workshops and conference, reorientations Training and health awarences camps for propagation of yoga & naturopathy."
        },
        {
            item:"Conduct Yoga & Naturopathy practitioners and doctors training & management progammes for efficient running of the Yoga & Naturopathy Centers and hospitals."
        },
        {
            item:"Organizes & conduct the unique yoga and naturopathy awareness programmes for young students."
        },
        {
            item:"Facilitate institutes and people who are dedicated working in the field of Yoga & Naturopathy."
        },
        {
            item:"The JYANS conduct Private Yoga, Corporate Yoga, Yoga Retreat & Yoga Courses, certificate, diploma in yoga & naturopathy."
        }
    ]

  return (
    <>
    <Box sx={{pt:8,zIndex:2, m:'auto',display:'flex', flexDirection:{xs:'column'}, width:{xs:'100%'}}}>
        <Box sx={{m:'auto'}}>
        <Typography variant='h2' sx={{color:theme. palette.primary.main, fontWeight:theme.typography.fontWeightBold}}>
            Activities
        </Typography>
        </Box>
        <Box sx={{width:'100%', mt:3 }}>
            <ActivitiesComponent activity={activity[0].item} />
        </Box>
        <Box sx={{mt:{xs:2, md:5},width:'100%', display:'flex', flexDirection:{xs:'column', md:'row'}, alignItems:'center', justifyContent:'space-between'}}>
            <ActivitiesComponent activity={activity[1].item} />
            <Box sx={{display:{xs:'none', lg:'flex'}}}>
            <Typography variant='h2' sx={{color:theme. palette.primary.main, fontWeight:theme.typography.fontWeightBold}}>
            Activities
        </Typography>
            </Box>
            <Box sx={{display:{xs:'block', md:'none'}, mt:2}}/>
            <ActivitiesComponent activity={activity[2].item} />
        </Box>
        <Box sx={{mt:{xs:2, md:5},width:'100%', display:'flex', flexDirection:{xs:'column', md:'row'}, alignItems:'center', justifyContent:'center'}}>
            <ActivitiesComponent activity={activity[3].item} />
            <Box sx={{display:{xs:'block', md:'none'}, mt:2}}/>
            <ActivitiesComponent activity={activity[4].item} /> 
        </Box>
    </Box>
    </>
  )
}

export default Activities