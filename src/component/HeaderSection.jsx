import { Box, Button, IconButton, Typography } from '@mui/material';
import {
  ArrowRightAlt as ArrowRightAltIcon,
  MenuBook as MenuBookIcon,
  Groups as GroupsIcon,
  CallMerge as CallMergeIcon,
  FavoriteBorder as FavoriteBorderIcon
} from '@mui/icons-material';

const cardsDetails = [
  { 
    image: MenuBookIcon, 
    status: "100%", 
    title: "Shariah Compliant" 
  },
  { 
    image: GroupsIcon, 
    status: "50K", 
    title: "Families Helped" 
  },
  { 
    image: CallMergeIcon, 
    status: "Rs15Cr+", 
    title: "Loans Disbursed" 
  },
  { 
    image: FavoriteBorderIcon, 
    status: "0%", 
    title: "Interest Rate" 
  },
];

const HeaderSection = () => {
  return (
    <Box sx={{ 
      background: "linear-gradient(to right, #14181f, #14181f, #102614)",
      minHeight: "92vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",marginTop:"50px",
      padding: { xs: "20px 10px", md: "20px" },
      textAlign: "center"
    }}>
      {/* Main Title */}
      <Box sx={{ mb: { xs: 1, md: 2 } }}>
        <Typography sx={{ 
          fontSize: { 
            xs: "2.5rem", 
            sm: "3.5rem", 
            md: "4.5rem", 
            lg: "5.5rem" 
          },
          color: "#fff",
          fontWeight: 700,
          lineHeight: 1.2,
          whiteSpace: "nowrap"
        }}>
          Qarze Hasana
        </Typography>
      </Box>

      {/* Subtitle */}
      <Box sx={{ mb: { xs: 2, md: 3 } }}>
        <Typography sx={{ 
          fontSize: { 
            xs: "2rem", 
            sm: "3rem", 
            md: "4rem", 
            lg: "5rem" 
          },
          color: "#1fb857",
          fontWeight: 700,
          lineHeight: 1,
          whiteSpace: "nowrap"
        }}>
          Microfinance Hub
        </Typography>
      </Box>

      {/* Description */}
      <Typography sx={{ 
        fontSize: { 
          xs: "1rem", 
          sm: "1.25rem", 
          md: "1.5rem" 
        },
        color: "#98a4b3",
        maxWidth: { xs: "100%", md: "80%", lg: "60%" },
        mb: { xs: 3, md: 4 },
        px: { xs: 1, sm: 0 }
      }}>
        Empowering communities through interest-free Islamic financing, building dreams, supporting families, creating opportunities.
      </Typography>

      {/* Action Buttons */}
      <Box sx={{ 
        display: "flex", 
        flexDirection: { xs: "column", sm: "row" },
        gap: "20px",
        mb: { xs: 4, md: 6 },
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Button 
          component="a" 
          href="/applying_loan" 
          sx={{ 
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
            backgroundColor: "#1fb857",
            color: "#fff",
            padding: { xs: "12px 24px", md: "16px 32px" },
            fontWeight: 500,
            boxShadow: "0 0 3px #1fb857",
            borderRadius: "15px",
            '&:hover': {
              backgroundColor: "#18a04a"
            },
            minWidth: { xs: "200px", sm: "auto" }
          }}
        >
          Apply now <ArrowRightAltIcon sx={{ ml: 1 }} />
        </Button>
        
        <Button 
          component="a" 
          href="#loan_calculation" 
          sx={{ 
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
            border: "3px dashed #172a17",
            padding: { xs: "12px 24px", md: "16px 32px" },
            color: "#fff",
            fontWeight: 500,
            borderRadius: "15px",
            '&:hover': { 
              backgroundColor: "#121b1e" 
            },
            minWidth: { xs: "200px", sm: "auto" }
          }}
        >
          Calculate your loan
        </Button>
      </Box>

      {/* Stats Cards */}
      <Box sx={{ 
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        width: "100%",
        maxWidth: "1200px",
        justifyContent: "center",
        px: { xs: 2, sm: 0 }
      }}>
        {cardsDetails.map(({ image: Icon, status, title }, index) => (
          <Box 
            key={index} 
            sx={{ 
              backgroundColor: "#121b1e",
              border: "3px dashed #172a17",
              padding: "20px 0",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              flex: { xs: "1 1 40%", sm: "1 1 22%" },
              minWidth: { xs: "160px", sm: "180px" },
              maxWidth: { xs: "none", md: "240px" }
            }}
          >
            <IconButton sx={{ color: "#1fb857" }}>
              <Icon fontSize="large" />
            </IconButton>
            <Typography variant='h6' sx={{ 
              color: "#fff", 
              mt: 1,
              fontSize: { xs: "1.25rem", sm: "1.5rem" }
            }}>
              {status}
            </Typography>
            <Typography variant='caption' sx={{ 
              color: "#98a4b3",
              fontSize: { xs: "0.8rem", sm: "0.9rem" }
            }}>
              {title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HeaderSection;