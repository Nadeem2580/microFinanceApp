import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupsIcon from '@mui/icons-material/Groups';
import CallMergeIcon from '@mui/icons-material/CallMerge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const HeaderSection = () => {


    const cardsDetails = [
        { image: MenuBookIcon, status: "100%", title: "Shariah Compliant" },
        { image: GroupsIcon, status: "50K", title: "Families Helped" },
        { image: CallMergeIcon, status: "Rs15Cr+", title: "Loans Disbursed" },
        { image: FavoriteBorderIcon, status: "0%", title: "Interest Rate" },
    ]


    return (

        <Box sx={{ background: "linear-gradient(to right, #14181f, #14181f, #102614)", minHeight: "92vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "20px" }}>

            <Typography sx={{ fontSize: "9vmin", color: "#fff", fontWeight: "700", lineHeight: "100px" }}>Qarze Hasana</Typography>
            <Typography sx={{ fontSize: "9vmin", color: "#1fb857", fontWeight: "700", lineHeight: "80px" }}>Microfinance Hub </Typography>
            <Typography sx={{ fontSize: "3vmin", color: "#98a4b3", maxWidth: { xs: "100%", md: "80%", lg: "60%" }, textAlign: "center" }}>Empowering communities through interest-free Islamic
                financing. Building dreams, supporting families, creating  opportunities.
            </Typography>

            <Box sx={{ display: "flex", marginTop: "30px" }}>
                <Button component="a" href="/applying_loan" sx={{ fontSize: "20px", backgroundColor: "#1fb857", color: "#fff", padding: "20px 40px", fontWeight: "500", boxShadow: "0 0 3px #1fb857", marginRight: "20px", borderRadius: "15px" }}>Apply now <ArrowRightAltIcon /></Button>
                <Button  component="a" href="#loan_calculation" sx={{ ":hover": { backgroundColor: "#121b1e" }, fontSize: "20px", border: "3px dashed #172a17", padding: "20px 30px", color: "#fff", fontWeight: "500", borderRadius: "15px" }}>Calculate your loan</Button>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "20px", marginTop: "100px" }} >

                {
                    cardsDetails.map((values, index) => (
                        <Box key={index} sx={{ backgroundColor: "#121b1e", border: "3px dashed  #172a17", minWidth: "230px", padding: "30px 0", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
                            <IconButton>
                                <values.image />
                            </IconButton>
                            <Typography variant='h6'>{values.status}</Typography>
                            <Typography variant='caption'>{values.title}</Typography>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}

export default HeaderSection