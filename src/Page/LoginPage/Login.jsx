import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';



const Login = () => {
    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    const Navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();



    const from = location.state?.from?.pathname || '/';




    const onSubmit = data => {
        logIn(data.email, data.password)
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
                    title: `${error.message}`,
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })

    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div>
            <Helmet>
                <title>Islamic School | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-white" >
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left">
                        <img src='https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?size=626&ext=jpg&ga=GA1.2.1790188860.1684506131&semt=country_rows_v1' alt="" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card  w-1/2 max-w-sm shadow bg-sky-600">
                        <h1 className="text-3xl text-center mt-2 font-bold">Login  now!</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} {...register("password", { required: true, minLength: 6, pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/ })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 character</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must be one uppercase,one special  character</p>}
                                <button onClick={togglePasswordVisibility}>
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>


                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Signup" />
                            </div>
                            <label className="label">
                                <p><small>New Here?<Link to='/signup'>Create Account.</Link></small></p>
                            </label>
                            <div className='divider'></div>
                            <SocialLogin></SocialLogin>

                        </div>


                    </form>


                </div>
            </div>
        </div>
    );
};

export default Login;