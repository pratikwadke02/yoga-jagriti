import React from 'react'
import { theme } from '../../../theme';
import {Box} from '@mui/material';

const PictureComponent = (props) => {

    const {image, size, color} = props;

  return (
    <>
    {
        size === 'big'  ? (
                color === 'dark'  ? (
                    <Box sx={{
                        mt:2,
                        maxWidth: '500px',
                        maxHeight: '500px',
                        transform: "rotate(10deg)",
                        borderRadius: '10px',
                        boxShadow: 1,
                        width: "fit-content",
                        height:"auto",
                        backgroundColor:theme.palette.background.main,
                    }}>
                        <Box sx={{
                        maxWidth: '500px',
                        maxHeight: '500px',
                            transform: "rotate(-10deg)",
                            borderRadius: '10px',
                            boxShadow:1,
                            width: "fit-content",
                            height:"auto",
                            backgroundColor:theme.palette.background.default,
                            p:2,
                        }}>
                            <img src={image} alt="" style={{
                        maxWidth: '500px',
                        maxHeight: '450px',borderRadius: '10px'}}/>
                        </Box>
                    </Box>
                ) : (
                    <Box sx={{
                        mt:2,
                        maxWidth: '500px',
                        maxHeight: '500px',
                        transform: "rotate(10deg)",
                        borderRadius: '10px',
                        boxShadow: 1,
                        width: "fit-content",
                        height:"auto",
                        backgroundColor:theme.palette.background.main,
                    }}>
                        <Box sx={{
                        maxWidth: '500px',
                        maxHeight: '500px',
                            transform: "rotate(-10deg)",
                            borderRadius: '10px',
                            boxShadow:1,
                            width: "fit-content",
                            height:"auto",
                            backgroundColor:theme.palette.background.default,
                            p:2,
                        }}>
                            <img src={image} alt="" style={{
                        maxWidth: '500px',
                        maxHeight: '450px',borderRadius: '10px'}}/>
                        </Box>
                    </Box>

        )
        ) : (
            color === 'dark' ? (
                <Box sx={{
                    mt:2,
                    maxWidth: '300px',
                    maxHeight: '300px',
                    transform: "rotate(10deg)",
                    borderRadius: '10px',
                    boxShadow: 1,
                    width: "fit-content",
                    height:"auto",
                    backgroundColor:theme.palette.primary.main,
                }}>
                    <Box sx={{
                    maxWidth: '300px',
                    maxHeight: '300px',
                        transform: "rotate(-10deg)",
                        borderRadius: '10px',
                        boxShadow:1,
                        width: "fit-content",
                        height:"auto",
                        backgroundColor:theme.palette.background.default,
                        p:2,
                    }}>
                        <img src={image} alt="" style={{
                    maxWidth: '300px',
                    maxHeight: '270px',borderRadius: '10px'}}/>
                    </Box>
                </Box>

            ) : (

                <Box sx={{
                    mt:2,
                    maxWidth: '300px',
                    maxHeight: '300px',
                    transform: "rotate(10deg)",
                    borderRadius: '10px',
                    boxShadow: 1,
                    width: "fit-content",
                    height:"auto",
                    backgroundColor:theme.palette.background.light,
                }}>
                    <Box sx={{
                    maxWidth: '300px',
                    maxHeight: '300px',
                        transform: "rotate(-10deg)",
                        borderRadius: '10px',
                        boxShadow:1,
                        width: "fit-content",
                        height:"auto",
                        backgroundColor:theme.palette.background.default,
                        p:2,
                    }}>
                        <img src={image} alt="" style={{
                    maxWidth: '300px',
                    maxHeight: '270px',borderRadius: '10px'}}/>
                    </Box>
                </Box>

            )
        )

    }
    </>
  )
}

export default PictureComponent