import React, {useEffect} from 'react'
import BottomBanner from '../../components/BottomBanner/BottomBanner'
import Header from '../../components/Header/Header'
import MidBannerOne from '../../components/MidBannerOne/MidBannerOne'
import MidBannerFive from '../../components/MidBannerFive/MidBannerFive'
import MidBannerFour from '../../components/MidBannerFour/MidBannerFour'
import MidBannerThree from '../../components/MidBannerThree/MidBannerThree'
import MidBannerTwo from '../../components/MidBannerTwo/MidBannerTwo'
import TeamMemberBanner from '../../components/TeamMemberBanner/TeamMemberBanner'
import CoursesComponnent from '../../components/CoursesComponent/CoursesComponnent'
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner'
import EnquiryForm from '../../components/EnquiryForm/EnquiryForm'
import { Box, Icon } from '@mui/material'
import Notification from '../../components/Notification/Notification'
import LocationBanner from '../../components/LocationBanner/LocationBanner'
import { useDispatch } from 'react-redux'
import { getAllProducts } from '../../actions/product'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { theme } from '../../theme'

const Home = () => {

  

  return (
    <>
    <Box sx={{}}>
      <nav style={{position:'fixed', marginTop:'150px', boxShadow:1, zIndex:2}}>
        <ul style={{listStyle:'none'}}>
          <li style={{ position:'relative',marginTop:'10px', marginBottom:'10px' }}>
            <a href="/" style={{display:'block', width:'100%', height:'100%',}}>
                <FacebookIcon fontSize='large' color="primary" sx={{ backgroundColor:theme.palette.background.default, borderRadius:'5px'}} />
            </a>

          </li>
          <li style={{ position:'relative',marginTop:'10px', marginBottom:'10px' }}>
            <a href="/" style={{display:'block', width:'100%', height:'100%',}}>
                <TwitterIcon fontSize='large' color="primary" sx={{ backgroundColor:theme.palette.background.default, borderRadius:'5px'}}/>
            </a>

          </li>
          <li style={{ position:'relative',marginTop:'10px', marginBottom:'10px' }}>
            <a href="/" style={{display:'block', width:'100%', height:'100%',}}>

                <InstagramIcon fontSize='large' color="primary" sx={{ backgroundColor:theme.palette.background.default, borderRadius:'5px'}}/>
  
            </a>

          </li>
          <li style={{ position:'relative',marginTop:'10px', marginBottom:'10px' }}>
            <a href="/" style={{display:'block', width:'100%', height:'100%',}}>
                <YouTubeIcon fontSize='large' color="primary" sx={{ backgroundColor:theme.palette.background.default, borderRadius:'5px'}}/>

            </a>

          </li>
          <li style={{ position:'relative',marginTop:'10px', marginBottom:'10px' }}>
          <a href="https://wa.me/+919310247223" target="_blank" style={{display:'block', width:'100%', height:'100%',}}>
                <WhatsAppIcon fontSize='large' color="primary" sx={{ backgroundColor:theme.palette.background.default, borderRadius:'5px'}} />
            </a>

          </li>
        </ul>
      </nav>
      <Notification />
      <Header />
      <CoursesComponnent />
      <MidBannerOne />
      <HeaderBanner />
      <MidBannerThree />
      <MidBannerFive />
      <EnquiryForm />
      <LocationBanner />
      <BottomBanner />
    </Box>
    </>
  )
}

export default Home