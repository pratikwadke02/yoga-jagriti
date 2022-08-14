import React from 'react'
import BottomBanner from '../../components/BottomBanner/BottomBanner'
import Header from '../../components/Header/Header'
import MidBannerOne from '../../components/MidBannerOne/MidBannerOne'
import MidBannerFive from '../../components/MidBannerFive/MidBannerFive'
import MidBannerFour from '../../components/MidBannerFour/MidBannerFour'
import MidBannerThree from '../../components/MidBannerThree/MidBannerThree'
import MidBannerTwo from '../../components/MidBannerTwo/MidBannerTwo'
import TeamMemberBanner from '../../components/TeamMemberBanner/TeamMemberBanner'
import CoursesComponnent from '../../components/CoursesComponent/CoursesComponnent'
import HeaderBanner from '../../components/Header/HeaderBanner/HeaderBanner'

const Home = () => {
  return (
    <>
    <div className="header">
      <Header />
      <CoursesComponnent />
      <MidBannerOne />
      <HeaderBanner />
      <MidBannerTwo />
      <MidBannerThree />
      <MidBannerFour />
      <MidBannerFive />
      <BottomBanner />
    </div>
    </>
  )
}

export default Home