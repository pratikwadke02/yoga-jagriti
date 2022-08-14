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
import { images } from "../../constants";
import { theme } from "../../theme";
import CheckIcon from "@mui/icons-material/Check";

const MidBannerOne = () => {
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
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: { xs: "100%", lg: "1300px" },
          mt: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: {xs:"100%", lg:'150%'},
          }}
        >
          <Box
            sx={{
              mb: { xs: 3, md: 0 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              width: "100%",
              mr: 3,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: theme.typography.fontWeightBold,
              }}
            >
              WHY CHOOSE US
            </Typography>
            <Typography
              variant="h4"
              sx={{ mt: 2, textAlign: { xs: "center", md: "initial" } }}
            >
              Peace to Your body and mind
            </Typography>
            <Typography variant="h6"></Typography>
            <Box>
              <List>
                {ListData.map((item, index) => {
                  return (
                    <ListItem key={index} disableGutters>
                      <ListItemIcon>
                        <CheckIcon
                         fontSize="small"
                          sx={{
                            color: theme.palette.primary.main,
                            border: "1px solid" + theme.palette.primary.main,
                            borderRadius: "50%",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="h6">
                          {item.item}
                        </Typography>
                        </ListItemText>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                sx={{ width: "150px", height: "40px" }}
              >
                <Typography variant="h6">- OUR STORY</Typography>
              </Button>
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <img
              src={images.mid_banner_one}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            mt: { xs: 4, md: 0 },
            ml: { lg: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", width: "100%", mb: 2 }}>
            <ProgressComponent title="Happy Students" value="80" />
          </Box>
          <Box sx={{ p: 1, mt: 1, mb: 1 }}>
            <Typography variant="h5">
              Liusmod tempor incididunt labore et dolore magna aliqua ut enim
              sed do eiusmod usmod tempor incididunt labore et dolore magna
              aliqua ut enim sed do eiusmod tempor incididunt kabore.
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: theme.palette.background.light,
              p: 2,
              mt: 2,
            }}
          >
            <Typography variant="h6">
              “Lorem ipsum dolor sit consectetur adipiscing elit, sed eiusmod
              tempor incididunt ut labore et dolore”
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default MidBannerOne;
