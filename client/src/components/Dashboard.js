import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div className="dashboard">
    <h1>Dashboard</h1>
    <Link to="/workouts" className="btn btn-primary">
      Workouts
    </Link>
    &nbsp;
    <Link to="/vrienden" className="btn btn-primary">
      Vrienden
    </Link>
  </div>
);

export default Dashboard;
