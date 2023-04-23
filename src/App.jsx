import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './conts'

function navigate (href) {
  window.history.pushState({}, '', href)
  // crear un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}
function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Este es una página de ejemplo para crea un React Router desde cero</p>
      <button onClick={() => { navigate('/about') }}>Ir a Sobre nosotros</button>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <img src='https://randomuser.me/api/portraits/men/11.jpg' alt='' />
      <p>Hola! Me llamo Abimael Lovera y estoy creando un clon de React Router.</p>
      <button onClick={() => { navigate('/') }}>Ira a la Home </button>
    </>
  )
}

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
