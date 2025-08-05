import { Box, Typography } from '@mui/material'
import React from 'react'

const Heading = () => {
  return (
   <Box sx={{margin:"80px 0"}}>
    <Typography sx={{fontSize:"5vmin", textAlign:"center",fontWeight:"700"}}>Loan Categories</Typography>
    <Typography sx={{maxWidth:"60%",fontSize:"2.5vmin", textAlign:"center",margin:" 0 auto",color:"#98a4b3" }}>Choose from our range of Shariah-compliant financing options designed to meet your needs</Typography>

   </Box>

  )
}

export default Heading