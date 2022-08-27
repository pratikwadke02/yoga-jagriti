import React from 'react'
import {images} from '../../../constants'
import {theme} from '../../../theme'

const Carousal = () => {
  return (
    <>
<div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"style={{backgroundColor:theme.palette.error.main}}></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{backgroundColor:theme.palette.error.main}}></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={images.slider_1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={images.slider_2} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carousal