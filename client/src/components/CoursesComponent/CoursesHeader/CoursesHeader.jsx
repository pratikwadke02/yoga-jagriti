import React from 'react'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InstallMobileOutlinedIcon from '@mui/icons-material/InstallMobileOutlined';
import {Box, Typography} from '@mui/material';
import {theme} from '../../../theme'


const CoursesHeader = () => {

    const headerDataOne = [
        {
            title: "19 Lac +",
            subtitle: "Members",
            icon: <PeopleOutlineIcon color='primary' />
        },
        {
            title: "150 +",
            subtitle: "Courses",
            icon: <SubscriptionsOutlinedIcon color='primary' />
        },
    ];

    const headerDataTwo = [
        {
            title: "4.7",
            subtitle: "Google Rating",
            icon: <StarBorderOutlinedIcon color='primary' />
        },
        {
            title: "6 Lac +",
            subtitle: "App Installs",
            icon: <InstallMobileOutlinedIcon color='primary' />
        }
    ];

  return (
    <>
    <Box sx={{width:'100%',height:'100%', display:'flex', flexDirection:'row', justifyContent:{xs:'center', md:'space-around'}, alignItems:{xs:'flex-start', md:'center'}, backgroundColor:theme.palette.primary.main, p:2}}>
    <Box sx={{width:'100%',height:'100%', display:'flex',flexDirection:{xs:'column',md:'row'}, justifyContent:{xs:'center', md:'space-around'}, alignItems:{xs:'flex-start', md:'center'} }}>
        {headerDataOne.map((item, index) => (
            <Box key={index} sx={{ display: 'flex',flexDirection:'row', alignItems: 'center', justifyContent: {xs:'flex-start', md:'center'}, width: '100%', py: 2 }}>
                <Box sx={{border:'1px solid'+theme.palette.background.default, p:2, borderRadius:'50%', backgroundColor:theme.palette.background.default}}>
                {item.icon}
                </Box>
                <Box sx={{ pl: 3 }}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2">{item.subtitle}</Typography>
                </Box>
            </Box>
        ))}
        </Box>
        <Box sx={{width:'100%',height:'100%', display:'flex',flexDirection:{xs:'column',md:'row'}, justifyContent:{xs:'center', md:'space-around'}, alignItems:{xs:'flex-start', md:'center'} }}>
        {headerDataTwo.map((item, index) => (
            <Box key={index} sx={{ display: 'flex',flexDirection:'row', alignItems: 'center', justifyContent: {xs:'flex-start', md:'center'}, width: '100%', py: 2 }}>
                <Box sx={{border:'1px solid'+theme.palette.background.default, p:2, borderRadius:'50%', backgroundColor:theme.palette.background.default}}>
                {item.icon}
                </Box>
                <Box sx={{ pl: 3 }}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2">{item.subtitle}</Typography>
                </Box>
            </Box>
        ))}
        </Box>
    </Box>
    </>
  )
}

export default CoursesHeader
