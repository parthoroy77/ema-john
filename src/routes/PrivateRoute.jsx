import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    if (loader) {
        return <progress className='progreass w-56'></progress>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to='/login' state={{from:location}}>
            
        </Navigate>
    );
};

export default PrivateRoute;