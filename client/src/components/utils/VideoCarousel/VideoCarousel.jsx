import React from 'react'
import {Carousel} from 'react-bootstrap'
import ReactPlayer from 'react-player'
import './VideoCarousel.css'

const VideoCarousel = (props) => {

    const { videoData } = props

  return (
    <>
    <div>
    <Carousel
        variant="dark"
        interval={null}
    >
        {
            videoData.map((video) => {
                return (
                    <Carousel.Item key={video.id}>
                        <ReactPlayer 
                            url="https://www.youtube.com/watch?v=qeLnZIgt_JI"
                            width="fit-content"
                            pip={true}
                            controls={true}
                            playing={true}
                            style={{margin:'auto', width:'100%'}}
                            muted={true}
                        />
                        {/* <Carousel.Caption>
                            <h3>{video.title}</h3>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                )
            }
            ) 
        }
    </Carousel>
    </div>
    </>
  )
}

export default VideoCarousel
