import * as React from 'react';
import {AppBar, Box, Divider,Drawer, Typography, List, ListItem, ListItemButton, Toolbar, ListItemText, IconButton, Button} from '@mui/material'
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import {theme} from '../../theme'
import { images } from '../../constants';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, NavLink } from 'react-router-dom';
import NavbarHeader from './NavbarHeader/NavbarHeader';
import NavbarLogoSection from './NavbarLogoSection/NavbarLogoSection';

const drawerWidth = 240;
const navItems = [
  {
    name: 'Home',
    path: 'yoga-jagriti',
  },
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Know Yoga',
    path: 'know-yoga',
  },
  {
    name: 'Syllabus',
    path: 'syllabus',
  },
  {
    name: 'Gallery',
    path: 'gallery',
  },
  {
    name: 'Career',
    path: 'career',
  },
  {
    name:'NoticeBoard',
    path:'notice-board',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
  {
    name: 'FAQ',
    path: 'faq',
  }
];

function DrawerAppBar(props) {

  const navLinkStyles = ({isActive}) => {
    return {
      marginLeft:'7px',
      marginRight:'7px',
      textDecoration:'none',
      paddingBottom: '0.5rem',
      borderBottom: isActive ? '1px solid '+theme.palette.primary.main : 'none',
      color: isActive ? theme.palette.primary.main : theme.palette.text.main,
    }
  }

  const respNavLinkStyles = ({isActive}) => {
    return {
      textDecoration:'none',
      color: isActive ? theme.palette.primary.main : theme.palette.text.main,
    }
  }

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'start' }}>
      <Box sx={{mt:1,display:'flex', flexDirection:'row', alignItems:'center'}}>
       <img src={images.yoga_jagriti_logo} alt="" height={40} style={{marginLeft:'5px'}} />
      <Typography variant="h6" sx={{pl:1 }}>
        Yoga Jagriti & Naturopathy Sansthan 
      </Typography>
      </Box>
      <Divider />
      <List>
        {
          navItems.map((item) => (
            <>
            <NavLink to={`/${item.path}`} style={respNavLinkStyles}>
              <ListItem key={item}>
                  <ListItemText>
                    <Typography variant="h6" sx={{fontWeight:theme.typography.fontWeightMedium}}>{item.name}</Typography>
                  </ListItemText>
              </ListItem>
            </NavLink>
            <Divider sx={{width:'100%', backgroundColor:theme.palette.text.dark}} />
            </>
          ))
        }
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar sx={{ maxWidth:{xs:'100%', md:'1400px'},width:'100%', m:'auto', display:'flex', flexDirection:'column', pb:2}}>
          <Box sx={{width:'100%'}}>
          <NavbarHeader />
          </Box>
          <Box>
            <NavbarLogoSection />
          </Box>
          <Box sx={{mt:2, display:"flex", flexDirection:'row', aligntItems:'center', width:'100%', justifyContent:'space-between'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon color="primary" />
          </IconButton>
          <IconButton sx={{}}>
              <ShoppingCartOutlinedIcon fontSize='small' sx={{color:theme.palette.text.main, display:{xs:'block', md:'none'}}} />
            </IconButton>
          </Box>
          <Box sx={{mr:{xs:0}, flexGrow:0, display:{
            xs:'flex'
          }, flexDirection:'row', alignItems:'center'}}>
            <Box sx={{display:{xs:'none', md:'flex'}, alignItems:'center'}}>
            {
              navItems.map((item) => (
                <>
                <NavLink to={`/${item.path}`} style={navLinkStyles}>
                    <Typography variant="h6" sx={{fontWeight:theme.typography.fontWeightMedium }}>
                      {item.name}
                    </Typography>
                </NavLink>
                </>
              ))
            }
            </Box>
            <IconButton sx={{ mr: 2 }}>
              <ShoppingCartOutlinedIcon fontSize="small" sx={{color:theme.palette.text.main, display:{xs:'none', md:'block'}}} />
            </IconButton>
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
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
