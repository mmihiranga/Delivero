import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import Protected from './Protected';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user)
  const [userDetails, setUserDetails] = useState()

  useEffect(() => {
    if (user.value.length > 0) {
      console.log("user.value.", user.value)
      setUserDetails(user.value[0])
    }
  }, [user]);


  return (
    <>
      <NavBar />
      <Routes>
        <Route >
          <Route path='/' index
            element={
              <Protected isLoggedIn={userDetails}>
                <Home />
              </Protected>
            }
          />
          {/* <Route path="/" index element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
