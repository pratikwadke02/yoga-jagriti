import React from 'react'
import {images} from '../../../constants'
import {theme} from '../../../theme'

const Carousal = () => {
  return (
    <>
<div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"style={{backgroundColor:theme.palette.error.main}}></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{backgroundColor:theme.palette.error.main}}></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={images.slider_1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={images.slider_2} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carousal