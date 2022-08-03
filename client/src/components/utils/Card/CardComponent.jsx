import { IconButton, Box,CardContent, Typography, CardActions, CardMedia, Card } from '@mui/material'
import EastIcon from '@mui/icons-material/East';
import React from 'react'

const CardComponent = (props) => {

    const {title, desc, icon, image} = props

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom sx={{fontSize: '16px'}} component="div">
          {title}
        </Typography>
        <Typography sx={{fontSize: '26px'}} color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Box>
            <IconButton>
                <EastIcon fontSize="medium" />
            </IconButton>
            <Box>
                {icon}
            </Box>
        </Box>
      </CardActions>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
    </Card>
    </>
  )
}

export default CardComponent;