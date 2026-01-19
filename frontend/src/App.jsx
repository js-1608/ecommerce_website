import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import UserLayout from './components/Layout/UserLayout'
import {Toaster} from "sonner"
import Login from './pages/Login'
function App() {


  return (
    <BrowserRouter>
    <Toaster position="top-right"/>
      <Routes>
        {/* user Route */}
        <Route path='/' element={<UserLayout />}>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
        </Route>

        {/* Admin Route */}
        {/* <Route path='/admin' element={Home} /> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App
