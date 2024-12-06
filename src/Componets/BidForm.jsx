import React from 'react'
import { useForm } from 'react-hook-form'
import axios from '../axiosConfig';
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar';
import Footer from './Footer';

const BidForm = () => {
    const { register, handleSubmit, clear, control, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const { tenderId } = useParams()

    const onSubmit = (data) => {
        data.tender = tenderId
        axios.post('/tender/bidder', data).then((res) => {
            navigate('/')
        }).catch((err)=>{
            if(err.response){
                console.log(err.response.data.message)
            }
            console.log()
        })
    }

    return (
        <div>
            <NavBar />
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div
                    className="hero h-44"
                    style={{
                        backgroundImage: "url(https://cdn.prod.website-files.com/5a9ee6416e90d20001b20038/64d223d5a9cdb5376383c3b8_%20-%2068.png)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="pt-10 text-5xl font-bold">Bid for Tender</h1>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2">
                    <div className=' p-7 text-center'>
                        <h2 className='text-xl pb-4 text-start text-green-900'>Bidding Details</h2>
                        <div className="form-control">
                            <input
                                {...register("proposedBudget", { required: 'Proposed Budget is required' })}
                                type="text"
                                placeholder="Proposed Budget"
                                className="input input-bordered input-success w-full max-w-screen" />
                            {errors.proposedBudget && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.proposedBudget.message}</span>
                            )}
                        </div>
                        <h2 className='text-xl pb-2 text-start pt-3 text-green-900'>Timeline</h2>

                        <div className="grid md:grid-cols-2">

                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text">Start Date</span>
                                </label>
                                <input {...register('timeLineStartDate', { required: "This field is required" })} type="date" class="input input-bordered input-success" />
                                {errors.timeLineStartDate && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.timeLineStartDate.message}</span>
                                )}
                            </div>
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text md:ms-3">End Date</span>
                                </label>
                                <input {...register('timeLineEndDate', { required: "This field is required" })} type="date" class="input input-bordered input-success md:ms-3" />
                                {errors.timeLineEndDate && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.timeLineEndDate.message}</span>
                                )}
                            </div>
                        </div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Project Plan</span>
                            </div>
                            <input type="file" className="file-input file-input-bordered file-input-success" />
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Registration Certificate</span>
                            </div>
                            <input type="file" className="file-input file-input-bordered file-input-success" />
                        </label>

                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Tax Compliance Certificates</span>
                            </div>
                            <input type="file" className="file-input file-input-bordered file-input-success" />
                        </label>

                    </div>
                    <div className='p-7 text-center'>
                        <h2 className='text-xl pb-2 text-start pt-3 text-green-900'>Experience</h2>
                        <div className="form-control">
                            <textarea {...register('pastProjects')} className="textarea textarea-bordered border-success w-full max-w-screen mt-3" placeholder="Enter Your Past Projects IDs (Optional)"></textarea>
                        </div>

                        <div className="form-control">
                            <textarea {...register('Qualification')} className="textarea textarea-bordered border-success w-full max-w-screen mt-3" placeholder="Enter Your Qualificatoin"></textarea>
                        </div>

                        <h2 className='text-xl pb-4 text-start pt-5 text-green-900'>Bank Details</h2>
                        <div className="form-control">
                            <input
                                {...register("accountNumber", { required: 'Bank Account Number is required' })}
                                type="text"
                                placeholder="Enter Your Bank Account Number"
                                className="input input-bordered input-accent w-full max-w-screen" />
                            {errors.accountNumber && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.accountNumber.message}</span>
                            )}
                        </div>
                        <div className="form-control mt-3">
                            <input
                                {...register("IFCE", { required: 'IFCE Code is required' })}
                                type="text"
                                placeholder="IFCE Code"
                                className="input input-bordered input-success w-full max-w-screen" />
                            {errors.IFCE && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.IFCE.message}</span>
                            )}
                        </div>
                        <div className='text-center pt-8'>
                            <button className='btn btn-success w-full text-white'>Submit</button>
                        </div>

                    </div>
                </div>

            </form>
            <hr className='text-black m-5 font-bold' />

            <Footer/>
        </div>
    )
}

export default BidForm
