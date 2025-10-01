import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Chatbot } from './components/shared/Chatbot/Chatbot'
import { Suspense, lazy } from 'react'

// Lazy loading para optimizar el rendimiento
const LazyHomePage = lazy(() => import('./pages/HomePage/HomePage').then(module => ({ default: module.HomePage })))
const LazyNosotrosPage = lazy(() => import('./pages/NosotrosPage/NosotrosPage').then(module => ({ default: module.NosotrosPage })))
const LazyServiciosPage = lazy(() => import('./pages/ServiciosPage/ServiciosPage').then(module => ({ default: module.ServiciosPage })))
const LazyCartaPage = lazy(() => import('./pages/CartaPage/CartaPage').then(module => ({ default: module.CartaPage })))
const LazyTerminosCondicionesPage = lazy(() => import('./pages/TerminosCondicionesPage/TerminosCondicionesPage').then(module => ({ default: module.TerminosCondicionesPage })))
const LazyLocalesPage = lazy(() => import('./pages/LocalesPage/LocalesPage').then(module => ({ default: module.LocalesPage })))
const LazyClientePage = lazy(() => import('./pages/ClientePage/ClientePage').then(module => ({ default: module.ClientePage })))
const LazyPageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound').then(module => ({ default: module.PageNotFound })))

function App() {
  return (
    <>
      <Suspense fallback={<div className="loading">Cargando...</div>}>
        <Routes>
          <Route path="/" element={<LazyHomePage /> } />
          <Route path="nosotros" element={<LazyNosotrosPage />} />
          <Route path="servicios" element={<LazyServiciosPage />} />
          <Route path="carta" element={<LazyCartaPage />} />
          <Route path="terminos-condiciones" element={<LazyTerminosCondicionesPage />} />
          <Route path="locales" element={<LazyLocalesPage />} />
          <Route path="eventos" element={<LazyClientePage />} />
          <Route path="*" element={<LazyPageNotFound />} />
        </Routes>
      </Suspense>
      
      {/* Chatbot disponible en todas las páginas */}
      <Chatbot />
    </>
  )
}

export default App
