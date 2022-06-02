import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Home.css';

export default function DashBord() {
  return (
    <div>
      <button className="main_button">
        <Link to="/dashBord/Classpractice">Workspace</Link>
      </button>
    </div>
  );
}
