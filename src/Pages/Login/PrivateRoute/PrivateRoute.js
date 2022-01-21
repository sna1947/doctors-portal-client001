import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {

    const {user, isLoding} = useAuth();
    let location = useLocation();

    if (isLoding){
        return <CircularProgress color="secondary" />
    }
    if(user.email){
        return children;
    }
    return  <Navigate to= '/login' state = {{from: location}} />
};

export default PrivateRoute;

