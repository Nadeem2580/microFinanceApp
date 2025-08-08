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
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const navlinks = [
  { title: 'Home', path: '/' },
  { title: 'Apply for loan', path: '/applying_loan' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ background: "#101319", py: { xs: 0.5, md: 0 } }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{
            justifyContent: 'space-between',
            gap: { xs: 1, md: 0 }
          }}>
            {/* Logo Section - Left */}
            <Box sx={{
              flexGrow: { xs: 1, md: 0 },
              minWidth: { xs: 'auto', md: '200px' }
            }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box sx={{
                  background: "#1fb857",
                  fontSize: { xs: "16px", md: "20px" },
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: { xs: "8px 12px", md: "10px 15px" },
                  borderRadius: "13px",
                  aspectRatio: "1/1"
                }}>
                  Q
                </Box>
                <Box>
                  <Typography sx={{
                    fontWeight: 700,
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    lineHeight: 1.2
                  }}>
                    Qarze Hasana Hub
                  </Typography>
                  <Typography variant='caption' sx={{
                    fontSize: { xs: "0.65rem", sm: "0.75rem" },
                    display: { xs: "none", sm: "block" }
                  }}>
                    Saylani Microfinance
                  </Typography>
                </Box>
              </Stack>
            </Box>

            {/* Navigation Links - Center */}
            {!isMobile && (
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: { md: 2, lg: 4 },
                flexGrow: 1,
                px: 2
              }}>
                {navlinks.map((item) => (
                  <Button
                    key={item.title}
                    href={item.path}
                    sx={{
                      color: '#fff',
                      textTransform: 'none',
                      fontWeight: 500,
                      fontSize: { md: "0.9rem", lg: "1rem" },
                      px: { md: 1, lg: 2 },
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

            {/* Action Buttons - Right */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: { xs: 1, sm: 2 },
              flexGrow: { xs: 0, md: 0 },
              minWidth: { xs: 'auto', md: '200px' }
            }}>
              {!isMobile ? (
                <>
                  <Button
                    component="a"
                    href="/login"
                    sx={{
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      textTransform: 'none',
                      fontSize: { md: "0.9rem", lg: "1rem" },
                      px: { md: 1, lg: 2 },
                      "&:hover": {
                        backgroundColor: "rgba(255, 165, 0, 0.1)",
                        color: "orange"
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
                      padding: { md: "6px 16px", lg: "8px 20px" },
                      color: "#fff",
                      textTransform: 'none',
                      fontSize: { md: "0.9rem", lg: "1rem" },
                      "&:hover": {
                        backgroundColor: "#18a048"
                      },
                      whiteSpace: 'nowrap'
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
                  sx={{ p: 1 }}
                >
                  <MenuIcon fontSize={isMobile ? "medium" : "large"} />
                </IconButton>
              )}
            </Box>

            {/* Mobile Menu */}
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
              MenuListProps={{
                sx: {
                  py: 0
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
                    padding:"50px",
                    '&:hover': {
                      backgroundColor: '#1fb857'
                    }
                  }}
                >
                  <Typography sx={{
                    fontSize: '1rem',
                    fontWeight: 500
                  }}>
                    {item.title}
                  </Typography>
                </MenuItem>
              ))}
              <Box sx={{
                display: 'flex',
                gap: 2,
                p: 2,
                flexDirection: { xs: 'column', sm: 'row' }
              }}>
                <Button
                  fullWidth
                  href="/login"
                  sx={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    textTransform: 'none',
                    border: '1px solid #fff',
                    fontSize: '0.9rem',
                    py: 1.5,
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
                  href='/applying_loan'
                  sx={{
                    backgroundColor: "#1fb857",
                    color: "#fff",
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    py: 1.5,
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

      <Box>
        {children}
      </Box>
    </>

  );
};

export default Navbar;