import {
  Box,
  Button,
  Container,
  Grid,
  Typography
} from '@mui/material';
import Cards from './cards';


const LoanCards = () => {
  return (
    <Container maxWidth="xl" sx={{ margin: "auto", py: 4 }}>
      <Grid container spacing={3}>
        <Cards />

      </Grid>


      <Box
        sx={{ display: "flex", justifyContent: "center", padding: { xs: "20px 0", md: "50px 0" }, width: "100%", }}>
        <Box sx={{ backgroundColor: "#1d212d", width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" }, padding: { xs: "20px", sm: "30px 50px", md: "40px 80px" }, borderRadius: "15px", boxShadow: 3, }}>
          <Typography variant="h4" sx={{ textAlign: "center", color: "text.primary", fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, fontWeight: 700, }}          >
            Ready to Apply?
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", textAlign: "center", fontSize: { xs: "0.9rem", sm: "1rem" }, margin: { xs: "15px 0", md: "20px 0" }, lineHeight: 1.6, }}          >
            Start your application process with our easy-to-use loan calculator
          </Typography>

          <Button variant="contained" sx={{ padding: { xs: "12px 24px", sm: "15px 30px", md: "20px 40px", backgroundColor: "orange" }, fontWeight: 700, display: "block", margin: "0 auto", borderRadius: "10px", "&:hover": { transform: "translateY(-2px)", boxShadow: 4, }, transition: "all 0.3s ease", }}          >
            Start Application Process
          </Button>
        </Box>
      </Box>


    </Container>
  );
};

export default LoanCards;