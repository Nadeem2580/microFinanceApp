import { yupResolver } from '@hookform/resolvers/yup';
import {
  CreditCard as CreditCardIcon,
  Description as FileTextIcon,
  Email as MailIcon,
  Place as MapPinIcon,
  Phone as PhoneIcon,
  Person as UserIcon,
  People as UsersIcon
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from "yup";
import BASE_URL from '../../utils/utils';
import Cookies from "js-cookie"
import LoanDetailsModal from '../../component/Modal';
import {replace, useNavigate} from "react-router-dom"

const loanCategories = {
  wedding: {
    name: 'Wedding Loans',
    subcategories: ['Valima', 'Furniture', 'Valima Food', 'Jahez'],
    maxAmount: 500000,
    period: 3
  },
  home: {
    name: 'Home Construction',
    subcategories: ['Structure', 'Finishing', 'Loan'],
    maxAmount: 1000000,
    period: 5
  },
  business: {
    name: 'Business Startup',
    subcategories: ['Buy Stall', 'Advance Rent for Shop', 'Shop Assets', 'Shop Machinery'],
    maxAmount: 1000000,
    period: 5
  },
  education: {
    name: 'Education Loans',
    subcategories: ['University Fees', 'Child Fees Loan'],
    maxAmount: 0,
    period: 4
  }
};
const formSchema = yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  cnic: yup.string().required("CNIC is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  loanCategory: yup.string().required("Loan category is required"),
  loanSubCategory: yup.string().required("Loan subcategory is required"),
  loanAmount: yup.number().required("Loan amount is required"),
  initalDeposite: yup.number().min(0, "Deposit can't be negative"),
  loanPeriod: yup.number().positive("Period must be positive").required("Loan period is required"),
  monthlyIncome: yup.number().positive("Income must be positive").required("Monthly income is required"),
  employmentStatus: yup.string().required("Employment status is required"),
  purposeOfLoan: yup.string().required("Purpose is required"),
  guarantor1FullName: yup.string().required("Guarantor 1 name is required"),
  guarantor1Email: yup.string().email("Invalid email").required("Guarantor 1 email is required"),
  guarantor1Cnic: yup.string().required("Guarantor 1 CNIC is required"),
  guarantor1Location: yup.string().required("Guarantor 1 location is required"),
  guarantor2FullName: yup.string().required("Guarantor 2 name is required"),
  guarantor2Email: yup.string().email("Invalid email").required("Guarantor 2 email is required"),
  guarantor2Cnic: yup.string().required("Guarantor 2 CNIC is required"),
  guarantor2Location: yup.string().required("Guarantor 2 location is required"),
});

const LoanApply = () => {
  const theme = useTheme();
  const  navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const { control, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      cnic: '',
      phoneNumber: '',
      address: '',
      city: '',
      loanCategory: '',
      loanSubCategory: '',
      loanAmount: '',
      initalDeposite: '',
      loanPeriod: '',
      monthlyIncome: '',
      employmentStatus: '',
      purposeOfLoan: '',
      guarantor1FullName: '',
      guarantor1Email: '',
      guarantor1Cnic: '',
      guarantor1Location: '',
      guarantor2FullName: '',
      guarantor2Email: '',
      guarantor2Cnic: '',
      guarantor2Location: '',
    }
  });
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])

  const modal = () => {
    setOpen(true)

  }

  const closemodal = () => {
    setOpen(false)
    navigate("/", {replace:true})

  }
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/apply-loan`, data, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`
        }
      })
      setData(response.data.data)
      console.log(response.data.data)
      modal()
      reset();
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default,
      py: 8
    }}>
      <Box sx={{
        maxWidth: 'lg',
        mx: 'auto',
        px: 4
      }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{
            fontWeight: 'bold',
            mb: 2,
            color: theme.palette.text.primary
          }}>
            Qarze Hasana Loan Application
          </Typography>
          <Typography variant="subtitle1" sx={{
            color: theme.palette.text.secondary
          }}>
            Apply for interest-free Islamic financing. Fill out the form below to get started.
          </Typography>
        </Box>

        <Card sx={{
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          mb: 4
        }}>
          <CardHeader
            title={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FileTextIcon color="primary" />
                <Typography variant="h5" component="div">
                  Loan Application Form
                </Typography>
              </Box>
            }
            subheader="Please provide accurate information. All fields marked with * are required."
          />
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Personal Information */}
              <Box sx={{ mb: 4 }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  mb: 3,
                  pb: 1,
                  borderBottom: `1px solid ${theme.palette.divider}`
                }}>
                  <UserIcon color="primary" />
                  <Typography variant="h6">Personal Information</Typography>
                </Box>

                <Box sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 3
                }}>
                  <Controller
                    name="fullName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Full Name *"
                        fullWidth
                        error={!!errors.fullName}
                        helperText={errors.fullName?.message}
                      />
                    )}
                  />

                  <Controller
                    name="cnic"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="CNIC *"
                        fullWidth
                        placeholder="12345-1234567-1"
                        error={!!errors.cnic}
                        helperText={errors.cnic?.message}
                      />
                    )}
                  />

                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Email Address *"
                        fullWidth
                        type="email"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    )}
                  />

                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Phone Number *"
                        fullWidth
                        error={!!errors.phoneNumber}
                        helperText={errors.phoneNumber?.message}
                      />
                    )}
                  />

                  <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Address *"
                        fullWidth
                        multiline
                        rows={2}
                        error={!!errors.address}
                        helperText={errors.address?.message}
                        sx={{ gridColumn: { xs: '1', md: '1 / span 2' } }}
                      />
                    )}
                  />

                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="City *"
                        fullWidth
                        error={!!errors.city}
                        helperText={errors.city?.message}
                      />
                    )}
                  />
                </Box>
              </Box>
              {/* Loan Information */}
              <Box sx={{ mb: 4 }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  mb: 3,
                  pb: 1,
                  borderBottom: `1px solid ${theme.palette.divider}`
                }}>
                  <CreditCardIcon color="primary" />
                  <Typography variant="h6">Loan Information</Typography>
                </Box>

                <Box sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 3
                }}>
                  <Controller
                    name="loanCategory"
                    control={control}
                    render={({ field }) => (
                      <FormControl fullWidth error={!!errors.loanCategory}>
                        <InputLabel>Category *</InputLabel>
                        <Select
                          {...field}
                          label="Category *"
                          onChange={(e) => {
                            field.onChange(e);
                            setSelectedCategory(e.target.value);
                          }}
                        >
                          {Object.keys(loanCategories).map((category) => (
                            <MenuItem key={category} value={category}>
                              {loanCategories[category].name}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.loanCategory && (
                          <Typography variant="caption" color="error">
                            {errors.loanCategory.message}
                          </Typography>
                        )}
                      </FormControl>
                    )}
                  />

                  <Controller
                    name="loanSubCategory"
                    control={control}
                    render={({ field }) => (
                      <FormControl fullWidth error={!!errors.loanSubCategory}>
                        <InputLabel>Subcategory *</InputLabel>
                        <Select
                          {...field}
                          label="Subcategory *"
                          disabled={!selectedCategory}
                        >
                          {selectedCategory && loanCategories[selectedCategory]?.subcategories.map((sub) => (
                            <MenuItem key={sub} value={sub}>
                              {sub}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.loanSubCategory && (
                          <Typography variant="caption" color="error">
                            {errors.loanSubCategory.message}
                          </Typography>
                        )}
                      </FormControl>
                    )}
                  />

                  <Controller
                    name="loanAmount"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Loan Amount (PKR) *"
                        fullWidth
                        type="number"
                        InputProps={{
                          startAdornment: <InputAdornment position="start">PKR</InputAdornment>,
                          inputProps: {
                            min: 0,
                            max: selectedCategory ? loanCategories[selectedCategory]?.maxAmount : undefined
                          }
                        }}
                        error={!!errors.loanAmount}
                        helperText={errors.loanAmount?.message}
                      />
                    )}
                  />

                  <Controller
                    name="initalDeposite"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Initial Deposit (PKR)"
                        fullWidth
                        type="number"
                        InputProps={{
                          startAdornment: <InputAdornment position="start">PKR</InputAdornment>,
                          inputProps: { min: 0 }
                        }}
                        error={!!errors.initalDeposite}
                        helperText={errors.initalDeposite?.message}
                      />
                    )}
                  />

                  <Controller
                    name="loanPeriod"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Loan Period (Years) *"
                        fullWidth
                        type="number"
                        InputProps={{
                          inputProps: { min: 1 }
                        }}
                        error={!!errors.loanPeriod}
                        helperText={errors.loanPeriod?.message}
                      />
                    )}
                  />

                  <Controller
                    name="monthlyIncome"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Monthly Income (PKR) *"
                        fullWidth
                        type="number"
                        InputProps={{
                          startAdornment: <InputAdornment position="start">PKR</InputAdornment>,
                          inputProps: { min: 0 }
                        }}
                        error={!!errors.monthlyIncome}
                        helperText={errors.monthlyIncome?.message}
                      />
                    )}
                  />

                  <Controller
                    name="employmentStatus"
                    control={control}
                    render={({ field }) => (
                      <FormControl fullWidth error={!!errors.employmentStatus}>
                        <InputLabel>Employment Status *</InputLabel>
                        <Select {...field} label="Employment Status *">
                          <MenuItem value="employed">Employed</MenuItem>
                          <MenuItem value="self-employed">Self Employed</MenuItem>
                          <MenuItem value="business">Business Owner</MenuItem>
                          <MenuItem value="retired">Retired</MenuItem>
                          <MenuItem value="unemployed">Unemployed</MenuItem>
                        </Select>
                        {errors.employmentStatus && (
                          <Typography variant="caption" color="error">
                            {errors.employmentStatus.message}
                          </Typography>
                        )}
                      </FormControl>
                    )}
                  />

                  <Controller
                    name="purposeOfLoan"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Purpose of Loan *"
                        fullWidth
                        multiline
                        rows={3}
                        error={!!errors.purposeOfLoan}
                        helperText={errors.purposeOfLoan?.message}
                        sx={{ gridColumn: { xs: '1', md: '1 / span 2' } }}
                      />
                    )}
                  />
                </Box>
              </Box>

              {/* Guarantors Information */}
              <Box sx={{ mb: 4 }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  mb: 3,
                  pb: 1,
                  borderBottom: `1px solid ${theme.palette.divider}`
                }}>
                  <UsersIcon color="primary" />
                  <Typography variant="h6">Guarantor Information</Typography>
                </Box>

                {/* Guarantor 1 */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="subtitle1" sx={{ mb: 2 }}>Guarantor 1</Typography>
                  <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: 3
                  }}>
                    <Controller
                      name="guarantor1FullName"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Name *"
                          fullWidth
                          error={!!errors.guarantor1FullName}
                          helperText={errors.guarantor1FullName?.message}
                        />
                      )}
                    />

                    <Controller
                      name="guarantor1Email"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Email *"
                          fullWidth
                          type="email"
                          error={!!errors.guarantor1Email}
                          helperText={errors.guarantor1Email?.message}
                        />
                      )}
                    />

                    <Controller
                      name="guarantor1Cnic"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="CNIC *"
                          fullWidth
                          error={!!errors.guarantor1Cnic}
                          helperText={errors.guarantor1Cnic?.message}
                        />
                      )}
                    />

                    <Controller
                      name="guarantor1Location"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Location *"
                          fullWidth
                          error={!!errors.guarantor1Location}
                          helperText={errors.guarantor1Location?.message}
                        />
                      )}
                    />
                  </Box>
                </Box>

                {/* Guarantor 2 */}
                <Box>
                  <Typography variant="subtitle1" sx={{ mb: 2 }}>Guarantor 2</Typography>
                  <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: 3
                  }}>
                    <Controller
                      name="guarantor2FullName"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Name *"
                          fullWidth
                          error={!!errors.guarantor2FullName}
                          helperText={errors.guarantor2FullName?.message}
                        />
                      )}
                    />

                    <Controller
                      name="guarantor2Email"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Email *"
                          fullWidth
                          type="email"
                          error={!!errors.guarantor2Email}
                          helperText={errors.guarantor2Email?.message}
                        />
                      )}
                    />

                    <Controller
                      name="guarantor2Cnic"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="CNIC *"
                          fullWidth
                          error={!!errors.guarantor2Cnic}
                          helperText={errors.guarantor2Cnic?.message}
                        />
                      )}
                    />

                    <Controller
                      name="guarantor2Location"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Location *"
                          fullWidth
                          error={!!errors.guarantor2Location}
                          helperText={errors.guarantor2Location?.message}
                        />
                      )}
                    />
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{ minWidth: 200 }}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
       
      </Box>


      <LoanDetailsModal open={open} data={data} onClose={closemodal} />
    </Box>
  );
};

export default LoanApply;