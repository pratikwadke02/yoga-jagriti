import React from "react";
import {Box, LinearProgress, Typography} from "@mui/material";

const ProgressComponent = (props) => {

    const {title, value} = props;

  return (
    <>
      <Box>
        <Typography sx={{ fontSize: "22px" }}>{title}</Typography>
        <LinearProgress variant="determinate" value={value} />
      </Box>
    </>
  );
};

export default ProgressComponent;
