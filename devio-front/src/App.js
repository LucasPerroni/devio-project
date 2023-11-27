import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/Home"
import CozinhaPage from "./pages/Cozinha"
import RetiradaPage from "./pages/Retirada"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cozinha" element={<CozinhaPage />} />
        <Route path="/retirada" element={<RetiradaPage />} />
        <Route path="*" element={<h1>This page doesn't exist...</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
