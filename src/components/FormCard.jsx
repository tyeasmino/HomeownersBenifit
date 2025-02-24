import React, { useState } from 'react'
import { Link } from 'react-router'

const FormCard = () => {
    const [step, setStep] = useState(1)

    const [formData, setFormData] = useState({
        homeOwner: "",
        monthlyBill: "",
        creditScore: "",
    })

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    return (
        <section className='text-black p-4'>
            <div className='flex flex-col gap-5 bg-white rounded-3xl mx-auto my-[20px] p-7'>
                <div className='w-fit mx-auto'>
                    <h1 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className='text-[20px] font-semibold'>Complete the steps to unlock your solar potential</h1>
                </div>

                {step === 1 && (
                    <div>
                        <div className='flex gap-20 justify-between'>
                            <div className='text-[10px] flex flex-col relative items-center'>
                                <span className='w-5 h-5 flex items-center justify-center rounded-full border border-green-500'>1</span>
                                <p className=' '>Next</p>
                                <span className='absolute top-3 left-7 w-[80px] bg-black h-[1px]'></span>
                            </div>

                            <div className='flex gap-12'>
                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-gray-500'>2</span>
                                    <p className=''>Next</p>
                                    <span className='absolute top-3 left-10 w-[30px] bg-gray-500 h-[1px]'></span>
                                </div>
                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-gray-500'>3</span>
                                    <p className=''>Next</p>
                                    <span className='absolute top-3 left-10 w-[30px] bg-gray-500 h-[1px]'></span>
                                </div>
                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-gray-500'>4</span>
                                    <p className=''>Next</p>
                                    <span className='absolute top-3 left-10 w-[30px] bg-gray-500 h-[1px]'></span>
                                </div>
                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-gray-500'>5</span>
                                    <p className=''>Last Page</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h5 className='font-bold text-[20px]'> Are you a home owner? *</h5>
                            <label>
                                <input
                                    type="radio"
                                    name="homeOwner"
                                    value="Yes"
                                    checked={formData.homeOwner === "Yes"}
                                    onChange={handleChange}
                                />{" "}
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="homeOwner"
                                    value="No"
                                    checked={formData.homeOwner === "No"}
                                    onChange={handleChange}
                                />{" "}
                                No
                            </label>
                        </div>
                    </div>
                )}


                {step === 2 && (
                    <div>
                        <div className='flex gap-20 justify-between'>
                            <div className='text-[10px] flex flex-col relative items-center text-blue-600'>
                                <span className='w-5 h-5 flex items-center justify-center rounded-full border'>1</span>
                                <p className=' '>Next</p> 
                            </div>

                            <div className='flex gap-12'>
                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-green-500'>2</span>
                                    <p className=''>Next</p>
                                    <span className='absolute top-3 left-10 w-[30px] bg-gray-500 h-[1px]'></span>
                                </div>
                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-gray-500'>3</span>
                                    <p className=''>Next</p>
                                    <span className='absolute top-3 left-10 w-[30px] bg-gray-500 h-[1px]'></span>
                                </div>
                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-gray-500'>4</span>
                                    <p className=''>Next</p>
                                    <span className='absolute top-3 left-10 w-[30px] bg-gray-500 h-[1px]'></span>
                                </div>
                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-gray-500'>5</span>
                                    <p className=''>Last Page</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h5 className='font-bold text-[20px]'>Is your monthly electricity bills over $99? *</h5>
                            <label>
                                <input
                                    type="radio"
                                    name="monthlyBill"
                                    value="Yes"
                                    checked={formData.monthlyBill === "Yes"}
                                    onChange={handleChange}
                                />{" "}
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="monthlyBill"
                                    value="No"
                                    checked={formData.monthlyBill === "No"}
                                    onChange={handleChange}
                                />{" "}
                                No
                            </label>
                        </div>
                    </div>
                )}

                {step > 1 && <button onClick={prevStep}>Back</button>}
                {step < 2 && <button onClick={nextStep}>Next</button>}
                {step === 2 && <button onClick={() => alert("Submit FOrm")}>Submit</button>}
                
                {/* <div className='text-center my-7'>
                    <Link to='' style={{ fontFamily: "'Space Grotesk', sans-serif" }} className='w-[200px] bg-[#033E8A] hover:bg-white hover:text-[#033E8A] hover:border hover:border-[#033E8A] transition-all duration-300 ease-in-out font-semibold text-sm text-white px-36 py-3.5 rounded-full'>Next</Link>
                </div> */}
            </div>
        </section>
    )
}

export default FormCard