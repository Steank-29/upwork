import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Avatar, Button, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from './assets/DaArtis RB.png';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        height: '75px'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
                mr: 2,
              }}
            >
              <Avatar
                src={Logo}
                alt="DaArtis Logo"
                sx={{ width: 100, height: 80, borderRadius: '8px', mr: 1 }}
              />
              DaArtis
            </Typography>
          </Box>

          {/* Centered navigation links for larger screens */}
          <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
            <Typography component="a" href="#home" sx={navLinkStyle}>
              Home
            </Typography>
            <Typography component="a" href="#about" sx={navLinkStyle}>
              About
            </Typography>
            <Typography component="a" href="#artwork" sx={navLinkStyle}>
              Artwork
            </Typography>
            <Typography component="a" href="#blog" sx={navLinkStyle}>
              Blog
            </Typography>
            <Typography component="a" href="#artist" sx={navLinkStyle}>
              Artist
            </Typography>
          </Box>

          {/* Right-aligned Sign In and Sign Up buttons for larger screens */}
          <Box sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}>
            <Button variant="outlined" sx={buttonStyle}>
              Sign In
            </Button>
            <Button variant="outlined" sx={signUpButtonStyle}>
              Sign Up
            </Button>
          </Box>

          {/* Menu Icon for mobile and tablet screens */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              color: '#67b247',
              display: { xs: 'flex', md: 'none' },
              position: 'absolute',
              right: 16,
              top: 16,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Full-Screen Drawer for mobile and tablet screens */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: '100vw', height: '100vh', backgroundColor: 'rgba(255, 255, 255, 0.9)' },
        }}
      >
        {/* Close button on top left */}
        <IconButton
          color="inherit"
          onClick={toggleDrawer(false)}
          sx={{ position: 'absolute', top: 16, right: 16, color: '#67b247' }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: 2,
          }}
        >
          <Typography component="a" href="#home" sx={drawerNavLinkStyle}>
            Home
          </Typography>
          <Typography component="a" href="#about" sx={drawerNavLinkStyle}>
            About
          </Typography>
          <Typography component="a" href="#artwork" sx={drawerNavLinkStyle}>
            Artwork
          </Typography>
          <Typography component="a" href="#blog" sx={drawerNavLinkStyle}>
            Blog
          </Typography>
          <Typography component="a" href="#artist" sx={drawerNavLinkStyle}>
            Artist
          </Typography>

          {/* Sign In and Sign Up buttons */}
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button variant="outlined" sx={buttonStyle}>
              Sign In
            </Button>
            <Button variant="outlined" sx={signUpButtonStyle}>
              Sign Up
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}

// Reusable styles for nav links
const navLinkStyle = {
  color: 'black',
  textDecoration: 'none',
  mx: 4,
  fontFamily: 'monospace',
  '&:hover': { color: '#b763f1' },
  textTransform: 'uppercase',
  fontWeight: 600,
};

// Reusable styles for Drawer links
const drawerNavLinkStyle = {
  color: 'black',
  textDecoration: 'none',
  fontFamily: 'monospace',
  fontWeight: 600,
  fontSize: '1.5rem',
  marginBottom: 2,
};

// Reusable styles for buttons
const buttonStyle = {
  background: '#67b247',
  color: 'white',
  fontFamily: 'monospace',
  marginRight:2,
  border: 'none',
  '&:hover': { borderColor: 'white', color: 'white', borderWidth: '2px', background: '#85de5f' },
};

// Reusable styles for Sign Up button
const signUpButtonStyle = {
  backgroundColor: 'white',
  border: 'none',
  fontFamily: 'monospace',
  color: 'black',
  '&:hover': { textDecoration: 'underline' },
};

export default Navbar;
