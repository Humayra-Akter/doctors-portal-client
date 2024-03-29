import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
        const [user] = useAuthState(auth);
        const [admin] = useAdmin(user);
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
                                        {admin && <>
                                                <li><Link to="/dashboard/users">All Users</Link></li>
                                                <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                                        </>}
                                </ul>
                        </div>
                </div>
        );
};

export default Dashboard;