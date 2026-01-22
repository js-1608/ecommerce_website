import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import UserLayout from './components/Layout/UserLayout'
import {Toaster} from "sonner"
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Collections from './pages/Collections'
function App() {


  return (
    <BrowserRouter>
    <Toaster position="top-right"/>
      <Routes>
        {/* user Route */}
        <Route path='/' element={<UserLayout />}>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='collection/:collection' element={<Collections/>}/>
        </Route>

        {/* Admin Route */}
        {/* <Route path='/admin' element={Home} /> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App
