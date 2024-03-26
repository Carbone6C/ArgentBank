import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
/*
import SignIn from './pages/SignIn/signin'
import Dashboard from './pages/Dashboard/dashboard'
import Error from './pages/Error/error'
*/
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
import './css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="*" element={<Error />} /> */}
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
