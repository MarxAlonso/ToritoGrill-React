import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { NosotrosPage } from './pages/NosotrosPage/NosotrosPage'
import { ServiciosPage } from './pages/ServiciosPage/ServiciosPage'
import { CartaPage } from './pages/CartaPage/CartaPage'
import { TerminosCondicionesPage } from './pages/TerminosCondicionesPage/TerminosCondicionesPage'
import { LocalesPage } from './pages/LocalesPage/LocalesPage'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="nosotros" element={<NosotrosPage />} />
        <Route path="servicios" element={<ServiciosPage />} />
        <Route path="carta" element={<CartaPage />} />
        <Route path="terminos-condiciones" element={<TerminosCondicionesPage />} />
        <Route path="locales" element={<LocalesPage />} />
      </Routes>
    </>
  )
}

export default App
