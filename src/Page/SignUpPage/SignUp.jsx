import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const { createUser, profileUpdate } = useContext(AuthContext);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();


    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                profileUpdate(data.name, data.photoUrl)

                    .then(() => {
                        const savedUser = { name: data.name, email: data.email }
                        fetch('https://islamic-school-server.vercel.app/users', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    title: `${error.message}`,
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })

        if (data.password !== data.confirmPassword) {
            Swal.fire({
                title: "Password does not match",
                text: "Please make sure the passwords match.",
                icon: "error",
                confirmButtonText: "OK"
            });
            return;
        }
    }





    return (
        <div>
            <Helmet>
                <title>Islamic School | Signup</title>
            </Helmet>
            <div className="hero min-h-screen bg-white" >
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left">
                        <img src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg?size=626&ext=jpg&ga=GA1.1.1790188860.1684506131&semt=country_rows_v1' alt="" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card  w-1/2 max-w-sm  bg-base-100">
                        <h1 className="text-3xl text-center mt-2 font-bold">SignUp now!</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} name='photo' placeholder="Photo Url" className="input input-bordered" />
                                {errors.photo && <span className='text-red-600'>Photo is required</span>}
                            </div>
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
                                <input type="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/ })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 character</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must be one uppercase,one special  character</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("confirmPassword", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/
                                    })}
                                    name="confirmPassword"
                                    placeholder="confirm password"
                                    className="input input-bordered"
                                />
                                {errors.confirmPassword?.type === "required" && (
                                    <p className="text-red-600">Confirm Password is required</p>
                                )}
                                {errors.confirmPassword?.type === "minLength" && (
                                    <p className="text-red-600">Confirm Password must be 6 characters</p>
                                )}
                                {errors.confirmPassword?.type === "pattern" && (
                                    <p className="text-red-600">
                                        Confirm Password must have one uppercase letter and one special character
                                    </p>
                                )}
                                {errors.confirmPassword?.type === "validate" && (
                                    <p className="text-red-600">Passwords do not match</p>
                                )}
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Signup" />
                            </div>
                            <label className="label">
                                <p><small>Already Have Account?<Link to='/login'>Login</Link></small></p>
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

export default SignUp;