import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Home.css';

export default function Home() {
  return (
    <div className="main_home">
      <button className="main_button">
        <Link to="DashBord">DashBord</Link>
      </button>
      <h1>home</h1>
    </div>
  );
}
