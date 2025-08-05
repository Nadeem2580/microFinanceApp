import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Chip,
  IconButton,
  Container
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';



const Cards = () => {
  return (
    <>
      <Grid size={{ xs: 12, md: 6 }}
       sx={{
        ':hover': {
          transform: 'scale(1.10)',
          transition: 'all 0.3s ease-in-out',
          boxShadow: "0 0px 10px  #21c45d"
        }
      }}>
        <Card sx={{
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: "#14171f",
          transition: 'all 0.3s ease-in-out',
          ':hover': {
            boxShadow: '0 0px 5px  #21c45d',
            transform: 'translateY(-5px)'
          }
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            pb: 0
          }}>
            <IconButton aria-label="add to favorites">
              <FavoriteBorderIcon color="info" fontSize='large' />
            </IconButton>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: '#1e232f',
                color: 'white',
                borderRadius: '20px',
                fontSize: '0.7rem',
                textTransform: 'none',
                px: 2,
                py: 0.5
              }}
            >
              Interest Free
            </Button>
          </Box>

          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#fff' }}>
              Wedding Loans
            </Typography>

            <Typography variant="body2" sx={{ color: '#98a4b3' }} gutterBottom>
              Support for your special day with Islamic financing solutions
            </Typography>

            <Box sx={{
              display: 'flex',
              gap: 2,
              my: 3
            }}>
              <Box sx={{
                border: '1px solid #1e232f',
                background: "#181c25",
                borderRadius: '8px',
                p: 1.5,
                textAlign: 'center',
                flex: 1
              }}>
                <Typography variant="caption" sx={{ color: '#98a4b3' }}>Max</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#fff' }}>$ Amount</Typography>
                <Typography variant="h6" sx={{ color: '#1fb857', fontWeight: 700 }}>Rs 5 Lakh</Typography>
              </Box>

              <Box sx={{
                border: '1px solid #1e232f',
                borderRadius: '8px',
                p: 1.5,
                background: "#181c25",
                textAlign: 'center',
                flex: 1
              }}>
                <Typography variant="caption" sx={{ color: '#98a4b3' }}>Period</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#fff' }}>3 Years</Typography>
                <Typography variant="h6" sx={{ color: '#1fb857', fontWeight: 700 }}>36 Months</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <PersonIcon fontSize="small" sx={{ color: "#21c45d" }} />
              <Typography variant="body2" sx={{ color: '#fff' }}>Available Options</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              <Chip sx={{
                color: "#21c45d",
                borderColor: '#21c45d',
                backgroundColor: 'transparent'
              }} label="Valima" size="small" variant="outlined" />
              <Chip sx={{
                color: "#21c45d",
                borderColor: '#21c45d',
                backgroundColor: 'transparent'
              }} label="Furniture" size="small" variant="outlined" />
              <Chip sx={{
                color: "#21c45d",
                borderColor: '#21c45d',
                backgroundColor: 'transparent'
              }} label="Valima Food" size="small" variant="outlined" />
              <Chip sx={{
                color: "#21c45d",
                borderColor: '#21c45d',
                backgroundColor: 'transparent'
              }} label="Jahez" size="small" variant="outlined" />
            </Box>

            <Button
              fullWidth
              variant="contained"
              endIcon={<ArrowRightAltIcon />}
              sx={{
                backgroundColor: '#1fb857',
                color: 'white',
                borderRadius: '12px',
                py: 1.5,
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#189e48'
                }
              }}
            >
              Calculate & Apply
            </Button>
          </CardContent>
        </Card>
      </Grid>

      {/* -------------- 2nd card ---------------  */}

      <Grid  size={{ xs: 12, md: 6 }} sx={{
        ':hover': {
          transform: 'scale(1.10)',
          transition: 'all 0.3s ease-in-out',
          boxShadow: "0 0px 10px  #21c45d"
        }
      }}>

        <Card sx={{
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: "#14171f",
          transition: 'all 0.3s ease-in-out',
          ':hover': {
            boxShadow: '0 0px 5px  #21c45d',
            transform: 'translateY(-5px)'
          }
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            pb: 0
          }}>
            <IconButton aria-label="add to favorites">
              <HomeIcon color="info" fontSize='large' />
            </IconButton>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: '#1e232f',
                color: 'white',
                borderRadius: '20px',
                fontSize: '0.7rem',
                textTransform: 'none',
                px: 2,
                py: 0.5
              }}
            >
              Interest Free
            </Button>
          </Box>

          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#fff' }}>
              Home Construction
            </Typography>

            <Typography variant="body2" sx={{ color: '#98a4b3' }} gutterBottom>
              Build your dream home with our construction financing
            </Typography>

            <Box sx={{
              display: 'flex',
              gap: 2,
              my: 3
            }}>
              <Box sx={{
                border: '1px solid #1e232f',
                background: "#181c25",
                borderRadius: '8px',
                p: 1.5,
                textAlign: 'center',
                flex: 1
              }}>
                <Typography variant="caption" sx={{ color: '#98a4b3' }}>Max</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#fff' }}>$ Amount</Typography>
                <Typography variant="h6" sx={{ color: '#1fb857', fontWeight: 700 }}>Rs 10 Lakh</Typography>
              </Box>

              <Box sx={{
                border: '1px solid #1e232f',
                borderRadius: '8px',
                p: 1.5,
                background: "#181c25",
                textAlign: 'center',
                flex: 1
              }}>
                <Typography variant="caption" sx={{ color: '#98a4b3' }}>Period</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#fff' }}>5 Years</Typography>
                <Typography variant="h6" sx={{ color: '#1fb857', fontWeight: 700 }}>60 Months</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <PersonIcon fontSize="small" sx={{ color: "#21c45d" }} />
              <Typography variant="body2" sx={{ color: '#fff' }}>Available Options</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              <Chip sx={{
                color: "#21c45d",
                borderColor: '#21c45d',
                backgroundColor: 'transparent'
              }} label="Structure" size="small" variant="outlined" />
              <Chip sx={{
                color: "#21c45d",
                borderColor: '#21c45d',
                backgroundColor: 'transparent'
              }} label="Finishing" size="small" variant="outlined" />
              <Chip sx={{
                color: "#21c45d",
                borderColor: '#21c45d',
                backgroundColor: 'transparent'
              }} label="Loan" size="small" variant="outlined" />

            </Box>

            <Button
              fullWidth
              variant="contained"
              endIcon={<ArrowRightAltIcon />}
              sx={{
                backgroundColor: '#1fb857',
                color: 'white',
                borderRadius: '12px',
                py: 1.5,
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#189e48'
                }
              }}
            >
              Calculate & Apply
            </Button>
          </CardContent>
        </Card>

      </Grid>


      {/* -------------- 3rd card ---------------  */}

      <Grid size={{ xs: 12, md: 6 }} sx={{
        ':hover': {
          transform: 'scale(1.10)',
          transition: 'all 0.3s ease-in-out',
          boxShadow: "0 0px 10px  #21c45d"
        }
      }}>

        <Card sx={{
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: "#14171f",
          transition: 'all 0.3s ease-in-out',
          ':hover': {
            boxShadow: '0 0px 5px  #21c45d',
            transform: 'translateY(-5px)'
          }
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            pb: 0
          }}>
            <IconButton aria-label="add to favorites">
              <WorkOutlineIcon color="info" fontSize='large' />
            </IconButton>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: '#1e232f',
                color: 'white',
                borderRadius: '20px',
                fontSize: '0.7rem',
                textTransform: 'none',
                px: 2,
                py: 0.5
              }}
            >
              Interest Free
            </Button>
          </Box>

          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#fff' }}>
              Business Startup
            </Typography>

            <Typography variant="body2" sx={{ color: '#98a4b3' }} gutterBottom>
              Launch your entrepreneurial journey with startup capital
            </Typography>

            <Box sx={{
              display: 'flex',
              gap: 2,
              my: 3
            }}>
              <Box sx={{
                border: '1px solid #1e232f',
                background: "#181c25",
                borderRadius: '8px',
                p: 1.5,
                textAlign: 'center',
                flex: 1
              }}>
                <Typography variant="caption" sx={{ color: '#98a4b3' }}>Max</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#fff' }}>$ Amount</Typography>
                <Typography variant="h6" sx={{ color: '#1fb857', fontWeight: 700 }}>Rs 10 Lakh</Typography>
              </Box>

              <Box sx={{
                border: '1px solid #1e232f',
                borderRadius: '8px',
                p: 1.5,
                background: "#181c25",
                textAlign: 'center',
                flex: 1
              }}>
                <Typography variant="caption" sx={{ color: '#98a4b3' }}>Period</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#fff' }}>5 Years</Typography>
                <Typography variant="h6" sx={{ color: '#1fb857', fontWeight: 700 }}>60 Months</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <PersonIcon fontSize="small" sx={{ color: "#21c45d" }} />
              <Typography variant="body2" sx={{ color: '#fff' }}>Available Options</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              <Chip sx={{
                color: "#21c45d",
                borderColor: '#21c45d',
                backgroundColor: 'transparent'
              }} label="Buy Stall" size="small" variant="outlined" />
              <Chip sx={{
                color: "#21c45d",
                borderColor: '#21c45d',
                backgroundColor: 'transparent'
              }} label="Advance Rent for Shop" size="small" variant="outlined" />
              <Chip sx={{
                color: "#21c45d",
                borderColor: '#21c45d',
                backgroundColor: 'transparent'
              }} label="Shop Assets" size="small" variant="outlined" />
              <Chip sx={{
                color: "#21c45d",
                borderColor: '#21c45d',
                backgroundColor: 'transparent'
              }} label="Shop Machinery" size="small" variant="outlined" />
            </Box>

            <Button
              fullWidth
              variant="contained"
              endIcon={<ArrowRightAltIcon />}
              sx={{
                backgroundColor: '#1fb857',
                color: 'white',
                borderRadius: '12px',
                py: 1.5,
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#189e48'
                }
              }}
            >
              Calculate & Apply
            </Button>
          </CardContent>
        </Card>

      </Grid>

      {/* -------------- 4th card ---------------  */}

      <Grid  size={{ xs: 12, md: 6 }} sx={{
        ':hover': {
          transform: 'scale(1.10)',
          transition: 'all 0.3s ease-in-out',
          boxShadow: "0 0px 10px  #21c45d"
        }
      }}>


        <Card sx={{
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: "#14171f",
          transition: 'all 0.3s ease-in-out',
          ':hover': {
            boxShadow: '0 0px 5px  #21c45d',
            transform: 'translateY(-5px)'
          }
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            pb: 0
          }}>
            <IconButton aria-label="add to favorites">
              <SchoolIcon color="info" fontSize='large' />
            </IconButton>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: '#1e232f',
                color: 'white',
                borderRadius: '20px',
                fontSize: '0.7rem',
                textTransform: 'none',
                px: 2,
                py: 0.5
              }}
            >
              Interest Free
            </Button>
          </Box>

          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#fff' }}>
              Education Loans
            </Typography>

            <Typography variant="body2" sx={{ color: '#98a4b3' }} gutterBottom>
              Invest in education for a brighter future
            </Typography>

            <Box sx={{
              display: 'flex',
              gap: 2,
              my: 3
            }}>
              <Box sx={{
                border: '1px solid #1e232f',
                background: "#181c25",
                borderRadius: '8px',
                p: 1.5,
                textAlign: 'center',
                flex: 1
              }}>
                <Typography variant="caption" sx={{ color: '#98a4b3' }}>Max</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#fff' }}>$ Amount</Typography>
                <Typography variant="h6" sx={{ color: '#1fb857', fontWeight: 700 }}>As Required</Typography>
              </Box>

              <Box sx={{
                border: '1px solid #1e232f',
                borderRadius: '8px',
                p: 1.5,
                background: "#181c25",
                textAlign: 'center',
                flex: 1
              }}>
                <Typography variant="caption" sx={{ color: '#98a4b3' }}>Period</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#fff' }}>4 Years</Typography>
                <Typography variant="h6" sx={{ color: '#1fb857', fontWeight: 700 }}>48 Months</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <PersonIcon fontSize="small" sx={{ color: "#21c45d" }} />
              <Typography variant="body2" sx={{ color: '#fff' }}>Available Options</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              <Chip sx={{
                color: "#21c45d",
                borderColor: '#21c45d',
                backgroundColor: 'transparent'
              }} label="University Fees" size="small" variant="outlined" />
              <Chip sx={{
                color: "#21c45d",
                borderColor: '#21c45d',
                backgroundColor: 'transparent'
              }} label="Child Fees Loan" size="small" variant="outlined" />

            </Box>

            <Button
              fullWidth
              variant="contained"
              endIcon={<ArrowRightAltIcon />}
              sx={{
                backgroundColor: '#1fb857',
                color: 'white',
                borderRadius: '12px',
                py: 1.5,
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#189e48'
                }
              }}
            >
              Calculate & Apply
            </Button>
          </CardContent>
        </Card>

      </Grid>
    </>


  );
};


export default Cards