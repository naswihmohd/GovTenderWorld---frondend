import React from 'react'
import NavBar from './NavBar'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from '../axiosConfig';


const Login = () => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        axios.post('/login', data).then((response) => {
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', response.data.userId)
                navigate('/')
                
            }
        }).catch((error) => {
            if (error.response) {
                if (error.response.data.type === 'email') {
                    setError('email', { message: error.response.data.message })
                } else {
                    setError('password', { message: error.response.data.message })
                }
            }
        })
    }

    return (
        <div>
            <NavBar />
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center ps-5 lg:text-left">
                        <h1 className="text-3xl font-bold">Access Opportunities, Unlock Potential!</h1>
                        <p className="py-6">
                            Log in to explore a world of tenders and contracts. Your gateway to business growth starts here with secure access.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register('email', {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Please enter a valid email"
                                    }
                                })} type="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-sm text-red-800 text-center'>{errors.email.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password', { required: 'password is required' })} type="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-sm text-red-800 text-center'>{errors.password.message}</span>}
                                <Link to={'/register'}><a className="label-text-alt link link-hover text-right">Create New Account?</a></Link>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Login
