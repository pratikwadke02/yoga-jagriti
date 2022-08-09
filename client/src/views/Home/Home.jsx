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

const Home = () => {
  return (
    <>
    <div className="header">
      <Header />
      <MidBannerOne />
      <MidBannerTwo />
      <CoursesComponnent />
      <MidBannerThree />
      <MidBannerFour />
      <TeamMemberBanner />
      <MidBannerFive />
      <BottomBanner />
    </div>
    </>
  )
}

export default Home