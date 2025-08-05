import React from "react";
import Lottie from "lottie-react";
import notFound from "../../assets/404Error.json";
import { Box } from "@mui/material";

export const NotFound404 = () => {
  return (
    <Box sx={{minHeight:"100vh" , display:"flex", justifyContent:"center",alignItems:"center"}} >


    <div style={{ width: 200, height: 200 }}>
      <Lottie color="#fff" animationData={notFound} loop={true} autoplay />
    </div>
    </Box>

  );
};

export  default NotFound404