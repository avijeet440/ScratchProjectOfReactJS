import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
      </Routes>
    </div>
  )
}
export default App;
