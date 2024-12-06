import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import axios from '../../axiosConfig'
import { useNavigate } from 'react-router-dom'
import AuthorityNav from './AuthorityNav'

const AddTender = () => {
    const { register, handleSubmit, clear, control, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        axios.post('authority/addTender', data).then((res) => {
            if (res.status === 200) {
                navigate('/authority/my-tenders')
            }
        })
    }

    return (
        <div>
            <AuthorityNav/>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div
                    className="hero h-44"
                    style={{
                        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="pt-10 text-5xl font-bold">Tender Creation</h1>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2">
                    <div className=' p-7 text-center'>
                        <h2 className='text-xl pb-4 text-start'>Work Item Details</h2>
                        <div className="form-control">
                            <input
                                {...register("title", { required: 'Title of Tender is required' })}
                                type="text"
                                placeholder="Title of Tender"
                                className="input input-bordered input-accent w-full max-w-screen" />
                            {errors.title && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.title.message}</span>
                            )}
                        </div>

                        <div className="form-control">
                            <textarea {...register('description', { required: "Description is required" })} className="textarea textarea-bordered textarea-accent w-full max-w-screen mt-3" placeholder="Work Description"></textarea>
                            {errors.description && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.description.message}</span>
                            )}
                        </div>
                        <div className="grid md:grid-cols-2">
                            <div className="form-control">
                                <input
                                    {...register("location", { required: 'Location is required' })}
                                    type="text"
                                    placeholder="Location"
                                    className="input input-bordered input-accent mt-2" />
                                {errors.location && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.location.message}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <input
                                    type="number"
                                    {...register("pincode", { required: 'Pincode is required' })}
                                    placeholder="Pincode"
                                    className="input input-bordered input-accent md:ms-3 mt-2" />
                                {errors.pincode && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.pincode.message}</span>
                                )}
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3">
                            <div className="form-control">
                                <input
                                    type="number"
                                    {...register("tenderValue", { required: 'Tender Value is required' })}
                                    placeholder="Tender Value in ₹"
                                    className="input input-bordered input-accent mt-2" />
                                {errors.tenderValue && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.tenderValue.message}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    {...register("bidValidityDays", { required: 'Bid Validity Days is required' })}
                                    placeholder="Bid Validity(Days)"
                                    className="input input-bordered input-accent md:ms-3 mt-2" />
                                {errors.bidValidityDays && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.bidValidityDays.message}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    {...register("periodOfWork", { required: 'Period of Work is required' })}
                                    placeholder="Period Of Work(Days)"
                                    className="input input-bordered input-accent md:ms-3 mt-2" />
                                {errors.periodOfWork && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.periodOfWork.message}</span>
                                )}
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <div className="form-control">
                                <Controller
                                    name="contractType"
                                    control={control}
                                    rules={{ required: "This field is required" }}
                                    render={({ field }) => (
                                        <select {...field} className="select select-accent mt-2">
                                            <option disabled selected>Contract Type</option>
                                            <option value="Fixed-Price Contract" >Fixed-Price Contract</option>
                                            <option value="Cost-Reimbursement Contract">Cost-Reimbursement Contract</option>
                                            <option value="Time and Materials Contract">Time and Materials Contract</option>
                                            <option value="Unit Rate Contract">Unit Rate Contract</option>
                                            <option value="Incentive Contract">Incentive Contract</option>
                                        </select>
                                    )}
                                />
                                {errors.contractType && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.contractType.message}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <Controller
                                    name='productCategory'
                                    control={control}
                                    rules={{ required: "This field is required" }}
                                    render={({ field }) => (
                                        <select {...field} className="select select-accent mt-2 md:ms-3">
                                            <option disabled selected>Product Category</option>
                                            <option value="Construction and Infrastructure">Construction and Infrastructure</option>
                                            <option value="Engineering and Technical Services">Engineering and Technical Services</option>
                                            <option value="Information Technology and Software Development">Information Technology and Software Development</option>
                                            <option value="Supplies and Equipment">Supplies and Equipment</option>
                                            <option value="Community Development and Social Services">Community Development and Social Services</option>
                                            <option value="Health and Safety">Health and Safety</option>
                                        </select>
                                    )}
                                />
                                {errors.productCategory && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.productCategory.message}</span>
                                )}
                            </div>
                        </div>
                        <div className="form-control">
                            <Controller
                                name='preQualification'
                                control={control}
                                rules={{ required: "This field is required" }}
                                render={({ field }) => (
                                    <select {...field} className="select select-accent w-full mt-3">
                                        <option disabled selected>NDA/Pre Qualification</option>
                                        <option value="Nil">Nil</option>
                                        <option value="1 Year">1 Year</option>
                                        <option value="2 Years">2 Years</option>
                                        <option value="5 Years">5 Years</option>
                                    </select>
                                )}
                            />
                            {errors.preQualification && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.preQualification.message}</span>
                            )}
                        </div>

                        {/* Basic Details */}


                        <h1 className='text-xl pb-4 text-start pt-5'>Basic Details</h1>
                        <div className="form-control">
                            <input
                                type="text"
                                {...register('tenderId', { required: "Required is TenderId" })}
                                placeholder="Tender ID"
                                className="input input-bordered input-secondary w-full max-w-screen" />
                            {errors.tenderId && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.tenderId.message}</span>
                            )}
                        </div>
                        <div className="grid md:grid-cols-2">
                            <div className="form-control">
                                <Controller
                                    name='tenderType'
                                    control={control}
                                    rules={{ required: "This field is required" }}
                                    render={({ field }) => (
                                        <select {...field} className="select select-secondary mt-2">
                                            <option disabled selected>Tender Type</option>
                                            <option value="Open Tender">Open Tender</option>
                                            <option value="Selective Tender">Selective Tender</option>
                                            <option value="Limited Tender">Limited Tender</option>
                                            <option value="Single-Source Tender">Single-Source Tender</option>
                                        </select>
                                    )}
                                />
                                {errors.tenderType && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.tenderType.message}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <Controller
                                    name='tenderCategory'
                                    control={control}
                                    rules={{ required: "This field is required" }}
                                    render={({ field }) => (
                                        <select {...field} className="select select-secondary mt-2 md:ms-3">
                                            <option disabled selected>Tender Category</option>
                                            <option value="Works">Works</option>
                                            <option value="Goods">Goods</option>
                                            <option value="Services">Services</option>
                                            <option value="IT and Telecommunications">IT and Telecommunications</option>
                                            <option value="Healthcare and Medical">Healthcare and Medical</option>
                                            <option value="Education and Training">Education and Training</option>
                                            <option value="Agriculture and Farming">Agriculture and Farming</option>
                                            <option value="Real Estate">Real Estate</option>
                                        </select>
                                    )}
                                />
                                {errors.tenderCategory && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.tenderCategory.message}</span>
                                )}
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <label className="label cursor-pointer mt-3">
                                <span className="label-text">General Technical Evaluation Allowed</span>
                                <Controller
                                    name='generalTecEvalAllowed'
                                    control={control}
                                    defaultValue='No'
                                    render={({ field }) => (
                                        <input type="checkbox"
                                            onChange={(e) => field.onChange(e.target.checked ? "Yes" : "No")}
                                            checked={field.value === "Yes"}
                                            className="toggle toggle-secondary" defaultChecked />
                                    )}
                                />

                            </label>
                            <label className="label cursor-pointer mt-3 md:ms-3">
                                <span className="label-text">Withdrawal Allowed</span>
                                <Controller
                                    name='withrawalAllowed'
                                    control={control}
                                    defaultValue='No'
                                    render={({ field }) => (
                                        <input type="checkbox"
                                            onChange={(e) => field.onChange(e.target.checked ? "Yes" : "No")}
                                            checked={field.value === "Yes"}
                                            className="toggle toggle-secondary" defaultChecked />
                                    )}
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <Controller
                                name='paymentMethod'
                                control={control}
                                rules={{ required: "This field is required" }}
                                render={({ field }) => (
                                    <select {...field} className="select select-secondary w-full mt-3">
                                        <option disabled selected>Payment Mode</option>
                                        <option>Online</option>
                                        <option>Offline</option>
                                    </select>
                                )}
                            />
                            {errors.paymentMethod && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.paymentMethod.message}</span>
                            )}
                        </div>

                        {/* Tender Fee Details */}

                        <h1 className='text-xl pb-2 text-start pt-5'>Tender Fee Details</h1>

                        <div className="grid md:grid-cols-2">
                            <div className="form-control">
                                <input
                                    {...register('tenderFee', { required: "Tender Fee is required" })}
                                    type="text"
                                    placeholder="Tender Fee in ₹"
                                    className="input input-bordered input-primary mt-2" />
                                {errors.tenderFee && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.tenderFee.message}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <Controller
                                    name='tenderFeeExemptionAllowed'
                                    control={control}
                                    rules={{ required: "This field is required" }}
                                    render={({ field }) => (
                                        <select {...field} className="select select-primary mt-2 md:ms-3">
                                            <option disabled selected>Tender Fee Exemption Allowed</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    )}
                                />
                                {errors.tenderFeeExemptionAllowed && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.tenderFeeExemptionAllowed.message}</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='p-7 text-center'>

                        {/* Tender Fee Details */}

                        <h1 className='text-xl text-start'>EMD Fee Details</h1>

                        <div className="grid md:grid-cols-2">
                            <div className="form-control">
                                <input
                                    {...register('emdFee', { required: "EMD Fee is required" })}
                                    type="text"
                                    placeholder="EMD Amount in ₹"
                                    className="input input-bordered input-warning mt-4" />
                                {errors.emdFee && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.emdFee.message}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <Controller
                                    name='emdFeeType'
                                    control={control}
                                    rules={{ required: "This field is required" }}
                                    render={({ field }) => (
                                        <select {...field} className="select select-warning md:ms-3 mt-4">
                                            <option disabled selected>EMD Fee Type</option>
                                            <option>Fixed EMD Fee</option>
                                            <option>Percentage-Based EMD Fee</option>
                                            <option>Refundable EMD</option>
                                            <option>Non-Refundable EMD</option>
                                        </select>
                                    )}
                                />
                                {errors.emdFeeType && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.emdFeeType.message}</span>
                                )}
                            </div>

                        </div>
                        <div className="grid md:grid-cols-2">
                            <div className="form-control">
                                <Controller
                                    name='emdExmptionAllowed'
                                    control={control}
                                    rules={{ required: "This field is required" }}
                                    render={({ field }) => (
                                        <select {...field} className="select select-warning mt-4">
                                            <option disabled selected>EMD Exemption Allowed</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    )}
                                />
                                {errors.emdExmptionAllowed && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.emdExmptionAllowed.message}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <Controller
                                    name='emdPercentage'
                                    control={control}
                                    rules={{ required: "This field is required" }}
                                    render={({ field }) => (
                                        <select {...field} className="select select-warning md:ms-3 mt-4">
                                            <option disabled selected>EMD Percentage</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    )}
                                />
                                {errors.emdPercentage && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.emdPercentage.message}</span>
                                )}
                            </div>
                        </div>

                        {/* Critical Dates */}

                        <h1 className='text-xl text-start pb-2 pt-7'>Critical Dates</h1>
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Bid Opening Date</span>
                            </label>
                            <input {...register('bidOpeningDate', { required: "This field is required" })} type="date" class="input input-bordered input-success" />
                            {errors.bidOpeningDate && (
                                <span className='text-sm text-red-600 text-end pe-3'>{errors.bidOpeningDate.message}</span>
                            )}
                        </div>
                        <div className="grid md:grid-cols-2">
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text">Document Download / Sale Start Date</span>
                                </label>
                                <input {...register('docuDowStartDate', { required: "This field is required"  })} type="date" class="input input-bordered input-success" />
                                {errors.docuDowStartDate&& (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.docuDowStartDate.message}</span>
                                )}
                            </div>
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text md:ms-3">Document Download / Sale End Date</span>
                                </label>
                                <input {...register('docuDowEndDate', { required:"This field is required"  })} type="date" class="input input-bordered input-success md:ms-3" />
                                {errors.docuDowEndDate && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.docuDowEndDate.message}</span>
                                )}
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text">Clarification Start Date</span>
                                </label>
                                <input {...register('clarificationStartDate', { required: "This field is required"  })} type="date" class="input input-bordered input-success" />
                                {errors.clarificationStartDate && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.clarificationStartDate.message}</span>
                                )}
                            </div>
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text md:ms-3">Clarification End Date</span>
                                </label>
                                <input {...register('clarificationEndDate', { required: "This field is required"  })} type="date" class="input input-bordered input-success md:ms-3" />
                                {errors.clarificationEndDate && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.clarificationEndDate.message}</span>
                                )}
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text">Bid Submission Start Date</span>
                                </label>
                                <input {...register('bidSubmitionStartDate', { required: "This field is required"  })} type="date" class="input input-bordered input-success" />
                                {errors.bidSubmitionStartDate && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.bidSubmitionStartDate.message}</span>
                                )}
                            </div>
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text md:ms-3">Bid Submission End Date</span>
                                </label>
                                <input {...register('bidSubmitionEndDate', { required: "This field is required"  })} type="date" class="input input-bordered input-success md:ms-3" />
                                {errors.bidSubmitionEndDate && (
                                    <span className='text-sm text-red-600 text-end pe-3'>{errors.bidSubmitionEndDate.message}</span>
                                )}
                            </div>
                        </div>

                        {/* Documents upoad */}

                        <h1 className='text-xl text-start pb-2 pt-7'>Tenders Documents</h1>

                        <div className="grid md:grid-cols-2">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">NIT Notice</span>
                                </div>
                                <input type="file" className="file-input file-input-bordered file-input-info" />
                            </label>
                            <label className="form-control md:ms-3">
                                <div className="label">
                                    <span className="label-text">BID Notice</span>
                                </div>
                                <input type="file" className="file-input file-input-bordered file-input-info" />
                            </label>
                        </div>
                        <div className="grid md:grid-cols-2 mt-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">DRAFT NIT</span>
                                </div>
                                <input type="file" className="file-input file-input-bordered file-input-info" />
                            </label>
                            <label className="form-control md:ms-3">
                                <div className="label">
                                    <span className="label-text">Other file</span>
                                </div>
                                <input type="file" className="file-input file-input-bordered file-input-info" />
                            </label>
                        </div>

                    </div>
                </div>
                <div className='text-center ps-16 pt-5 pe-16'>
                    <button className='btn btn-success w-full'>Publish Render</button>
                </div>
            </form>
            <hr className='text-black m-9 font-bold' />
        </div>
    )
}

export default AddTender
