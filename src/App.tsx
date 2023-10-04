import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import './App.css';


function App () {
    return (
      //create a saved state that can be updated by the user
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    )
  }

export default App;
