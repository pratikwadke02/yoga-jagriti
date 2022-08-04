import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import { IconButton, Typography, Box } from '@mui/material';

const NewsCard = (props) => {


    const {image, date, title, description, role, method} = props;

  return (
    <>
    <Box>
        <img src="" alt="" />
        <Box>
            <Box>
                <Typography sx={{ fontSize: "12px" }}>
                    {date}
                </Typography>
            </Box>
            <Box>
                <IconButton>
                    <PersonIcon />
                    <Typography sx={{ fontSize: "14px" }}>
                       by {role}
                    </Typography>
                </IconButton>
                <IconButton>
                    <FolderIcon />
                    <Typography sx={{ fontSize: "14px" }}>
                       by {method}
                    </Typography>
                </IconButton>
            </Box>
            <Box>
                <Typography sx={{ fontSize: "24px" }}>
                    {title}
                </Typography>
                <Typography sx={{ fontSize: "15px" }}>
                    {description}
                </Typography>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default NewsCard