import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import {
    CreditCard as CreditCardIcon,
    Description as FileTextIcon,
    Email as MailIcon,
    Place as MapPinIcon,
    Phone as PhoneIcon,
    Person as UserIcon,
    People as UsersIcon
} from '@mui/icons-material';
const Contact = () => {
    return (
        <Box sx={{minHeight:"100vh",display:"flex" , justifyContent:"center" , alignItems:"center",margin:"0 10px"}}>
            <Card sx={{
                border: `1px solid #1d212d`,
                width:"80%"
            }}>
                <CardHeader
                    title={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <MailIcon color="primary" />
                            <Typography variant="h6">Contact</Typography>
                        </Box>
                    }
                />
                <CardContent>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
                        gap: 3,
                        textAlign: 'center'
                    }}>
                        <Box>
                            <PhoneIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                            <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>Phone</Typography>
                            <Typography color="text.secondary">+92 21 111 729 526</Typography>
                        </Box>
                        <Box>
                            <MailIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                            <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>Email</Typography>
                            <Typography color="text.secondary">info@saylani.org</Typography>
                        </Box>
                        <Box>
                            <MapPinIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                            <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>Office</Typography>
                            <Typography color="text.secondary">Saylani House, Karachi</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Contact