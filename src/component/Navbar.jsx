import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
const navlinks = [
  { title: 'Home', path: '/' },
  { title: 'Loan calculation', path: '#loan_calculation' },
  { title: 'Applying for loan', path: '/applying_loan' },
  { title: 'Contact us', path: '/contact' },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (

    <AppBar position="fixed" sx={{ background: "#101319" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo Section - Left */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-start' } }}>
            <Stack direction="row" alignItems="center">
              <Box sx={{
                background: "#1fb857",
                fontSize: "20px",
                display: "inline-block",
                padding: "10px 15px",
                borderRadius: "13px",
                marginRight: "10px"
              }}>
                Q
              </Box>
              <Box>
                <Typography variant='h6' sx={{ fontWeight: "700" }}>Qarze Hasana Hub</Typography>
                <Typography variant='caption'>Saylani Microfinance</Typography>
              </Box>
            </Stack>
          </Box>

          {/* Navigation Links - Center */}
          {!isMobile && (
            <Box sx={{
              flex: 1,
              // display: 'flex', 
              // justifyContent: 'center',
              gap: 4
            }}>
              {navlinks.map((item) => (
                <Button
                  key={item.title}
                  href={item.path}
                  sx={{
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 500,
                    '&:hover': {
                      color: '#1fb857'
                    }
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          )}

          {/* Action Buttons - Right */}
          <Box sx={{
            flex: 1,
            display: 'flex',
            justifyContent: { xs: 'flex-end', md: 'flex-end' },
            gap: 2
          }}>
            {!isMobile ? (
              <>
                <Button
                    component="a"
                    href = "/login"
                  sx={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    textTransform: 'none',
                    "&:hover": {
                      backgroundColor: "orange",
                      color: "#fff"
                    }
                  }}
                >
                  <PersonOutlineIcon fontSize="small" sx={{ mr: 1 }} /> Login
                </Button>
                <Button
                  component="a"
                  href='/applying_loan'
                  sx={{
                    backgroundColor: "#1fb857",
                    padding: "8px 20px",
                    color: "#fff",
                    textTransform: 'none',
                    "&:hover": {
                      backgroundColor: "#18a048"
                    }
                  }}
                >
                  Apply now
                </Button>
              </>
            ) : (
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                backgroundColor: '#11141a',
                color: '#fff',
                width: '100%',
                maxWidth: '100vw'
              }
            }}
          >
            {navlinks.map((item) => (
              <MenuItem
                key={item.title}
                onClick={handleMenuClose}
                component="a"
                href={item.path}
                sx={{
                  '&:hover': {
                    backgroundColor: '#1fb857'
                  }
                }}
              >
                {item.title}
              </MenuItem>
            ))}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, p: 2 }}>
              <Button
                fullWidth
                sx={{
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  textTransform: 'none',
                  border: '1px solid #fff',
                  "&:hover": {
                    backgroundColor: "orange",
                    color: "#fff"
                  }
                }}
              >
                <PersonOutlineIcon fontSize="small" sx={{ mr: 1 }} /> Login
              </Button>
              <Button
                fullWidth
                sx={{
                  backgroundColor: "#1fb857",
                  color: "#fff",
                  textTransform: 'none',
                  "&:hover": {
                    backgroundColor: "#18a048"
                  }
                }}
              >
                Apply now
              </Button>
            </Box>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>

  );
};

export default Navbar;