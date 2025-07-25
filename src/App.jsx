import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ConnectFB from "./components/ConnectFB";
import Inbox from "./components/Inbox";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/connect" element={<ConnectFB />} />
        <Route path="/inbox" element={<Inbox />} />
      </Routes>
    </Router>
  );
}

export default App;
