import './App.css'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import SearchPage from './pages/Search'

import { Router } from './Router'
import { Page404 } from './pages/404'
import { Route } from './Route'

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </main>
  )
}

export default App
