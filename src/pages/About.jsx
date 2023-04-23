import { Link } from '../Link.jsx'

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <img src='https://randomuser.me/api/portraits/men/11.jpg' alt='' />
      <p>Hola! Me llamo Abimael Lovera y estoy creando un clon de React Router.</p>
      <Link to='/'>Ir a la Home </Link>
    </>
  )
}
