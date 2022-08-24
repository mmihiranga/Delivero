import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route >
          <Route index element={<Home />} />
          <Route  path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
