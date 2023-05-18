import React from 'react';
import { FaEnvelopeSquare, FaGoogle, FaKey, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Registration = () => {

    const handleRegistration = (event) => {
        event.preventDefault();
       const form= event.target;
       const name=form.name.value;
       const email=form.email.value;
       const password= form.password.value;
       const url=form.url.value;
    }

    return (
        <div className='flex my-5'>
            <div className="custom_loginForm py-10 w-12/12 md:w-6/12 lg:w-4/12 2xl:w-3/12">
                <div className="hero w-full">
                    <div className="hero-content flex-col ">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Registration now!</h1>

                        </div>
                        <div className="card">
                            <form onSubmit={handleRegistration}>

                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="input-group">
                                            <span className='bg-white text-xl'><FaUser></FaUser></span>
                                            <input type="text" placeholder="Name" name='name' className="input focus:border-none focus:outline-none" />

                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="input-group">
                                            <span className='bg-white text-xl'><FaEnvelopeSquare></FaEnvelopeSquare></span>
                                            <input type="email" placeholder="amdin@gmail.com" name='email' className="input focus:border-none focus:outline-none" />

                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="input-group">
                                            <span className='bg-white text-xl'><FaKey></FaKey></span>
                                            <input type="password" placeholder="password" name='password' className="input focus:border-none focus:outline-none" />

                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <input type="url" placeholder="Photo Url" name='url' className="input focus:border-none focus:outline-none" />
                                    </div>

                                    <button className="log-in"> Log In </button>
                                    <div>
                                        <p className='text-red-700 text-xl font-bold text-center'>Already have an account? <br /> <Link to="/login" className='text-[#FFE6FA] hover:text-red-700'>Login Now</Link> </p>
                                    </div>
                                    <div className='text-center'>
                                        <p className='text-2xl text-white'>Or</p>
                                    </div>
                                    <div className='text-center'>
                                        <div className="btn-group">
                                            <button className="btn flex items-center hover:bg-white text-normal-case">

                                                <FaGoogle className='inline-block mr-2'></FaGoogle>

                                                Log in with google
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;