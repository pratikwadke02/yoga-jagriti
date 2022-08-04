import React from 'react'
import BottomBanner from '../../components/BottomBanner/BottomBanner'
import Header from '../../components/Header/Header'
import MidBanner from '../../components/MidBanner/MidBanner'
import MidBannerFive from '../../components/MidBannerFive/MidBannerFive'
import MidBannerFour from '../../components/MidBannerFour/MidBannerFour'
import MidBannerThree from '../../components/MidBannerThree/MidBannerThree'
import MidBannerTwo from '../../components/MidBannerTwo/MidBannerTwo'
import TeamMemberBanner from '../../components/TeamMemberBanner/TeamMemberBanner'

const Home = () => {
  return (
    <>
    <div className="header">
      <Header />
      <MidBanner />
      <MidBannerTwo />
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