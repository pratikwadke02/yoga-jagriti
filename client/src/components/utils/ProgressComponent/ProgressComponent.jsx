import React from "react";
import {Box, LinearProgress, Typography} from "@mui/material";
import {theme} from "../../../theme";

const ProgressComponent = (props) => {

    const {title, value, color} = props;

  return (
    <>
      {/* <Box sx={{width:'100%', borderBottom:'1px solid'+theme.palette.primary.main, pb:'3px'}}>
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', mb:1}}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h4">{value}%</Typography>
        </Box>
        <LinearProgress variant="determinate" value={value} />
      </Box> */}
      {
        color === "white" ?
        <Box sx={{width:'100%', borderBottom:'1px solid'+theme.palette.text.default, pb:'3px'}}>
          <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', mb:1}}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="h5">{value}%</Typography>
          </Box>
          <LinearProgress variant="determinate" value={value} sx={{
            '& .MuiLinearProgress-barColorPrimary': {
              backgroundColor: theme.palette.secondary.main,
            },
          }} />
        </Box>
        :
        <Box sx={{width:'100%', borderBottom:'1px solid'+theme.palette.primary.main, pb:'3px'}}>
          <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', mb:1}}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h4">{value}%</Typography>
          </Box>
          <LinearProgress variant="determinate" value={value} />
        </Box>
      }
    </>
  );
};

export default ProgressComponent;
