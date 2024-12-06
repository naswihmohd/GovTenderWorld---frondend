import axios from '../../axiosConfig';
import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function AuthorityLogin() {
    const { register, handleSubmit,setError, formState: { errors } } = useForm();
    const navigate = useNavigate()
  const onSubmit = (data)=>{
    axios.post('authority/login',data).then((response)=>{
        console.log(response)
        if(response.status===200){
            localStorage.setItem('AuthorityToken',response.data.token)
            navigate('/authority')
        }
    }).catch((error)=>{
        console.log(error)
        if (error.response) {
            if (error.response.data.type === 'email') {
                setError('email', { message: error.response.data.message })
            } else {
                setError('password', { message: error.response.data.message })
            }
        }
    })
    console.log(data)
  }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center ps-5 lg:text-left">
                        <h1 className="text-3xl font-bold ">Welcome to the Authority Portal</h1>
                        <p className="py-6">
                            Empowering decisions, streamlining processes. Log in to access secure tools and insights, ensuring every step forward is efficient and impactful.
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorityLogin
