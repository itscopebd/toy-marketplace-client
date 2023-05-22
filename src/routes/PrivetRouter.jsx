import { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({ children }) => {
    const { user,loading } = useContext(AuthContext);
    console.log(loading)
    const location = useLocation();
    if (loading) {
        return <progress className="progress w-56"></progress>
        
    }
    if (user) {
        return children;

    }
    return <Navigate to="/login" state={{ form: location }}></Navigate>
};

export default PrivetRouter;