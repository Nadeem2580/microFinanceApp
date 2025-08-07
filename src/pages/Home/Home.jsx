

// const loanCategories = [
//   {
//     title: 'Wedding Loans',
//     subcategories: ['Valima', 'Furniture', 'Valima Food', 'Jahez'],
//     maxAmount: 'PKR 5 Lakh',
//     period: '3 years'
//   },
//   {
//     title: 'Home Construction Loans',
//     subcategories: ['Structure', 'Finishing', 'Loan'],
//     maxAmount: 'PKR 10 Lakh',
//     period: '5 years'
//   },
//   {
//     title: 'Business Startup Loans',
//     subcategories: ['Buy Stall', 'Advance Rent', 'Shop Assets', 'Machinery'],
//     maxAmount: 'PKR 10 Lakh',
//     period: '5 years'
//   },
//   {
//     title: 'Education Loans',
//     subcategories: ['University Fees', 'Child Fees'],
//     maxAmount: 'Custom',
//     period: '4 years'
//   }
// ];

import { Box, Container } from "@mui/material";
import HeaderSection from "../../component/HeaderSection";
import Heading from "../../component/Heading";
import Navbar from "../../component/Navbar";
import LoanCards from "../../component/LoanCards";
import LoanCalculation from "../../component/LoanCalculation";
import Footer from "../../component/Footer";

const Home = () => {

  
  
  return (
   <>

      <Box >

        <Navbar />
        <HeaderSection />
        <Heading />
        <LoanCards/>
        <LoanCalculation/>
        <Footer/>
      
       <br />
       <br />
       <br />
       <br />
       <br />

      </Box>
    </>
  );
};

export default Home;


// https://preview--qarz-e-hasana-hub.lovable.app/