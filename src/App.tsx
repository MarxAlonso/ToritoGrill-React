import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { NosotrosPage } from './pages/NosotrosPage/NosotrosPage'
import { ServiciosPage } from './pages/ServiciosPage/ServiciosPage'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="nosotros" element={<NosotrosPage />} />
        <Route path="servicios" element={<ServiciosPage />} />
      </Routes>
    </>
  )
}

export default App
