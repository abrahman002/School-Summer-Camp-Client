import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'


const Login = () => {
    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    const Navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        logIn(email, password)
            .then(reslut => {
                const loggeduser = reslut.user;
                console.log(loggeduser)
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
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200" >
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <form onSubmit={handleSubmit} className="card   w-1/2 max-w-sm shadow bg-base-100">
                        <h1 className="text-3xl text-center mt-2 font-bold">Login now!</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <label className="label">
                                <p><small>New Here?<Link to='/signup'>Create Account.</Link></small></p>
                            </label>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;