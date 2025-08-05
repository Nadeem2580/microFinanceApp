import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home/Home'
import LoginPage from './pages/Auth/LoginPage'
import SignUpPage from './pages/Auth/SignUpPage'
import NotFound404 from './pages/404 page/NotFound'
import LoanApply from './pages/ApplyLoan/LoanApply'
function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign_up' element={<SignUpPage />} />
        <Route path='/applying_loan' element={<LoanApply />}/>
        <Route path='*' element={<NotFound404 />} />


      </Routes>
    </>
  )
}

export default App
