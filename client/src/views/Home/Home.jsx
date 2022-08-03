import React from 'react'
import Header from '../../components/Header/Header'
import MidBanner from '../../components/MidBanner/MidBanner'
import MidBannerTwo from '../../components/MidBannerTwo/MidBannerTwo'

const Home = () => {
  return (
    <>
    <div className="header">
      <Header />
      <MidBanner />
      <MidBannerTwo />
    </div>
    </>
  )
}

export default Home