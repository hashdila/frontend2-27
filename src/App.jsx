import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import SideBar from './component/sidebar';
import Home from './home';
import UserLogin from'./users/userLogin'
import UserRegistration from './users/userRegistration'
import Dashboard from './users/dashboard';
import UserAccount from './component/userAccount';
import Crview from './component/viewCr'
import CreateCr from './component/createCr'
import { ToastContainer } from 'react-toastify';



function App() {
  

  return (
    
      <div>
    <Router>
      <ToastContainer/>
          <Routes>
            <Route path="/" element={<Home />} />;
            <Route path="/UserLogin" element= {<UserLogin/>} />
            <Route path="/UserRegistration" element= {<UserRegistration/>}/>
            <Route path="/SideBar" element={<SideBar />}>
              <Route path="UserAccount" element={<UserAccount />} />
              <Route path="CreateCr" element={<CreateCr />} />
              <Route path="Crview" element={<Crview/>}/>

            </Route>
          </Routes>
        </Router>
      </div>    
  )
}

export default App
