import { Button, Box, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { theme } from "../../../theme";
import CallIcon from "@mui/icons-material/Call";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/auth";
import { clearCart } from "../../../actions/cart";

const NavbarHeader = () => {
  const user = ((JSON.parse(localStorage.getItem("profile"))) ? JSON.parse(localStorage.getItem("profile")).data : null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      dispatch(clearCart());
      dispatch(logout(navigate));
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: { xs: "center", md: "flex-end" },
        alignItems: "center",
        height: "33px",
      }}
    >
      {user ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: "1px solid" + theme.palette.background.default,
            pr: 2,
            pl: 2,
            height: "33px",
          }}
        >
          <Button
          variant="text"
            sx={{
              width:'fit-content',
              display: { xs: "none", md: "block" },
              textTransform: "none",
            }}
            onClick={handleLogout}
          >
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.default,
                
              }}
            >
              Logout
            </Typography>
            </Button>
            <Button
            variant="text"
            sx={{
              width:'fit-content',
              display: { md: "none" },
              textTransform: "none",
            }}
            onClick={handleLogout}
            >
            <Typography
              variant="h7"
              sx={{
                color: theme.palette.text.default,
                
              }}
            >
              Logout
            </Typography>
            </Button>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              border: "1px solid" + theme.palette.background.default,
              pr: 2,
              pl: 2,
              height: "33px",
            }}
          >
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.default,
                  display: { xs: "none", md: "block" },
                }}
              >
                Login
              </Typography>
              <Typography
                variant="h7"
                sx={{
                  color: theme.palette.text.default,
                  display: { md: "none" },
                }}
              >
                Login
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              border: "1px solid" + theme.palette.background.default,
              pr: 2,
              pl: 2,
              height: "33px",
            }}
          >
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.default,
                  display: { xs: "none", md: "block" },
                }}
              >
                Register
              </Typography>
              <Typography
                variant="h7"
                sx={{
                  color: theme.palette.text.default,
                  display: { md: "none" },
                }}
              >
                Register
              </Typography>
            </Link>
          </Box>
        </>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          border: "1px solid" + theme.palette.background.default,
          pr: 2,
          pl: 2,
          mr: { xs: 0, md: "80px" },
          height: "33px",
        }}
      >
        <CallIcon
          fontSize="small"
          sx={{ color: theme.palette.background.default }}
        />
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.default,
            ml: 1,
            display: { xs: "none", md: "block" },
          }}
        >
          +919310247223
        </Typography>
        <Typography
          variant="h7"
          sx={{
            color: theme.palette.text.default,
            ml: 1,
            display: { md: "none" },
          }}
        >
          +919310247223
        </Typography>
      </Box>
    </Box>
  );
};

export default NavbarHeader;
