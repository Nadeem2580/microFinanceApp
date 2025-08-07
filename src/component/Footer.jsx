import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
      <Box sx={{ border: '1px solid #2d3748', width: "100%", marginTop: "100px", boxShadow: '0 4px 20px rgba(0,0,0,0.25)', }}></Box>

      <Box>

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
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
          <Typography sx={{color:"#fff", textAlign:"center",fontWeight:"700",fontSize:"3vmin"}} >
            Qarze Hasana Hub
          </Typography>
        </Box>

        <Typography sx={{color:"#6197b3",fontSize:"2vmin", textAlign:"center"}} >Empowering communities through interest-free Islamic</Typography>
        <Typography sx={{color:"#6197b3",fontSize:"2vmin", textAlign:"center"}} >financing. Building dreams, supporting families, creating opportunities.</Typography>
        <Typography sx={{color:"#6197b3",fontSize:"2vmin", textAlign:"center"}} >© 2024 Saylani Welfare. All rights reserved. | Shariah Compliant Financing</Typography>


      </Box>



    </>
  )
}

export default Footer