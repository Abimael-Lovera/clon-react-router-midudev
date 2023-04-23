import { useState, useEffect } from 'react'
import { EVENTS } from './conts'
import { match } from 'path-to-regexp'

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true

    // hemos usado path-to-regexp
    // para poder detectar rutas dinamicas como por ejemplo
    // search/:query <- :query es una ruta dinamica
    const matchedUrl = match(path, { decode: decodeURIComponent })
    const matched = matchedUrl(currentPath)
    if (!matched) return false

    // guardarlos parametros de la Url que eran dinamicos
    // y que hemos extraido con path-to-regexp
    // por ejemplo, si la ruta es /search/:query
    // y la Url /search/javascript
    // matched.params.query === javascript
    routeParams = matched.params
    return true
  }
  )?.Component
  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}
