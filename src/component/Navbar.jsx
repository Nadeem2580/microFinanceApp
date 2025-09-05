import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography
} from '@mui/material';
import {
  Menu as MenuIcon,
  PersonOutline as PersonOutlineIcon
} from '@mui/icons-material';
import { useState, useEffect } from 'react';
import Cookie from "js-cookie";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const navlinks = [
  { title: 'Home', path: '/' },
  { title: 'Apply for loan', path: '/applying_loan' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const token = Cookie.get("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    Cookie.remove("token");
    setIsLoggedIn(false);
    window.location.href = "/login"; // or use navigate
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ background: "#101319" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo Section */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box sx={{
                background: "#1fb857",
                fontSize: "20px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 15px",
                borderRadius: "13px",
                aspectRatio: "1/1"
              }}>
                Q
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.2 }}>
                  Qarze Hasana Hub
                </Typography>
                <Typography variant='caption'>
                  Saylani Microfinance
                </Typography>
              </Box>
            </Stack>

            {/* Desktop Nav Links */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 4 }}>
                {navlinks.map((item) => (
                  <Button
                    key={item.title}
                    href={item.path}
                    sx={{
                      color: '#fff',
                      textTransform: 'none',
                      fontWeight: 500,
                      fontSize: "1rem",
                      '&:hover': {
                        color: '#1fb857',
                        backgroundColor: 'transparent'
                      }
                    }}
                  >
                    {item.title}
                  </Button>
                ))}
              </Box>
            )}

            {/* Right Side: Login/Logout OR Menu Icon */}
            {isMobile ? (
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              isLoggedIn ? (
                <Button
                  onClick={handleLogout}
                  sx={{
                    color: "#fff",
                    textTransform: 'none',
                    fontSize: "1rem",
                    '&:hover': {
                      backgroundColor: "#ff0000",
                      color: "#fff"
                    }
                  }}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  href="/login"
                  sx={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    textTransform: 'none',
                    fontSize: "1rem",
                    '&:hover': {
                      color: "orange"
                    }
                  }}
                >
                  <PersonOutlineIcon fontSize="small" sx={{ mr: 1 }} />
                  Login
                </Button>
              )
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            backgroundColor: '#11141a',
            color: '#fff',
            width: '100%',
            maxWidth: '100vw',
            mt: 0.5
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
              py: 2,
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              '&:hover': {
                backgroundColor: '#1fb857'
              }
            }}
          >
            <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>
              {item.title}
            </Typography>
          </MenuItem>
        ))}
        <Box sx={{ p: 2 }}>
          {isLoggedIn ? (
            <Button
              fullWidth
              onClick={() => {
                handleLogout();
                handleMenuClose();
              }}
              sx={{
                backgroundColor: "#ff0000",
                color: "#fff",
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: "#cc0000"
                }
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              fullWidth
              href="/login"
              onClick={handleMenuClose}
              sx={{
                color: "#fff",
                border: '1px solid #fff',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: "orange",
                  color: "#fff"
                }
              }}
            >
              <PersonOutlineIcon fontSize="small" sx={{ mr: 1 }} />
              Login
            </Button>
          )}
        </Box>
      </Menu>

      {/* Children content below navbar */}
      <Box mt={10}>
        {children}
      </Box>
    </>
  );
};

export default Navbar;
