import { IconButton, Box,CardContent, Typography, CardActions, CardMedia, Card } from '@mui/material'
import EastIcon from '@mui/icons-material/East';
import React from 'react'
import {images} from '../../../constants'
import {theme} from '../../../theme'

const CardComponent = (props) => {

    const {title, desc, icon, image} = props

  return (
    <>
      <Card sx={{ maxWidth: '100%', mb:{xs:3, md:0} }}>
      <CardContent>
        <Typography gutterBottom variant='h6' sx={{color:theme.palette.primary.main, fontWeight:theme.typography.fontWeightBold}}>
          {title}
        </Typography>
        <Typography variant='h2'>
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
        height="200"
        image={image}
      />
    </Card>
    </>
  )
}

export default CardComponent;