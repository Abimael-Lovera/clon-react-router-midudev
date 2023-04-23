import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './conts.js'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

function App () {
  const [current, setCurrent] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrent(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main>
      {current === '/' && <HomePage />}
      {current === '/about' && <AboutPage />}
    </main>
  )
}

export default App
