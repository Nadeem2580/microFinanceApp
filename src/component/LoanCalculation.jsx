import React, { useState } from 'react';
import CalculateIcon from '@mui/icons-material/Calculate';
import {
    Box,
    Typography,
    TextField,
    MenuItem,
    Button,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Container
} from '@mui/material';
import { AttachMoney as DollarSign, AccessTime as Clock } from '@mui/icons-material';
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    category: yup.string().required("all field are required"),
    Subcategory: yup.string().required("all field are required"),
    loanAmount: yup.number().positive("number is not valid").integer().required("all field are required"),
    initialDeposite: yup.number().positive("number is not valid").integer().required("all field are required"),
    loanPeriod: yup.number().positive("number is not valid").integer().required("all field are required"),
})


const subcategoryOptions = {
    Home: ["Structure", "Finishing", "Loan"],
    Education: ["School", "College", "University"],
    Wedding: ["Valima", "Furniture", "Food"],
    Business: ["Startup", "Inventory", "Marketing"],
};


const LoanCalculation = () => {
    const [loanData, setLoanData] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [showResultCard, setShowResultCard] = useState(false);
    const [calculatedLoan, setCalculatedLoan] = useState(null);


    const { control, handleSubmit } = useForm({

        defaultValues: {
            category: "",
            Subcategory: "",
            loanAmount: "",
            initialDeposite: "",
            loanPeriod: "",
        },
        resolver: yupResolver(schema)
    })


    const onSubmit = (obj) => {
        const remaining = obj.loanAmount - obj.initialDeposite;
        const months = obj.loanPeriod * 12;
        const balance = remaining / months;


        setCalculatedLoan({
            category: obj.category,
            Subcategory: obj.Subcategory,
            loanAmount: obj.loanAmount,
            initialDeposite: obj.initialDeposite,
            loanPeriod: obj.loanPeriod,
            Remaining: remaining,
            Balance: balance.toFixed(),
            Months: months
        });

        setShowResultCard(true);
        console.log(calculatedLoan, "calculatedLoan")
    };








    return (
        <Container id="loan_calculation" maxWidth="lg" sx={{ py: 4, backgroundColor: "#13161d", minHeight: '100vh' }} >
            {/* Header Section */}
            <Box sx={{ mb: 6, textAlign: 'center' }
            }>
                <Typography variant="h3" sx={{ mb: 2, color: 'white' }}>
                    <CalculateIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Loan Calculator
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                    Calculate your Qarze Hasana loan installments with ease
                </Typography>
            </Box >

            {/* Cards Grid */}
            < Grid container spacing={4} >
                {/* Form Card */}
                < Grid size={{ xs: 12, md: 6 }}>
                    <Card sx={{
                        backgroundColor: '#14171f',
                        border: '1px solid #1e232f',
                        borderRadius: '12px',
                        color: 'white'
                    }}>
                        <CardContent sx={{ p: 4 }}>
                            <Typography variant="h4" sx={{ mb: 3, color: 'white', fontWeight: 600 }}>
                                Loan Details
                            </Typography>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Loan Category */}
                                <Typography variant="subtitle1" sx={{ color: 'white', marginBottom: '8px' }}>
                                    Loan Category
                                </Typography>
                                <Controller
                                    name="category"
                                    control={control}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            select
                                            fullWidth
                                            size="small"
                                            {...field}
                                            value={field.value}
                                            onChange={(e) => {
                                                field.onChange(e); // update form
                                                setSelectedCategory(e.target.value); // update subcategory
                                            }}
                                            error={!!error}
                                            helperText={error?.message}
                                            sx={{
                                                marginBottom: '20px',
                                                '& .MuiOutlinedInput-root': {
                                                    backgroundColor: '#101319',
                                                    color: 'white',
                                                    borderRadius: '15px',
                                                    '& fieldset': {
                                                        borderColor: '#565d6d',
                                                        borderRadius: '15px',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: '#21c45d',
                                                    },
                                                },
                                                '& .MuiInputLabel-root': {
                                                    color: '#565d6d',
                                                },
                                                '& .MuiInputLabel-root.Mui-focused': {
                                                    color: '#21c45d',
                                                },
                                            }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            SelectProps={{
                                                displayEmpty: true,
                                                renderValue: field.value !== "" ? undefined : () => "Select loan category",
                                            }}
                                        >
                                            <MenuItem value="">Select loan category</MenuItem>
                                            <MenuItem value="Home">Home Construction</MenuItem>
                                            <MenuItem value="Education">Education Loans</MenuItem>
                                            <MenuItem value="Wedding">Wedding Loans</MenuItem>
                                            <MenuItem value="Business">Business Start up</MenuItem>
                                        </TextField>
                                    )}
                                />

                                {/* Sub categroy */}
                                {selectedCategory && (
                                    <>
                                        <Typography variant="subtitle1" sx={{ color: 'white', marginBottom: '8px' }}>
                                            Sub Category
                                        </Typography>
                                        <Controller
                                            name="Subcategory"
                                            control={control}
                                            render={({ field, fieldState: { error } }) => (
                                                <TextField
                                                    select
                                                    fullWidth
                                                    size="small"
                                                    {...field}
                                                    error={!!error}
                                                    helperText={error?.message}

                                                    sx={{
                                                        marginBottom: '20px',
                                                        '& .MuiOutlinedInput-root': {
                                                            backgroundColor: '#101319',
                                                            color: 'white',
                                                            borderRadius: '15px',
                                                            '& fieldset': {
                                                                borderColor: '#565d6d',
                                                                borderRadius: '15px',
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: '#21c45d',
                                                            },
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            color: '#565d6d',
                                                        },
                                                        '& .MuiInputLabel-root.Mui-focused': {
                                                            color: '#21c45d',
                                                        },
                                                    }}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    SelectProps={{
                                                        displayEmpty: true,
                                                        renderValue: field.value !== "" ? undefined : () => "Select loan category",
                                                    }}
                                                >
                                                    <MenuItem value="">Select subcategory</MenuItem>
                                                    {(subcategoryOptions[selectedCategory] || []).map((item, index) => (
                                                        <MenuItem key={index} value={item}>
                                                            {item}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            )}
                                        />
                                    </>

                                )}


                                {/* Loan Amount */}
                                <Typography variant="subtitle1" sx={{ color: 'white', marginBottom: '8px' }}>
                                    Loan Amount
                                </Typography>
                                <Controller
                                    name='loanAmount'
                                    control={control}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            fullWidth
                                            type="number"
                                            name="amount"
                                            value={loanData.amount}
                                            placeholder="Enter loan amount"
                                            size="small"
                                            error={error}
                                            helperText={error ? error.message : (selectedCategory ? "max 1000000" : "")}
                                            {...field}
                                            sx={{
                                                marginBottom: '20px',
                                                '& .MuiOutlinedInput-root': {
                                                    backgroundColor: '#101319',
                                                    color: 'white',
                                                    borderRadius: '15px',
                                                    '& fieldset': {
                                                        borderColor: '#565d6d',
                                                        borderRadius: '15px',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: '#21c45d',
                                                    },
                                                },
                                            }}
                                        />
                                    )}

                                />


                                {/* Initial Deposit */}
                                <Typography variant="subtitle1" sx={{ color: 'white', marginBottom: '8px' }}>
                                    Initial Deposit
                                </Typography>
                                <Controller
                                    name='initialDeposite'
                                    control={control}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            fullWidth
                                            type="number"
                                            name="deposit"
                                            value={loanData.deposit}
                                            placeholder="Enter initial deposit"
                                            size="small"
                                            error={error}
                                            helperText={error ? error.message : ''}
                                            {...field}
                                            sx={{
                                                marginBottom: '20px',
                                                '& .MuiOutlinedInput-root': {
                                                    backgroundColor: '#101319',
                                                    color: 'white',
                                                    borderRadius: '15px',
                                                    '& fieldset': {
                                                        borderColor: '#565d6d',
                                                        borderRadius: '15px',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: '#21c45d',
                                                    },
                                                },
                                            }}
                                        />
                                    )}
                                />


                                {/* Loan Period */}
                                <Typography variant="subtitle1" sx={{ color: 'white', marginBottom: '8px' }}>
                                    Loan Period (Years)
                                </Typography>

                                <Controller
                                    name="loanPeriod"
                                    control={control}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            select
                                            fullWidth
                                            size="small"
                                            {...field}
                                            value={field.value}
                                            onChange={(e) => {
                                                field.onChange(e);
                                                setSelectedCategory(e.target.value);
                                            }}
                                            error={!!error}
                                            helperText={error?.message}
                                            sx={{
                                                marginBottom: '20px',
                                                '& .MuiOutlinedInput-root': {
                                                    backgroundColor: '#101319',
                                                    color: 'white',
                                                    borderRadius: '15px',
                                                    '& fieldset': {
                                                        borderColor: '#565d6d',
                                                        borderRadius: '15px',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: '#21c45d',
                                                    },
                                                },
                                                '& .MuiInputLabel-root': {
                                                    color: '#565d6d',
                                                },
                                                '& .MuiInputLabel-root.Mui-focused': {
                                                    color: '#21c45d',
                                                },
                                            }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            SelectProps={{
                                                displayEmpty: true,
                                                renderValue: field.value !== "" ? undefined : () => "Select Loan period",
                                            }}
                                        >
                                            <MenuItem value=""> Select Loan period</MenuItem>
                                            <MenuItem value="1">1 Year</MenuItem>
                                            <MenuItem value="2">2 Years</MenuItem>
                                            <MenuItem value="3">3 Years</MenuItem>
                                            <MenuItem value="4">4 Years</MenuItem>
                                        </TextField>
                                    )}
                                />


                                {/* Calculate Button */}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#21c45d',
                                        color: 'white',
                                        padding: '12px',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        borderRadius: '15px',
                                        '&:hover': {
                                            backgroundColor: '#1a9f4d',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    Calculate Loan
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid >

                {/* Results Card */}
                {
                    showResultCard && <Grid size={{ xs: 12, md: 6 }}>
                        <Card sx={{
                            background: 'linear-gradient(to bottom, #1a1f2b, #14171f)',
                            border: '1px solid #2d3748',
                            borderRadius: '12px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                            color: 'white'
                        }}>
                            <CardHeader
                                title={
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <DollarSign sx={{ color: '#21c45d', width: 24, height: 24 }} />
                                        <Typography variant="h6" component="span">Breakdown</Typography>
                                    </Box>
                                }
                                sx={{ borderBottom: '1px solid #2d3748' }}
                            />

                            <CardContent sx={{ py: 2 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    {/* Category */}
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        p: 2,
                                        backgroundColor: '#1a1f2b',
                                        borderRadius: '8px'
                                    }}>
                                        <Typography variant="body2" color="text.secondary">Category</Typography>
                                        <Typography variant="body1" fontWeight="500">{calculatedLoan.category}</Typography>
                                    </Box>

                                    {/* Subcategory */}
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        p: 2,
                                        backgroundColor: '#1a1f2b',
                                        borderRadius: '8px'
                                    }}>
                                        <Typography variant="body2" color="text.secondary">Subcategory</Typography>
                                        <Typography variant="body1" fontWeight="500">{calculatedLoan.Subcategory}</Typography>
                                    </Box>

                                    {/* Total Loan Amount */}
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        p: 2,
                                        backgroundColor: '#1a1f2b',
                                        borderRadius: '8px'
                                    }}>
                                        <Typography variant="body2" color="text.secondary">Total Loan Amount</Typography>
                                        <Typography variant="body1" fontWeight="700" color="primary">
                                            {calculatedLoan.loanAmount}
                                        </Typography>
                                    </Box>

                                    {/* Initial Deposit */}
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        p: 2,
                                        backgroundColor: '#1a1f2b',
                                        borderRadius: '8px'
                                    }}>
                                        <Typography variant="body2" color="text.secondary">Initial Deposit</Typography>
                                        <Typography variant="body1" fontWeight="500">
                                            {calculatedLoan.initialDeposite}
                                        </Typography>
                                    </Box>

                                    {/* Remaining Amount */}
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        p: 2,
                                        backgroundColor: '#1a1f2b',
                                        borderRadius: '8px'
                                    }}>
                                        <Typography variant="body2" color="text.secondary">Remaining Amount</Typography>
                                        <Typography variant="body1" fontWeight="500">
                                            {calculatedLoan.Remaining}
                                        </Typography>
                                    </Box>

                                    {/* Monthly Installment (Highlighted) */}
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        p: 1,
                                        backgroundColor: 'rgba(33, 196, 93, 0.1)',
                                        border: '1px solid rgba(33, 196, 93, 0.2)',
                                        borderRadius: '8px'
                                    }}>
                                        <Typography variant="body1" fontWeight="500">Monthly Installment</Typography>
                                        <Typography variant="h6" fontWeight="700" color="#21c45d">
                                            {calculatedLoan.Balance}
                                        </Typography>
                                    </Box>

                                    {/* Total Period */}
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        p: 2,
                                        backgroundColor: '#1a1f2b',
                                        borderRadius: '8px'
                                    }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Clock sx={{ width: 16, height: 16, color: 'text.secondary' }} />
                                            <Typography variant="body2" color="text.secondary">Total Period</Typography>
                                        </Box>
                                        <Typography variant="body1" fontWeight="500">
                                            {calculatedLoan.Months} months
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Proceed Button */}
                                <Button
                                    component="a"
                                    href='/applying_loan'
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        mt: 3,
                                        py: 2,
                                        backgroundColor: '#21c45d',
                                        color: 'white',
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        borderRadius: '8px',
                                        '&:hover': {
                                            backgroundColor: '#1a9f4d',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    Proceed with Application
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                }
            </Grid >
        </Container >
    );
};

export default LoanCalculation;