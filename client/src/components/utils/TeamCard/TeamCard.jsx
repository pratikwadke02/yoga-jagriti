import { Typography, Box } from '@mui/material'
import React from 'react'

const TeamCard = (props) => {

    const {role, name} = props;

  return (
    <>
    <Box>
        <Box>

        </Box>
        <Box>
            <Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
                {role}
            </Typography>
            <Typography sx={{ fontSize: "24px" }}>{name}</Typography>
        </Box>
    </Box>
    </>
  )
}

export default TeamCard