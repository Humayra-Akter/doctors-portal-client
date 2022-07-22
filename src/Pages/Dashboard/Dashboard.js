import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
        return (
                <div className="drawer drawer-mobile">
                        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                                <h1 className='text-3xl font-bold text-secondary'>Welcome to Your Dashboard</h1>
                                <Outlet></Outlet>
                        </div>
                        <div className="drawer-side">
                                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                                        <li><Link to="/dashboard">My appointments</Link></li>
                                        <li><Link to="/dashboard/review">My review</Link></li>
                                        <li><Link to="/dashboard/history">My history</Link></li>
                                        <li><Link to="/dashboard/users">All Users</Link></li>
                                </ul>
                        </div>
                </div>
        );
};

export default Dashboard;