import './App.css'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import SearchPage from './pages/Search'

import { Router } from './Router'
import { Page404 } from './pages/404'

const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  )
}

export default App
