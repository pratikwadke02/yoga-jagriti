import React from 'react'
import { Carousel } from 'react-bootstrap'
import CommentCard from '../CommentCard/CommentCard'
import {Box} from '@mui/material';

const TestimonyCorousel = (props) => {

  const { testimonials } = props

  return (
    <>
    <Carousel
      controls={false}
      fade
      slide={false}
      variant="dark"
      style={{
        paddingBottom: "20px",
      }}
    >
      {testimonials.map((testimony, index) => {
        return (
          <Carousel.Item key={index}>
            <Box sx={{display:'flex'}}>
              <Box sx={{mr:{xs:0, md:1}}}>
            <CommentCard
              key={index}
              name={testimony.name}
              // role={testimony.role}
              comment={testimony.comment}
              rating={testimony.rating}
            />
            </Box>
            <Box sx={{ml:1, display:{xs:'none', md:'flex'}}}>
            <CommentCard
              key={index}
              name={testimony.name}
              // role={testimony.role}
              comment={testimony.comment}
              rating={testimony.rating}
            />
            </Box>
            </Box>
          </Carousel.Item>
        );
      }
      )}
    </Carousel>
    </>
  )
}

export default TestimonyCorousel
