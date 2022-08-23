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
import { Box } from '@mui/material'
import Notification from '../../components/Notification/Notification'
import LocationBanner from '../../components/LocationBanner/LocationBanner'
import { useDispatch } from 'react-redux'
import { getAllProducts } from '../../actions/product'

const Home = () => {

  const dispatch = useDispatch();

  useEffect (() => {
    const getproductsData = async () => {
      dispatch(getAllProducts());
    }
    getproductsData();
  }, [dispatch]);

  return (
    <>
    <Box sx={{}}>
      <Notification />
      <Header />
      <CoursesComponnent />
      <MidBannerOne />
      <HeaderBanner />
      {/* <MidBannerTwo /> */}
      <MidBannerThree />
      {/* <MidBannerFour /> */}
      <MidBannerFive />
      <EnquiryForm />
      <LocationBanner />
      <BottomBanner />
    </Box>
    </>
  )
}

export default Home