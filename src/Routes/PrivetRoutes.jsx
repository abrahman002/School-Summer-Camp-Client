import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = () => {
    
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();

    if(loading){
        return <progress className="progress progress-error w-56" value="0" max="100"></progress>

    }

    if (user?.email) {
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
   
};

export default PrivetRoutes;