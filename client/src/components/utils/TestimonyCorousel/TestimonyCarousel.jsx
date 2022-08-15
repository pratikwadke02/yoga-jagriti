import React from 'react'
import { Carousel } from 'react-bootstrap'
import CommentCard from '../CommentCard/CommentCard'

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
            <CommentCard
              key={index}
              name={testimony.name}
              role={testimony.role}
              comment={testimony.comment}
              rating={testimony.rating}
            />
          </Carousel.Item>
        );
      }
      )}
    </Carousel>
    </>
  )
}

export default TestimonyCorousel
