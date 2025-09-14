import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Project from "./page/project.jsx";
import Home from "./page/home.jsx";
import Contact from "./page/contact.jsx";

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <NavLink to="/" className="navlink">Accueil</NavLink>
        <NavLink to="/projects" className="navlink">Projets</NavLink>
        <NavLink to="/contact" className="navlink">Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}