import React from "react";
import {Box, LinearProgress, Typography} from "@mui/material";
import {theme} from "../../../theme";

const ProgressComponent = (props) => {

    const {title, value} = props;

  return (
    <>
      <Box sx={{width:'100%', borderBottom:'1px solid'+theme.palette.primary.main, pb:'3px'}}>
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', mb:1}}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h4">{value}%</Typography>
        </Box>
        <LinearProgress variant="determinate" value={value} />
      </Box>
    </>
  );
};

export default ProgressComponent;
