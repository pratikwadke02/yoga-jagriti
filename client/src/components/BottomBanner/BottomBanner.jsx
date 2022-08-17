import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import LogoContainer from '../LogoContainer/LogoContainer'
import NewsCard from '../utils/NewsCard/NewsCard'

const BottomBanner = () => {

  const articleData = [
    {
      image: "",
      date: "26 Jul",
      role: "admin",
      method: "Challenges",
      title: "How to Relax Body & Mind & Improves Focus",
      description: "Veniam quis nostrud exercitation ud exercitation ullamco ut aliquip. Duis aute irure dolor..."
    },
    {
      image: "",
      date: "3 Jun",
      role: "admin",
      method: "Exercise",
      title: "Five Stretches For Back Pain During Pregnancy",
      description: "Veniam quis nostrud exercitation ud exercitation ullamco ut aliquip. Duis aute irure dolor..."
    },
    {
      image: "",
      date: "3 Jun",
      role: "admin",
      method: "Practice",
      title: "Professional Yoga trainer for Perfectly Practice",
      description:"Veniam quis nostrud exercitation ud exercitation ullamco ut aliquip. Duis aute irure dolor..." 
    }
  ]

  return (
    <>
    <Container sx={{mt:5, mb:5}}>
        <Box>
          <LogoContainer />
        </Box>
        {/* <Box>
          <Box>
            <Typography sx={{ fontSize: "16px" }}>
              _LATEST NEWS_
            </Typography>
            <Typography sx={{ fontSize: "46px" }}>
              More artiicles from resource library
            </Typography>
          </Box>
          <Box>
            {
              articleData.map((articles, index) => {
                  return (
                      <NewsCard
                      key={index}
                      image={articles.image}
                      date={articles.date}
                      role={articles.role}
                      method={articles.method}
                      title={articles.title}
                      description={articles.description}
                      />
                  );
                  }
              )
            }
          </Box>
        </Box> */}
    </Container>
    </>
  )
}

export default BottomBanner