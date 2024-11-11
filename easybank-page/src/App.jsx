import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Careers from './pages/Careers'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
