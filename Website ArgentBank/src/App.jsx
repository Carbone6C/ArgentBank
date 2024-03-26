import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard'
import Error from './pages/Error';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import './App.css'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="*" element={<Error />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
