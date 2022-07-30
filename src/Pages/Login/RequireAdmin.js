import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useAdmin from '../../hooks/useAdmin';

const RequireAdmin = ({ children }) => {
        const [user, loading, error] = useAuthState(auth);
        const [admin, adminLoading] = useAdmin(user);
        const location = useLocation();

        if (loading || adminLoading) {
                return <Loading></Loading>
        }
        if (!user || !admin) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                return <Navigate to="/login" state={{ from: location }} replace />
        }

        return children;
};

export default RequireAdmin;