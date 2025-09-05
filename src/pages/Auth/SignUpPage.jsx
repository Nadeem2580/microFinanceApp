import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { Controller, useForm } from 'react-hook-form'
import BASE_URL, { toasterAlert } from '../../utils/utils'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useAppContext } from '../../context/userContext'


const schema = yup
  .object({
    fullName: yup.string().required('Full name is required'),
    signUpemail: yup.string().required('Email is required').email('Invalid email address'),
    signUpPassword: yup.string().required('Password is required'),
    confirmPassword: yup.string().required('Confirm Password is required').oneOf([yup.ref('signUpPassword'), null], 'Passwords must match'),

  })


const SignUpPage = () => {
  const { navigate } = useAppContext()
  const { control, reset, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      signUpPassword: "",
      confirmPassword: "",
    }
  })
  const signUpFunc = async (obj) => {
    try {
      const { fullName, email, password, confirmPassword } = obj

      const response = await axios.post(`${BASE_URL}/api/auth/signup`, obj)

      toasterAlert({
        message: "User created successfully",
        type: "success"
      })
      reset()
      navigate("/login")
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
        <Typography sx={{ fontSize: "3vmin", textAlign: "center", marginBottom: "20px" }} >Sign up Form</Typography>
        <Box component={"form"} onSubmit={handleSubmit(signUpFunc)}>
          <Typography variant="subtitle1" sx={{ color: 'white', marginBottom: '8px' }}>
            Enter Full Name
          </Typography>
          <Controller
            name='fullName'
            control={control}
            render={({ field }) => (
              <TextField autoComplete="off" fullWidth label="Enter full name" variant="outlined" {...field} error={errors.fullName}
                helperText={errors.fullName?.message}
                sx={{
                  marginBottom: '20px',
                  '& .MuiOutlinedInput-root': {
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
            Enter Email
          </Typography>
          <Controller
            name='signUpemail'
            control={control}
            render={({ field }) => (
              <TextField autoComplete="off" fullWidth label="Enter Email" variant="outlined" type='email'  {...field} error={errors.signUpemail}
                helperText={errors.signUpemail?.message}
                sx={{
                  marginBottom: '20px',
                  '& .MuiOutlinedInput-root': {
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
            name='signUpPassword'
            control={control}
            render={({ field }) => (
              <TextField  {...field}
                fullWidth autoComplete="off" label="Enter your Password" variant='outlined' type='password' error={errors.signUpPassword}
                helperText={errors.signUpPassword?.message}
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

          <Typography variant="subtitle1" sx={{ color: 'white', marginBottom: '8px' }}>
            Confirm Password
          </Typography>
          <Controller
            name='confirmPassword'
            control={control}
            render={({ field }) => (
              <TextField  {...field}
                fullWidth label="Enter your Confirm Password" variant='outlined' type='password'
                error={errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
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

          <Typography variant='caption' sx={{ display: "flex", justifyContent: "end", gap: "5px" }}> Already have an account? <Typography sx={{ textDecoration: "none", color: "blue" }} component={"a"} href='/login' variant='body2'>Log in</Typography> </Typography>


          <Button variant='contained' type='submit' sx={{ display: "block", margin: "auto", backgroundColor: "#21c45d", color: "#fff" }} >Log in</Button>
        </Box>

      </Box>
    </Box>
  )
}

export default SignUpPage