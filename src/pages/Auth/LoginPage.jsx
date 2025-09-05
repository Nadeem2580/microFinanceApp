import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import BASE_URL, { toasterAlert } from '../../utils/utils.js'
import axios from "axios"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import Cookies from "js-cookie"
import { useAppContext } from '../../context/userContext.jsx'
const schema = yup
  .object({
    loginEmail: yup.string().required('Email is required').email('Invalid email address'),
    loginPassword: yup.string().required('Password is required'),
  })


const LoginPage = () => {

  const { navigate } = useAppContext()
  const { control, reset, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      loginEmail: "",
      loginPassword: "",
    }
  })
  const loginFunc = async (obj) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/login`, obj)
      if (!res.data.status) {
        throw toasterAlert({
          message: res.data.message,
          type: "error"
        })
      }
      Cookies.set("token", res.data.token)
      toasterAlert({
        message: "Usre loged in successfully",
        type: "success"
      })
      navigate("/")
    } catch (error) {
      toasterAlert({
        message: error.message,
        type: "error"
      })
    }
  }
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", margin: { xs: "10px", sm: "20px", md: "30px" } }} >
      <Box sx={{ width: { xs: "100%", md: "80%", lg: "60%", xl: "40%" }, padding: "20px", boxShadow: "0 0 10px #21c45d", borderRadius: "30px" }}>
        <Typography sx={{ fontSize: "3vmin", textAlign: "center", marginBottom: "20px" }} >Login Form</Typography>
        <Typography variant="subtitle1" sx={{ color: 'white', marginBottom: '8px' }}>
          Enter Email
        </Typography>
        <Box component={"form"} onSubmit={handleSubmit(loginFunc)} autoComplete="off">
          <Controller
            name='loginEmail'
            control={control}
            render={({ field }) => (
              <TextField fullWidth label="Enter Email" autoComplete="off" variant="outlined" {...field} error={errors.loginEmail} helperText={errors?.loginEmail?.message}
                sx={{
                  marginBottom: '20px', '& .MuiOutlinedInput-root': {
                    backgroundColor: '#101319',
                    color: 'white',
                    borderRadius: '15px',
                    '& fieldset': {
                      borderColor: '#21c45d',
                      borderRadius: '15px',
                    },
                    '&:hover fieldset': {
                      borderColor: '#21c45d',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#21c45d',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#21c45d',
                  },
                }}
              />
            )}

          />
          <Typography variant="subtitle1" sx={{ color: 'white', marginBottom: '8px' }}>
            Enter Password
          </Typography>
          <Controller
            name='loginPassword'
            control={control}
            render={({ field }) => (
              <TextField {...field}
                fullWidth label="Enter your Password" variant='outlined' autoComplete="off" type='password' error={errors.loginPassword} helperText={errors?.loginPassword?.message}
                sx={{
                  marginBottom: "20px",
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: "'#101319",
                    color: "#fff",
                    borderRadius: "15px",
                    '& Fieldset': {
                      borderColor: "'#21c45d",
                      borderRadius: "15px"
                    },
                    '&:hover fieldset': {
                      borderColor: "#21c45d"
                    },
                    '& .MuiInputLabel-root': {
                      color: "#21c45d"
                    }, '& .MuiInputLabel-root.Mui-focused': {
                      color: '#21c45d'
                    }
                  }

                }}

              />
            )}
          />

          <Typography variant='body2' sx={{ display: "flex", justifyContent: "end", gap: "5px" }}>  not have an account please ? <Typography sx={{ textDecoration: "none", color: "blue" }} component={"a"} href='/sign_up' variant='body1'>Sign up</Typography> </Typography>
          <Button variant='contained' type='submit' sx={{ display: "block", margin: "auto", backgroundColor: "#21c45d", color: "#fff" }} > Log in</Button>
        </Box>

      </Box>
    </Box>

  )
}

export default LoginPage