import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import { ClassComponent } from './components/Classpractice';
import Home from './components/Home';
import DashBord from './components/Dashbord';

export default function App() {
  return (
    <div ClassName="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashBord" element={<DashBord />} />
        <Route path="/dashBord/Classpractice" element={<ClassComponent />} />
      </Routes>
    </div>
  );
}
