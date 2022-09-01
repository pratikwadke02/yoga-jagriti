import * as React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  ListItemText,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import { theme } from "../../theme";
import { images } from "../../constants";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, NavLink } from "react-router-dom";
import NavbarHeader from "./NavbarHeader/NavbarHeader";
import NavbarLogoSection from "./NavbarLogoSection/NavbarLogoSection";

const drawerWidth = 240;
const navItems = [
  {
    name: "Home",
    path: "",
  },
  {
    name: "About",
    path: "about",
  },
  {
    name: "Know Yoga",
    path: "know-yoga",
  },
  {
    name: "Courses",
    path: "allcourses",
  },
  {
    name: "Syllabus",
    path: "syllabus",
  },
  {
    name: "Gallery",
    path: "gallery",
  },
  {
    name: "Shop",
    path: "shop",
  },
  {
    name: "Career",
    path: "career",
  },
  {
    name: "Notice Board",
    path: "notice-board",
  },
  {
    name: "Contact",
    path: "contact",
  },
  {
    name: "FAQ",
    path: "faq",
  },
  {
    name: "Cart",
    path: "cart",
  }
];

function DrawerAppBar(props) {
  const navLinkStyles = ({ isActive }) => {
    return {
      height: "37px",
      border: "1px solid"+theme.palette.background.default,
      paddingLeft: "10px",
      paddingRight: "10px",
      alignItems: "center",
      textDecoration: "none",
      color: isActive ? theme.palette.primary.main : theme.palette.text.default,
      backgroundColor: isActive ? theme.palette.secondary.main : theme.palette.background.main,
    };
  };

  const respNavLinkStyles = ({ isActive }) => {
    return {
      textDecoration: "none",
      color: isActive ? theme.palette.primary.main : theme.palette.text.main,
    };
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "start" }}>
      <Box
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img
          src={images.yoga_jagriti_logo}
          alt=""
          height={40}
          style={{ marginLeft: "5px" }}
        />
        <Typography variant="h6" sx={{ pl: 1 }}>
          Yoga Jagriti & Naturopathy Sansthan
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <div
            key={index}
          >
            <NavLink 
            to={`/${item.path}`} style={respNavLinkStyles}>
              <ListItem key={index}>
                <ListItemText>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: theme.typography.fontWeightMedium }}
                  >
                    {item.name}
                  </Typography>
                </ListItemText>
              </ListItem>
            </NavLink>
            <Divider
              sx={{ width: "100%", backgroundColor: theme.palette.text.dark }}
            />
            </div>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="relative"
        elevation={0}
      >
        <Toolbar
          sx={{
            maxWidth: { xs: "100%" },
            width: "100%",
            m: "auto",
            display: "flex",
            flexDirection: "column",
          }}
          disableGutters
        >
          <Box
            sx={{ width: "100%", backgroundColor: theme.palette.primary.main }}
          >
            <NavbarHeader />
          </Box>
          <Box>
            <NavbarLogoSection />
          </Box>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              mt: 2,
              display: {xs:'flex', md:"none"},
              flexDirection: "row",
              aligntItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{display: { md: "none" }, ml:{xs:1, md:0} }}
            >
              <MenuIcon color="secondary" />
            </IconButton>
            <IconButton sx={{}}>
              <ShoppingCartOutlinedIcon
                fontSize="small"
                sx={{
                  color: theme.palette.text.default,
                  display: { xs: "block", md: "none" },
                  mr: {xs:1, md:0},
                }}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              mt:2,
              display: {
                xs: "none",
                md: "flex",
              },
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              backgroundColor: theme.palette.primary.main,
              height: "35px",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                width: "100%",
                maxWidth: '1200px',
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {navItems.map((item, index) => (
                  <NavLink
                    key={index}
                   to={`/${item.path}`} style={navLinkStyles}>
                    <Typography
                      variant="h6"
                      sx={{lineHeight:'37px' }}
                    >
                      {item.name}
                    </Typography>
                  </NavLink>
              ))}
              <Box sx={{ 
                // border: '1px solid'+theme.palette.background.default, height:'37px'
                }}>
              {/* <NavLink to='/cart' style={navLinkStyles}>
            <IconButton>
              <ShoppingCartOutlinedIcon
                fontSize="small"
                sx={{
                  color: theme.palette.text.default,
                  display: { xs: "none", md: "block" },
                }}
              />
            </IconButton>
            </NavLink> */}
            </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{}}></Box>
    </Box>
  );
}

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default DrawerAppBar;
