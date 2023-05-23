import { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log(loading)
    const location = useLocation();
    if (loading) {
        return <progress className="progress w-56"></progress>

    }
    if (user) {
        return children;

    }


    Swal.fire({
        title: 'Please LogIn Then View Details!!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    return <Navigate to="/login" state={{ form: location }}></Navigate>;

};

export default PrivetRouter;