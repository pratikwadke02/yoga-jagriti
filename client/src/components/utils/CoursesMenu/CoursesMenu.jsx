import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { theme } from "../../../theme";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const CoursesMenu = (props) => {
  const { name, image, eligibility, age, fee, seats, duration } = props;

  return (
    <>
      <Box
        sx={{
          p: 2,
          width: "100%",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: theme.typography.fontWeightBold,
            }}
          >
            {name}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.main,
              fontWeight: theme.typography.fontWeightMedium,
            }}
          >
           Fee: ₹{fee}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ color: theme.palette.text.main }}>
            Eligibility: {eligibility}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ color: theme.palette.text.main }}>
            Age: {age}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6" sx={{ }}>
            Duration: {duration}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6" sx={{}}>
            Number of Seats: {seats}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Box sx={{ width: "100%", mt: 1 }}>
            <Link to="/course" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "100%" }}
              >
                Enroll Now
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CoursesMenu;
