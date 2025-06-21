import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ConnectFB from "./components/ConnectFB";
import Conversations from "./components/Conversations";
import Disconnect from "./components/Disconnect";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/connect" element={<ConnectFB />} />
        <Route path="/conversations" element={<Conversations />} />
        <Route path="/disconnect" element={<Disconnect />} />
      </Routes>
    </Router>
  );
}

export default App;