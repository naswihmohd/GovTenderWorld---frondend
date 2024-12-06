import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import axios from '../../axiosConfig'
import { useNavigate } from 'react-router-dom'
import AdminNav from './AdminNav'
import AlertPop from '../AlertPop'

const AddAuthority = () => {
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const onSubmit = (data) => {

        console.log(data)

        const emailData = {
            email: data.email,
            subject: 'Account Creation Successful',
            message: `Dear ${data.department},

We are pleased to inform you that your account has been successfully created. You can now access our system using the credentials provided below. Please keep this information secure and confidential.

Account Details:

Email: ${data.email}
Password: ${data.password}
You may log in using these credentials at [Login URL]. For security purposes, we strongly recommend changing your password after your first login.

If you encounter any issues or need further assistance, please do not hesitate to reach out to our support team at [Support Email or Contact Number].

Best Regards,
Government `
        }

        axios.post('admin/add-authority', data).then((res) => {
            if (res.status === 200) {
                setMessage(res.data.message)
                axios.post('/email/send-email', emailData).then((res) => {
                    if (res.status === 200) {
                        console.log('Email send Successfull', emailData)
                        setMessage(...res.data.message)
                        setIsPopupOpen(true)
                    }
                }).catch((err)=>{
                    console.log(err)
                })
            }
        })


    }



    const handleClose = () => {
        setIsPopupOpen(false)
        setMessage('')
        navigate('/admin/authority')
    }

    const password = watch("password");

    return (
        <div>
            <AdminNav />
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div
                    className="hero h-44"
                    style={{
                        backgroundImage: "url(https://c.wallhere.com/photos/24/cc/city_urban_architecture_building_cityscape_reflection_lights_city_lights-1618577.jpg!d)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="pt-10 text-5xl font-bold">Add Authority</h1>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2">
                    <div className=' p-7 text-center'>
                        <h2 className='text-xl pb-4 text-start'>Authority Details</h2>
                        <div className="form-control">
                            <input
                                {...register("name", { required: 'Authority Name is required' })}
                                type="text"
                                placeholder="Name of Authority"
                                className="input input-bordered input-accent w-full max-w-screen" />
                            {errors.name && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.name.message}</span>
                            )}
                        </div>
                        <h2 className='text-xl pb-2 text-start mt-3'>Contact Person Details</h2>
                        <div className="grid md:grid-cols-2">
                            <div className="form-control">
                                <input
                                    {...register("firstName", { required: 'First Name is required' })}
                                    type="text"
                                    placeholder="First Name"
                                    className="input input-bordered input-accent mt-2" />
                                {errors.firstName && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.firstName.message}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    {...register("lastName", { required: 'Last Name is required' })}
                                    placeholder="Last Name"
                                    className="input input-bordered input-accent md:ms-3 mt-2" />
                                {errors.lastName && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.lastName.message}</span>
                                )}
                            </div>
                        </div>
                        <div className="form-control">
                            <input
                                {...register("position", { required: 'Position is required' })}
                                type="text"
                                placeholder="Position"
                                className="input input-bordered input-accent w-full max-w-screen mt-3" />
                            {errors.position && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.position.message}</span>
                            )}
                        </div>

                        <div className="form-control">
                            <input
                                {...register("phoneNumber", { required: 'Phone Number is required' })}
                                type="text"
                                placeholder="Phone Number"
                                className="input input-bordered input-accent w-full max-w-screen mt-3" />
                            {errors.phoneNumber && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.phoneNumber.message}</span>
                            )}
                        </div>

                        <div className="form-control">
                            <Controller
                                name="gender"
                                control={control}
                                rules={{ required: "This field is required" }}
                                render={({ field }) => (
                                    <select {...field} className="select select-accent mt-2">
                                        <option disabled selected>Gender</option>
                                        <option value="Male" >Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                )}
                            />
                            {errors.gender && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.gender.message}</span>
                            )}
                        </div>

                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Date Of Birth</span>
                            </label>
                            <input {...register('DOB', { required: "This field is required" })} type="date" class="input input-bordered input-success" />
                            {errors.DOB && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.DOB.message}</span>
                            )}
                        </div>




                        {/* Contact Details */}


                        <h1 className='text-xl pb-4 text-start pt-5'>Contact Details</h1>
                        <div className="form-control">
                            <input
                                type="text"
                                {...register('email', { required: "Email is required" })}
                                placeholder="Enter an Email"
                                className="input input-bordered input-secondary w-full max-w-screen" />
                            {errors.email && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.email.message}</span>
                            )}
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                {...register('phone', { required: "Phone Number is required" })}
                                placeholder="Enter a Phone Number"
                                className="input input-bordered mt-3 input-secondary w-full max-w-screen" />
                            {errors.phone && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.phone.message}</span>
                            )}
                        </div>


                    </div>
                    <div className='p-7 text-center'>


                        <div className="form-control">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input
                                {...register('lineAddress', { required: "Line Address is required" })}
                                type="text"
                                placeholder="Line Address"
                                className="input input-bordered input-secondary mt-2" />
                            {errors.lineAddress && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.lineAddress.message}</span>
                            )}
                        </div>
                        <div className="grid md:grid-cols-2">
                            <div className="form-control">
                                <input
                                    {...register("street", { required: 'Street is required' })}
                                    type="text"
                                    placeholder="Street"
                                    className="input input-bordered input-secondary mt-2" />
                                {errors.street && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.street.message}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    {...register("city", { required: 'City is required' })}
                                    placeholder="City"
                                    className="input input-bordered input-secondary md:ms-3 mt-2" />
                                {errors.city && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.city.message}</span>
                                )}
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <div className="form-control">
                                <input
                                    {...register("state", { required: 'State is required' })}
                                    type="text"
                                    placeholder="State"
                                    className="input input-bordered input-secondary mt-2" />
                                {errors.state && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.state.message}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    {...register("country", { required: 'Country is required' })}
                                    placeholder="Country"
                                    className="input input-bordered input-secondary md:ms-3 mt-2" />
                                {errors.country && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.country.message}</span>
                                )}
                            </div>
                        </div>
                        <div className="form-control">
                            <input
                                {...register('pincode', { required: "Pincode is required" })}
                                type="text"
                                placeholder="Pincode/ Zipcode"
                                className="input input-bordered input-secondary mt-3" />
                            {errors.pincode && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.pincode.message}</span>
                            )}
                        </div>
                        <h1 className='text-xl pb-4 text-start pt-5'>Department</h1>
                        <div className="form-control">
                            <input
                                type="text"
                                {...register('department', { required: "Department is required" })}
                                placeholder="Enter Department"
                                className="input input-bordered input-warning w-full max-w-screen" />
                            {errors.department && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.department.message}</span>
                            )}
                        </div>
                        {/* set password */}
                        <h1 className='text-xl pb-4 text-start pt-5'>Password</h1>
                        <div className="form-control">
                            <input
                                type="password"
                                {...register('password', {
                                    required: "Password is required",
                                    minLength: { value: 8, message: "Password must be at least 8 characters" },
                                })}
                                placeholder="Enter Password"
                                className="input input-bordered input-primary w-full max-w-screen" />
                            {errors.password && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.password.message}</span>
                            )}
                        </div>
                        <div className="form-control">
                            <input
                                type="password"
                                {...register('confirmPassword', {
                                    required: "Please confirm your password",
                                    validate: (value) => value === password || "Passwords do not match",
                                })}
                                placeholder="Confirm Password"
                                className="input input-bordered input-primary mt-3 w-full max-w-screen" />
                            {errors.confirmPassword && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.confirmPassword.message}</span>
                            )}
                        </div>
                        <button className='btn mt-8 btn-info w-full'>Submit</button>
                    </div>
                </div>
            </form>
            <AlertPop
                isOpen={isPopupOpen}
                close={handleClose}
                message={message}
            />
            
            <hr className='text-black m-9 font-bold' />
        </div>
    )
}

export default AddAuthority
