import React from 'react'
import TopBar from './components/topbar/TopBar'
import Homepage from './pages/homepage/Homepage'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const currentUser = true
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/post" element={<Homepage />} />
        <Route path="/register" element={currentUser ? <Homepage /> : <Register />} />
        <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
      </Routes>


    </Router>
  )
}

export default App
