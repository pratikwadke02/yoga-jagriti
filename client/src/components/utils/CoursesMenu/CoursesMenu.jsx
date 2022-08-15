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
          minWidth:'300px',
          p: 2,
          width: "100%",
        }}
      >
        <Box>
          <Typography
            variant="h4"
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
            variant="h5"
            sx={{
              color: theme.palette.text.main,
              fontWeight: theme.typography.fontWeightMedium,
              mt:1,
            }}
          >
           Fee: ₹{fee}
          </Typography>
        </Box>
        <Box sx={{mt:2}}>
          <Typography variant="h5" sx={{ color: theme.palette.text.main }}>
            Eligibility: {eligibility}
          </Typography>
        </Box>
        <Box sx={{mt:1}}>
          <Typography variant="h5" sx={{ color: theme.palette.text.main, }}>
            Age: {age}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            mt:1,
          }}
        >
          <Typography variant="h5" sx={{ }}>
            Duration: {duration}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            mt:1,
          }}
        >
          <Typography variant="h5" sx={{}}>
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
          <Box sx={{ width: "100%", mt: 2 }}>
            <Link to="/course" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "100%" }}
              >
                <Typography variant="h5" sx={{ color: "white" }}>
                Enroll Now
                </Typography>
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CoursesMenu;
