import React from 'react';
import {
  Box,
  Button,
  Typography,
  Modal,
  Divider,
  IconButton,
  Grid
} from '@mui/material';
import {
  Close as CloseIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Home as HomeIcon,
  Work as WorkIcon,
  Description as DescriptionIcon,
  People as PeopleIcon,
  AttachMoney as MoneyIcon,
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
  CreditCard as CreditCardIcon
} from '@mui/icons-material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', md: '80%' },
  maxWidth: '900px',
  maxHeight: '90vh',
  bgcolor: '#1a1f2b',
  background: 'linear-gradient(to bottom, #1a1f2b, #14171f)',
  border: '1px solid #2d3748',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
  p: 4,
  overflowY: 'auto',
  color: 'white'
};

const DetailItem = ({ label, value, icon: Icon }) => (
  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
    <Icon sx={{ color: '#21c45d', fontSize: '1.2rem' }} />
    <Box>
      <Typography variant="body2" color="text.secondary">{label}</Typography>
      <Typography variant="body1" sx={{ wordBreak: 'break-word' }}>
        {value || 'N/A'}
      </Typography>
    </Box>
  </Box>
);

const formatCurrency = (amount) => {
  return `Rs. ${parseInt(amount || 0).toLocaleString()}`;
};

const LoanDetailsModal = ({ open, data, onClose }) => {
  if (!data) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="loan-details-modal"
      aria-describedby="loan-application-details"
    >
      <Box sx={modalStyle}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
            Loan Application Details
          </Typography>
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: '#2d3748', mb: 3 }} />

        {/* Content */}
        <Grid container spacing={3}>
          {/* Personal Information */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#21c45d', display: 'flex', alignItems: 'center', gap: 1 }}>
              <PersonIcon /> Personal Information
            </Typography>
            
            <DetailItem label="Full Name" value={data.fullName} icon={PersonIcon} />
            <DetailItem label="Email" value={data.email} icon={EmailIcon} />
            <DetailItem label="CNIC" value={data.cnic} icon={CreditCardIcon} />
            <DetailItem label="Phone Number" value={data.phoneNumber} icon={PhoneIcon} />
            <DetailItem label="Address" value={data.address} icon={LocationIcon} />
            <DetailItem label="City" value={data.city} icon={LocationIcon} />
            <DetailItem label="Employment Status" value={data.employmentStatus} icon={WorkIcon} />
            <DetailItem label="Monthly Income" value={formatCurrency(data.monthlyIncome)} icon={MoneyIcon} />
          </Grid>

          {/* Loan Information */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#21c45d', display: 'flex', alignItems: 'center', gap: 1 }}>
              <HomeIcon /> Loan Details
            </Typography>
            
            <DetailItem label="Loan Category" value={data.loanCategory} icon={HomeIcon} />
            <DetailItem label="Loan Subcategory" value={data.loanSubCategory} icon={HomeIcon} />
            <DetailItem label="Loan Amount" value={formatCurrency(data.loanAmount)} icon={MoneyIcon} />
            <DetailItem label="Initial Deposit" value={formatCurrency(data.initalDeposite)} icon={MoneyIcon} />
            <DetailItem label="Loan Period" value={`${data.loanPeriod} months`} icon={CalendarIcon} />
            <DetailItem label="Purpose of Loan" value={data.purposeOfLoan} icon={DescriptionIcon} />
          </Grid>

          {/* Guarantor 1 */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#21c45d', display: 'flex', alignItems: 'center', gap: 1 }}>
              <PeopleIcon /> Guarantor 1
            </Typography>
            
            <DetailItem label="Full Name" value={data.guarantor1FullName} icon={PersonIcon} />
            <DetailItem label="Email" value={data.guarantor1Email} icon={EmailIcon} />
            <DetailItem label="CNIC" value={data.guarantor1Cnic} icon={CreditCardIcon} />
            <DetailItem label="Location" value={data.guarantor1Location} icon={LocationIcon} />
          </Grid>

          {/* Guarantor 2 */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#21c45d', display: 'flex', alignItems: 'center', gap: 1 }}>
              <PeopleIcon /> Guarantor 2
            </Typography>
            
            <DetailItem label="Full Name" value={data.guarantor2FullName} icon={PersonIcon} />
            <DetailItem label="Email" value={data.guarantor2Email} icon={EmailIcon} />
            <DetailItem label="CNIC" value={data.guarantor2Cnic} icon={CreditCardIcon} />
            <DetailItem label="Location" value={data.guarantor2Location} icon={LocationIcon} />
          </Grid>
        </Grid>

        {/* Footer */}
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              backgroundColor: '#21c45d',
              color: 'white',
              fontWeight: 700,
              '&:hover': {
                backgroundColor: '#1a9f4d'
              }
            }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default LoanDetailsModal;