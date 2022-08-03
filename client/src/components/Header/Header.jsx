import React from 'react'
import Carousal from '../utils/Carousal/Carousal'
import HeaderBanner from './HeaderBanner/HeaderBanner'

const Header = () => {
  return (
    <>
    <Carousal />
    <div>
      <HeaderBanner />
    </div>
    </>
  )
}

export default Header