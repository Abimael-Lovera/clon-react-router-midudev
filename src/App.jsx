import { useState } from 'react'
import './App.css'

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Este es una página de ejemplo para crea un React Router desde cero</p>
      <a href='/about'>Ir a Sobre nosotros</a>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <img src='https://randomuser.me/api/portraits/men/11.jpg' alt='' />
      <p>Hola! Me llamo Abimael Lovera y estoy creando un clon de React Router.</p>
      <a href='/'>Ira a la Home </a>
    </>
  )
}

function App () {
  const [current, setCurrent] = useState(window.location.pathname)

  return (
    <main>
      {current === '/' && <HomePage />}
      {current === '/about' && <AboutPage />}
    </main>
  )
}

export default App
