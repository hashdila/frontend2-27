import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './home';
import UserLogin from './users/userLogin'
import UserRegistration from './users/userRegistration'
import Dashboard from './users/dashboard';
import UserAccount from './component/userAccount';
import CreateCr from './component/createCr'
import Home1 from './component/home1'
import ViewCr from './component/viewCr'



function App() {


  return (

    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="/UserRegistration" element={<UserRegistration />} />

          <Route path="/Dashboard" element={<Dashboard />}>
            <Route index element={<Home1 />} />   
            <Route path="UserAccount" element={<UserAccount />} />
            <Route path="ViewCr" element={<ViewCr />} />
          </Route>

        </Routes>
      </Router>

    </div>
  )
}

export default App
