import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home/Home'
import LoginPage from './pages/Auth/LoginPage'
import SignUpPage from './pages/Auth/SignUpPage'
import NotFound404 from './pages/404 page/NotFound'
import LoanApply from './pages/ApplyLoan/LoanApply'
import { Bounce, ToastContainer } from 'react-toastify'
import { useAppContext } from './context/userContext'
import Cookies from "js-cookie"
function App() {
  const {navigate}=useAppContext()
  const token = Cookies.get("token")
  console.log(token, "tokenaa")
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign_up' element={<SignUpPage />} />
          <Route path='/applying_loan' element={token ? <LoanApply /> : <Navigate to="/login" />} />
        <Route path='*' element={<NotFound404 />} />


      </Routes>


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default App
