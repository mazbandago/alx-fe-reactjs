import React, { Children } from 'react'
import { isAuthenticated } from '../Auth';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({Children}) {
    if(!isAuthenticated()) {
        return <Navigate to="/" replace />;
    }
  return Children;

}

export default ProtectedRoute;