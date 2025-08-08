import Cookies from "js-cookie"
import { Navigate, Route, Routes } from 'react-router-dom'
import { Bounce, ToastContainer } from 'react-toastify'
import './App.css'
import { useAppContext } from './context/userContext'
import NotFound404 from './pages/404 page/NotFound'
import LoanApply from './pages/ApplyLoan/LoanApply'
import LoginPage from './pages/Auth/LoginPage'
import SignUpPage from './pages/Auth/SignUpPage'
import Contact from './pages/contact/Contact'
import HomePage from './pages/Home/Home'
import Navbar from "./component/Navbar"
function App() {
  const token = Cookies.get("token")
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign_up' element={<SignUpPage />} />
        <Route path='/applying_loan' element={token ? <Navbar><LoanApply /></Navbar> : <Navigate to="/login" />} />
        <Route path='/contact' element={<Navbar><Contact /> </Navbar>} />
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
