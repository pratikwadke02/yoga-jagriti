import React from 'react'
import { Box } from '@mui/material'
import FaqComponent from '../../components/FaqComponent/FaqComponent'
import { theme } from '../../theme'
import { images } from '../../constants'

const Faq = () => {
  return (
    <>
    <Box sx={{
      
      backgroundColor: theme.palette.background.light,
      backgroundImage: `url(${images.pattern_three})`,
      height: "100%",
      minHeight: "95vh",
    }}>
      <FaqComponent />
    </Box>
    </>
  )
}

export default Faq