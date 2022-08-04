import {
  Box,
  ListItemText,
  Button,
  Container,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import ProgressComponent from "../utils/ProgressComponent/ProgressComponent";

const MidBanner = () => {
  const ListData = [
    {
      item: "20+ Styles of Yoga Sed do",
    },
    {
      item: "Professional Yoga Instructors",
    },
    {
      item: "Quis nostrud exercitation ullamco",
    },
    {
      item: "All Our Classes Well Planned",
    },
  ];

  return (
    <>
      <Container sx={{ display: "flex", flexDirection: "row" }}>
        <Box>
          <Typography sx={{ fontSize: "15px" }}>_WHY CHOOSE US_</Typography>
          <Typography sx={{ fontSize: "46px" }}>
            Peace to Your body and mind
          </Typography>
          <Typography sx={{ fontSize: "15px" }}></Typography>
          <Box>
            <List>
              {ListData.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText>{item.item}</ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Button variant="outlined">
            <Typography sx={{ fontSize: "15px" }}>- OUR STORY</Typography>
          </Button>
        </Box>
        <Box></Box>
        <Box>
          <Box>
            <ProgressComponent title="Happy Students" value="80" />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "15px" }}>
              Liusmod tempor incididunt labore et dolore magna aliqua ut enim
              sed do eiusmod usmod tempor incididunt labore et dolore magna
              aliqua ut enim sed do eiusmod tempor incididunt kabore.
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "20px" }}>
          “Lorem ipsum dolor sit consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore”
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default MidBanner;
