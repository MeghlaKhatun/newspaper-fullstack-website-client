import PropTypes from 'prop-types';
import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


function PrivateRoute({children}) {

    const {user,isLoading}=useContext(AuthContext)
    const location=useLocation();

    if(isLoading){
        return <span className="loading loading-dots loading-lg h-[100vh] items-center flex justify-center max-w-7xl mx-auto"></span>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to={"/login"}></Navigate>
}



PrivateRoute.propTypes = {
   children:PropTypes.node,
}
export default PrivateRoute;