import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material'
import theme from './theme.js'
import { AppProvider } from './context/userContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppProvider>

  <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider> 
  </AppProvider>
  </BrowserRouter>
)
