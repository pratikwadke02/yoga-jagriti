import React from 'react'
import {Box, Typography} from '@mui/material'
import {theme} from '../../theme'
import {images} from '../../constants'
import LocationCard from '../utils/LocationCard/LocationCard'

const LocationBanner = () => {

  const locationDataOne = [
    {
      id:1,
      head: 'Delhi',
      location: 'Delhi Centre: 13/A New Basti Devli, Khanpur, South Delhi, Delhi 110080'
    },
    {
      id:2,
      head: 'Uttar Pradesh',
      location: 'Jagriti Yoga anda Naturopathy Sansthan Vill. Partapur, Bhogaon, distt Mainpuri UP'
    },
  ];


  return (
    <>
    <Box sx={{
      mt:10,
      width:'100%',
      backgroundColor:theme.palette.background.light,
      backgroundImage: `url(${images.pattern_two})`,
      p:3
      }}>
      <Box sx={{width:'100%', m:'auto', textAlign:'center'}}>
        <Typography variant='h2' sx={{ fontWeight:theme.typography.fontWeightBold, color:theme.palette.primary.main}}>
          OUR LOCATION
        </Typography>
        <div className="darkbar" style={{margin:'auto', marginTop:'20px'}}></div>
      </Box>
      <Box sx={{display:'flex', flexDirection:{xs:'column',md:'row', lg:'column',width:'100%', justifyContent:'center'}}}>
      <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, alignItems:'center', justifyContent:'center', mt:4, mr:{sm:0, lg:0}}}>
        {
          locationDataOne.map((item)=> {
            return (
              <Box 
              key={item.id}
              sx={{ml:{xs:0, md:2}, mr:{xs:0, md:1}, mb:{xs:2, lg:0} }}>
                <LocationCard head={item.head} location={item.location} />
              </Box>
            )
          })
        }
      </Box>
      </Box>
    </Box>
    </>
  )
}

export default LocationBanner
