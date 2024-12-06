import React from 'react'
import NavBar from './NavBar'
import { useForm } from 'react-hook-form'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from '../axiosConfig'
import Footer from './Footer';

const Register = () => {
    const { register, handleSubmit, watch, setError, formState: { errors } } = useForm();
    const password = watch('password');
    const navigate = useNavigate()
    const onSubmit = (data) => {
        axios.post('/register', data).then((response) => {
            if (response.status === 200) {
                navigate('/login')
            }
        }).catch((err) => {
            if (err.response) {
                if (err.response.data.type === 'email') {
                    setError('email', { message: err.response.data.message })
                } else {
                    setError('companyRegNumber', { message: err.response.data.message })
                }
            }
        })
    }
    return (
        <div>
            <NavBar />
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className='min-h-screen sign-page grid lg:grid-cols-2 form-sec'>
                    <div class=" p-11">
                        <h1 className='font-bold text-2xl pt-8 lg:pt-20 text-green-900'>Join TenderWorld</h1>
                        <h6 className='text-orange-900'>Your Gateway to Opportunities</h6>
                        <p className='text-sm pt-4'>Register now to explore, bid, and win tenders with secure access and personalized updates, all in one place.</p>
                        <div className="form-control pt-5">
                            <label className="label">
                                <span className="label-text">Company Owner</span>
                            </label>
                            <div className="grid lg:grid-cols-2">
                                <input type="text" placeholder="First Name" className="input input-primary input-bordered mb-3 lg:mb-0" {...register("fName", { required: "First Name is required" })} />
                                <input type="text" placeholder="Last Name (Optional)" className="input input-primary input-bordered lg:ms-3" {...register("lName")} />
                                {errors.fName && <span className='text-sm text-red-800'>{errors.fName.message}</span>}
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Company Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Company Name" {...register("companyName", { required: 'Company Name is required' })} className="input input-primary input-bordered" />
                            {errors.companyName && <span className='text-sm text-red-800'>{errors.companyName.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact Number</span>
                            </label>
                            <input type="number" placeholder="Enter Company Contact Number" {...register("contactNumber", { required: 'Contact Number is required' })} className="input input-primary input-bordered" />
                            {errors.contactNumber && <span className='text-sm text-red-800'>{errors.contactNumber.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Please enter a valid email"
                                }
                            })} placeholder="Enter Company email" className="input input-primary input-bordered" />
                            {errors.email && <span className='text-sm text-red-800'>{errors.email.message}</span>}
                        </div>
                    </div>
                    <div class=" p-11">
                        <div className="form-control lg:pt-1">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" {...register("lineAddress", { required: 'Address is required' })} placeholder="Line Address" className="input input-primary input-bordered" />
                            {errors.lineAddress && <span className='text-sm text-red-800'>{errors.lineAddress.message}</span>}
                            <div className="grid lg:grid-cols-2 mb-4">
                                <input type="text" {...register("city", { required: "Place is required" })} placeholder="City" className="input input-primary input-bordered mt-4" />
                                <input type="text" {...register("state", { required: "Place is required" })} placeholder="State" className=" mt-4 input input-primary input-bordered lg:ms-3" />
                                {errors.city && <span className='text-sm text-red-800'>{errors.city.message}</span>}
                            </div>
                            <input type="number" {...register("zipCode", { required: "Zipcode is required" })} placeholder="Postal / Zip Code" className="input input-primary input-bordered" />
                            {errors.zipCode && <span className='text-sm text-red-800'>{errors.zipCode.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Company Reg-Number</span>
                            </label>
                            <input type="text" {...register("companyRegNumber", { required: "Company reg-number is required" })} placeholder="Enter Company Reg-Number" className="input input-primary input-bordered" />
                            {errors.companyRegNumber && <span className='text-sm text-red-800'>{errors.companyRegNumber.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 8, message: 'Password must be at least 8 characters long' },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character',
                                },
                            })} placeholder="Enter a Password" className="input input-primary input-bordered" />
                            {errors.password && <span className='text-sm text-red-800'>{errors.password.message}</span>}
                            <input type="password" {...register('confirmPassword', {
                                validate: (value) =>
                                    value === password || 'Passwords do not match',
                            })} placeholder="Confirm Password" className="input input-primary input-bordered mt-4" />
                            {errors.confirmPassword && <span className='text-sm text-red-800'>{errors.confirmPassword.message}</span>}
                        </div>
                        <Link to={'/login'}><p className='link link-hover text-right p-2'>Already Have an Account</p></Link>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </form>
            <Footer/>
            <Outlet />
        </div>
    )
}

export default Register
