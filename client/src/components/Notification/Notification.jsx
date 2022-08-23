import React from 'react'
import {Box, Typography} from '@mui/material'
import { theme } from '../../theme'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './Notification.css'

const Notification = () => {

  const notificationData = [
    {
      title: 'New Batch Started',
      course: 'Higher Sec. School Yoga Teacher Course',
      description: 'Enroll Now',
    },
    {
      title: 'New Batch Started',
      course: 'Primary/Elementary School Yoga Teacher Course',
      description: 'Enroll Now',
    },
    {
      title: 'New Batch Started',
      course: 'Yoga Wellness Instructor',
      description: 'Enroll Now',
    },
    {
      title: 'New Batch Started',
      course: 'Yoga Protocol Instructor',
      description: 'Enroll Now',
    },
    {
      title: 'New Batch Started',
      course: 'Yoga Volunteer Course',
      description: 'Enroll Now',
    },
    {
      title: 'New Batch Started',
      course: 'Higher Sec. School Yoga Teacher Course',
      description: 'Enroll Now',
    },
    {
      title: 'New Batch Started',
      course: 'Primary/Elementary School Yoga Teacher Course',
      description: 'Enroll Now',
    },
    {
      title: 'New Batch Started',
      course: 'Yoga Wellness Instructor',
      description: 'Enroll Now',
    },
    {
      title: 'New Batch Started',
      course: 'Yoga Protocol Instructor',
      description: 'Enroll Now',
    },
    {
      title: 'New Batch Started',
      course: 'Yoga Volunteer Course',
      description: 'Enroll Now',
    },
  ]



  return (
    <>
    <Box sx={{minHeight:'40px', display:'flex', alignItems:'center', borderBottom:'1px solid'+theme.palette.primary.main, borderTop:'1px solid'+theme.palette.primary.main}}>
        <Box sx={{width:'150px',display:'flex', alignItems:'center',justifyContent:'center', backgroundColor:theme.palette.primary.main, height:'40px'}}>
            <Typography variant='h5' sx={{color:theme.palette.text.default}}
            >Notifications
            </Typography>
        </Box>
        <Box className='notif-marquee' sx={{width:'calc(100% - 150px)', display:'flex', alignItems:'center',justifyContent:'center',height:'40px'}}>
          <Box className='notif-track' sx={{width:'calc(100% - 150px)', display:'flex', alignItems:'center',justifyContent:'center',height:'40px'}}>
          {
            notificationData.map((item, index) => {
              return (
                <Box sx={{display:'flex', alignItems:'center', mr:10}}>
                  <Typography variant='h6' sx={{color:theme.palette.text.main, fontWeight:theme.typography.fontWeightMedium}}>
                    {item.title} For {item.course}
                  </Typography>
                  <KeyboardDoubleArrowRightIcon fontSize='small' sx={{color:theme.palette.text.main}} />
                  <Typography variant='h6' sx={{color:theme.palette.text.main}}>
                    {item.description}
                  </Typography>
                </Box>
              )
            }
            )
          }
          </Box>
        </Box>
    </Box>
    </>
  )
}

export default Notification
