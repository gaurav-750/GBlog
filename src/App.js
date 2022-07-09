import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CreateBlog from './Components/CreateBlog';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <div className="content">
          <Routes>

            <Route path="/" element={<Home/>} >
            </Route>

            <Route path="/create" element={<CreateBlog/>} >
            </Route>
            
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
