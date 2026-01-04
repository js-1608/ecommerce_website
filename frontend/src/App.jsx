import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import UserLayout from './components/Layout/UserLayout'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* user Route */}
        <Route path='/' element={<UserLayout />} />

        {/* Admin Route */}
        <Route path='/admin' element={Home} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
