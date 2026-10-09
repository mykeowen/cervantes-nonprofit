import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import useTheme from './hooks/useTheme.js'

export default function App() {
  const [theme, setTheme] = useTheme()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title =
      pathname === '/about'
        ? 'About Myke Owen Cervantes – Agrovia Foundation'
        : 'Agrovia Foundation – Helping Nueva Ecija farmers thrive'
  }, [pathname])

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
