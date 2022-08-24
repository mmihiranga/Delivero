import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route >
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
