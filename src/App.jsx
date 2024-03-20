import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import { Home } from './Pages/home';
import { About } from './Pages/about';
import { Contact } from './Pages/contact';
import { Project } from './Pages/project';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/project' element={<Project/>} />
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
