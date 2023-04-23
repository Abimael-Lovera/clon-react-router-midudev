import { Link } from '../Link.jsx'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Este es una página de ejemplo para crea un React Router desde cero</p>
      <Link to='/about'>Ir a Sobre nosotros</Link>
    </>
  )
}
