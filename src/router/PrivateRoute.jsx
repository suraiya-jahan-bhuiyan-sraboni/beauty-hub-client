import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()

    if (loading) {
        return <div className="min-h-screen flex justify-center items-center flex-col">
            Loading...
            <progress className="progress w-56"></progress>
        </div>;
    }
    if (user && user?.email) {
        return children
      }

  return (
      <Navigate state={location.pathname} to='/login'></Navigate>
  )
}

export default PrivateRoute