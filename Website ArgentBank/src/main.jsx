import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
/* 
import { Provider } from 'react-redux'
import { store } from './redux'
*/
import Home from './pages/Home/home'
import SignIn from './pages/SignIn/signin'
import Dashboard from './pages/Dashboard/dashboard'
/*
import Dashboard from './pages/Dashboard/dashboard'
import Error from './pages/Error/error'
*/
import Footer from './components/Footer/footer'
import './css/main.css'
import Header from './components/Header/header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<Provider store={store} >*/}
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <Footer />
    </Router>
    {/*</Provider>*/}
  </React.StrictMode>
)
