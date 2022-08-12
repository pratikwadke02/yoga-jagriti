import React from 'react'
import { Box, Typography } from '@mui/material'
import './Login.css';
import {theme} from '../../theme'

const LoginComponent = () => {
  return (
    <>
    <Box>
        <div class="ptb-80">
            <div class="container">
                <div class="auth-form">
                    <div class="auth-head">
                        {/* <a href="index.html">
                            <img src="assets/img/logo.png">
                        </a> */}
                        <p>Don't have an account yet? <a href="register.html" style={{textDecoration:'none', color:theme.palette.primary.main}}>Sign Up</a></p>
                    </div>
                    <form>
                        <div class="mb-3">
                            <label class="form-label">E-mail</label>
                            <input type="email" class="form-control"/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control"/>
                        </div>
                        <div class="mb-3">
                            <a href="forgot-password.html" style={{textDecoration:'none', color:theme.palette.primary.main}}>Forgot Password</a>
                        </div>
                        <button type="submit" class="btn" style={{backgroundColor:theme.palette.primary.main}}>
                            <Typography sx={{color:theme.palette.background.default}}>
                            Login
                            </Typography>
                        </button>
                    </form>
                    <div class="foot">
                        <p>Or connect with</p>
                        <ul>
                            <li><a href="#" class="linkedin" target="_blank"><i data-feather="mail"></i></a></li>
                            <li><a href="#" class="facebook" target="_blank"><i data-feather="facebook"></i></a></li>
                            <li><a href="#" class="twitter" target="_blank"><i data-feather="twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Box>
    </>
  )
}

export default LoginComponent;