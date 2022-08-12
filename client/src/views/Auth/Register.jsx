import React from 'react'
import RegisterComponent from '../../components/Register/RegisterComponent'
import { Box } from '@mui/material'
import { images } from '../../constants'

const Register = () => {
  return (
    <>
    <Box sx={{ width: "100%", height: "95vh", backgroundImage:`url(${images.pattern_three})` }}>
    <RegisterComponent />
  </Box>
    </>
  )
}

export default Register