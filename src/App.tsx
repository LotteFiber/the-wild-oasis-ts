import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import CabinPage from '@pages/CabinPage'
import HomePage from '@pages/HomePage'
import GlobalStyles from '@styles/GlobalStyles'
import AppLayout from '@ui/AppLayout'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="cabin" />} />
            <Route path="cabin" element={<CabinPage />} />
            <Route path="home" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
