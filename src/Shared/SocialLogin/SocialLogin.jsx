import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const Navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                Swal.fire({
                    title: 'Login Successfull',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                Navigate(from, { replace: true })
            })
            .catch(error => {
                Swal.fire({
                    title: error.message,
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })

    }
    return (
        <div className='text-2xl text-center text-white'>
            <button className='btn btn-outline' onClick={handleGoogle}><FaGoogle></FaGoogle></button>
        </div>
    );
};

export default SocialLogin;