import { Suspense, lazy } from 'react'

import './App.css'
import SearchPage from './pages/Search' // import estatico se carga siempre

import { Router } from './Router'
import { Page404 } from './pages/404'
import { Route } from './Route'

const HomePage = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/About')) // import dinamico com lazy loading

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading... </div>}>{/* utilizado para poder renderizar el import dinamico de lazy */}
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
