import React, { useState } from 'react'
import { Link } from 'react-router'

const FormCard = () => {
    const [step, setStep] = useState(1)

    const [formData, setFormData] = useState({
        homeOwner: "",
        monthlyBill: "",
        creditScore: "",
        name: "",
        street: "",
        city: "",
        zip: "",
        state: "",
        phone: "",
        calling_time: "",
    })

    const validateStep = () => {
        if (step === 1 && !formData.homeOwner) {
            return false;
        }
        if (step === 2 && !formData.monthlyBill) {
            return false;
        }
        if (step === 3 && !formData.creditScore) {
            return false;
        }
        if (step === 4) {
            if (!formData.name || !formData.address || !formData.city || !formData.zip || !formData.state) {
                return false;
            }
        }
        if (step === 5 && !formData.phone && !formData.calling_time) {
            return false;
        }

        return true;
    };

    const nextStep = () => {
        if (validateStep()) {
            setStep((prevStep) => prevStep + 1);
        }
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
        <section className='text-black md:p-4'>
            <div className='flex flex-col gap-5 bg-white rounded-3xl mx-auto my-[20px] p-7'>
                <div className='w-fit mx-auto'>
                    <h1 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className='text-[13px] md:text-[20px] font-semibold'>Complete the steps to unlock your solar potential</h1>
                </div>

                {step === 1 && (
                    <div>
                        <div className='flex gap-7 md:gap-20 justify-between'>
                            <div className='text-[10px] flex flex-col relative items-center'>
                                <span className='w-5 h-5 flex items-center justify-center rounded-full border border-green-500'>1</span>
                                <p className='font-bold'>Next</p>
                                <span className='absolute top-3 left-5 w-[30px] md:w-[80px] bg-black h-[1px]'></span>
                            </div>

                            <div className='flex gap-3 md:gap-12'>
                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-gray-500'>2</span>
                                    <p className=''>Next</p>
                                    <span className='absolute top-3 left-6 w-[10px] md:w-[30px] bg-gray-500 h-[1px]'></span>
                                </div>
                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-gray-500'>3</span>
                                    <p className=''>Next</p>
                                    <span className='absolute top-3 left-6 w-[10px] md:w-[30px] bg-gray-500 h-[1px]'></span>
                                </div>
                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-gray-500'>4</span>
                                    <p className=''>Next</p>
                                    <span className='absolute top-3 left-6 w-[10px] md:w-[30px] bg-gray-500 h-[1px]'></span>
                                </div>
                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-gray-500'>5</span>
                                    <p className='absolute w-20 top-5 -left-2 md:block'>Last Page</p>
                                </div>
                            </div>
                        </div>
                        <h5 className='font-bold text-[13px] md:text-[20px] mt-5 mb-3'> Are you a home owner? *</h5>
                        <div className='flex flex-col gap-1'>
                            <label className='md:text-gray-500' >
                                <input
                                    required
                                    type="radio"
                                    name="homeOwner"
                                    value="Yes"
                                    checked={formData.homeOwner === "Yes"}
                                    onChange={handleChange}
                                />{" "}
                                Yes
                            </label>
                            <label className='md:text-gray-500'>
                                <input
                                    required
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
                        <div className='flex gap-7 md:gap-14'>
                            <div className='text-[10px] flex flex-col items-center text-blue-600'>
                                <span className='w-5 h-5 flex items-center justify-center rounded-full border border-blue-600'>1</span>
                                <p className='font-bold'>Next</p>
                            </div>

                            <div className='text-[10px] flex flex-col relative items-center'>
                                <span className='w-5 h-5 flex items-center justify-center rounded-full border border-green-500'>2</span>
                                <p className='font-bold'>Next</p>
                                <span className='absolute top-3 left-5 w-[30px] md:w-[80px] bg-black h-[1px]'></span>
                            </div>

                            <div className='flex gap-3 md:gap-12 md:ml-12'>
                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-gray-500'>3</span>
                                    <p className=''>Next</p>
                                    <span className='absolute top-3 left-7 md:left-10 w-[10px] md:w-[30px] bg-gray-500 h-[1px]'></span>
                                </div>
                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-gray-500'>4</span>
                                    <p className=''>Next</p>
                                    <span className='absolute top-3 left-7 md:left-10 w-[10px] md:w-[30px] bg-gray-500 h-[1px]'></span>
                                </div>
                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-gray-500'>5</span>
                                    <p className='absolute w-20 top-5 -left-2 md:block'>Last Page</p>
                                </div>
                            </div>
                        </div>
                        <h5 className='font-bold text-[13px] md:text-[20px] mt-5 mb-3'>Is your monthly electricity bills over $99? *</h5>
                        <div className='flex flex-col gap-1'>
                            <label className='md:text-gray-500' >
                                <input required
                                    type="radio"
                                    name="monthlyBill"
                                    value="Yes"
                                    checked={formData.monthlyBill === "Yes"}
                                    onChange={handleChange}
                                />{" "}
                                Yes
                            </label>
                            <label className='md:text-gray-500' >
                                <input required
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


                {step === 3 && (
                    <div>
                        <div className='flex gap-7 md:gap-14'>
                            <div className='text-[10px] flex flex-col items-center text-blue-600'>
                                <span className='w-5 h-5 flex items-center justify-center rounded-full border border-blue-600'>1</span>
                                <p className='font-bold'>Next</p>
                            </div>

                            <div className='text-[10px] flex flex-col items-center text-blue-600'>
                                <span className='w-5 h-5 flex items-center justify-center rounded-full border border-blue-600'>2</span>
                                <p className='font-bold'>Next</p>
                            </div>

                            <div className='text-[10px] flex flex-col relative items-center'>
                                <span className='w-5 h-5 flex items-center justify-center rounded-full border border-green-500'>3</span>
                                <p className='font-bold'>Next</p>
                                <span className='absolute top-3 left-5 w-[30px] md:w-[80px] bg-black h-[1px]'></span>
                            </div>

                            <div className='flex gap-3 md:gap-12 md:ml-12'>

                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-gray-500'>4</span>
                                    <p className=''>Next</p>
                                    <span className='absolute top-3 left-7 md:left-10 w-[10px] md:w-[30px] bg-gray-500 h-[1px]'></span>
                                </div>
                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-gray-500'>5</span>
                                    <p className='absolute w-20 top-5 -left-2 md:block'>Last Page</p>
                                </div>
                            </div>
                        </div>
                        <h5 className='font-bold text-[13px] md:text-[20px] mt-5 mb-3'>Your estimated credit score? *</h5>
                        <div className='flex flex-col gap-1'>
                            <label className='text-gray-500'>
                                <input required
                                    type="radio"
                                    name="creditScore"
                                    value="More Than 740 (Excellent)"
                                    checked={formData.creditScore === "More Than 740 (Excellent)"}
                                    onChange={handleChange}
                                />{" "}
                                More Than 740 (Excellent)
                            </label>
                            <label className='text-gray-500' >
                                <input required
                                    type="radio"
                                    name="creditScore"
                                    value="680 - 739 (Good)"
                                    checked={formData.creditScore === "680 - 739 (Good)"}
                                    onChange={handleChange}
                                />{" "}
                                680 - 739 (Good)
                            </label>
                            <label className='text-gray-500' >
                                <input required
                                    type="radio"
                                    name="creditScore"
                                    value="Less Than 569 (Poor)"
                                    checked={formData.creditScore === "Less Than 569 (Poor)"}
                                    onChange={handleChange}
                                />{" "}
                                Less Than 569 (Poor)
                            </label>
                            <label className='text-gray-500' >
                                <input required
                                    type="radio"
                                    name="creditScore"
                                    value="I'm not sure"
                                    checked={formData.creditScore === "I'm not sure"}
                                    onChange={handleChange}
                                />{" "}
                                I'm not sure
                            </label>
                        </div>
                    </div>
                )}


                {step === 4 && (
                    <div>
                        <div className='flex gap-7 md:gap-14'>
                            <div className='text-[10px] flex flex-col items-center text-blue-600'>
                                <span className='w-5 h-5 flex items-center justify-center rounded-full border border-blue-600'>1</span>
                                <p className='font-bold'>Next</p>
                            </div>

                            <div className='text-[10px] flex flex-col items-center text-blue-600'>
                                <span className='w-5 h-5 flex items-center justify-center rounded-full border border-blue-600'>2</span>
                                <p className='font-bold'>Next</p>
                            </div>

                            <div className='text-[10px] flex flex-col items-center text-blue-600'>
                                <span className='w-5 h-5 flex items-center justify-center rounded-full border border-blue-600'>3</span>
                                <p className='font-bold'>Next</p>
                            </div>

                            <div className='text-[10px] flex flex-col relative items-center'>
                                <span className='w-5 h-5 flex items-center justify-center rounded-full border border-green-500'>4</span>
                                <p className='font-bold'>Next</p>
                                <span className='absolute top-3 left-5 w-[30px] md:w-[80px] bg-black h-[1px]'></span>
                            </div>

                            <div className='flex gap-12 md:ml-12'>
                                <div className='text-[10px] flex flex-col relative items-center mx-2'>
                                    <span className='w-5 h-5 flex items-center justify-center  rounded-full border border-gray-500'>5</span>
                                    <p className='absolute w-20 top-5 -left-2 md:block'>Last Page</p>
                                </div>
                            </div>
                        </div>

                        <h5 className='font-bold text-[13px] md:text-[20px] mt-5 mb-3'>Your Name *</h5>
                        <input required
                            className='border text-[12px] md:text-[14px] w-full border-gray-700 rounded-full px-5 py-2'
                            type="text"
                            name="name"
                            placeholder='Type Your Name'
                            value={formData.name}
                            onChange={handleChange}
                        />{" "}


                        <h5 className='font-bold text-[13px] md:text-[20px] mt-5 mb-3'>Address *</h5>
                        <div className='flex flex-col gap-2'>
                            <input required
                                className='border text-[12px] md:text-[14px] border-gray-700 rounded-full px-5 py-2'
                                type="text"
                                name="address"
                                placeholder='Street Address'
                                value={formData.address}
                                onChange={handleChange}
                            />{" "}

                            <input required
                                className='border text-[12px] md:text-[14px] border-gray-700 rounded-full px-5 py-2'
                                type="text"
                                name="city"
                                placeholder='City'
                                value={formData.city}
                                onChange={handleChange}
                            />{" "}

                            <input required
                                className='border text-[12px] md:text-[14px] border-gray-700 rounded-full px-5 py-2'
                                type="text"
                                name="zip"
                                placeholder='Zip'
                                value={formData.zip}
                                onChange={handleChange}
                            />{" "}

                            <input required
                                className='border text-[12px] md:text-[14px] border-gray-700 rounded-full px-5 py-2'
                                type="text"
                                name="state"
                                placeholder='State'
                                value={formData.state}
                                onChange={handleChange}
                            />{" "}
                        </div>
                    </div>
                )}


                {step === 5 && (
                    <div>
                        <div className='flex justify-between px-5 '>
                            <div className='text-[10px] flex flex-col items-center text-blue-600'>
                                <span className='w-5 h-5 flex items-center justify-center rounded-full border border-blue-600'>1</span>
                                <p className='font-bold'>Next</p>
                            </div>

                            <div className='text-[10px] flex flex-col items-center text-blue-600'>
                                <span className='w-5 h-5 flex items-center justify-center rounded-full border border-blue-600'>2</span>
                                <p className=' font-bold'>Next</p>
                            </div>

                            <div className='text-[10px] flex flex-col items-center text-blue-600'>
                                <span className='w-5 h-5 flex items-center justify-center rounded-full border border-blue-600'>3</span>
                                <p className='font-bold '>Next</p>
                            </div>
                            <div className='text-[10px] flex flex-col items-center text-blue-600'>
                                <span className='w-5 h-5 flex items-center justify-center rounded-full border border-blue-600'>4</span>
                                <p className=' font-bold'>Next</p>
                            </div>

                            <div className='text-[10px] flex flex-col relative items-center'>
                                <span className='w-5 h-5 flex items-center justify-center rounded-full border border-green-500'>5</span>
                                <p className='font-bold '>Last Page</p>
                            </div>
                        </div>

                        <h5 className='font-bold mt-5 mb-3 flex flex-col gap-3'>
                            <span className='text-[16px] md:text-[20px]'>One last thing...</span>
                            <span className='text-[13px] md:text-[20px]'>Contact *</span>
                        </h5>
                        <input required
                            className='border text-[12px] md:text-[14px] w-full border-gray-700 rounded-full px-5 py-2'
                            type="text"
                            name="phone"
                            placeholder='Phone Number'
                            value={formData.phone}
                            onChange={handleChange}
                        />{" "}


                        <h5 className='font-bold text-[13px] md:text-[20px] mt-5 mb-3'>Preferred time of calling? *</h5>
                        <div className='flex flex-col gap-1'>
                            <label className='md:text-gray-500'>
                                <input required
                                    type="radio"
                                    name="calling_time"
                                    value="9 AM - 11 AM"
                                    checked={formData.calling_time === "9 AM - 11 AM"}
                                    onChange={handleChange}
                                />{" "}
                                9 AM - 11 AM
                            </label>
                            <label className='md:text-gray-500' >
                                <input required
                                    type="radio"
                                    name="calling_time"
                                    value="6 PM - 8 PM"
                                    checked={formData.calling_time === "6 PM - 8 PM"}
                                    onChange={handleChange}
                                />{" "}
                                6 PM - 8 PM
                            </label>
                            <label className='md:text-gray-500' >
                                <input required
                                    type="radio"
                                    name="calling_time"
                                    value="I'm available to pick anytime"
                                    checked={formData.calling_time === "I'm available to pick anytime"}
                                    onChange={handleChange}
                                />{" "}
                                I'm available to pick anytime
                            </label>
                        </div>
                    </div>
                )}

                <div className='w-full flex justify-center gap-3 md:gap-5 mb-2 md:mb-14'>
                    {step > 1 && step != 5 && <button onClick={prevStep} style={{ fontFamily: "'Space Grotesk', sans-serif" }} className=' hover:bg-[#033E8A] text-[#033E8A] border border-[#033E8A] transition-all duration-300 ease-in-out font-semibold text-sm hover:text-white px-5 md:px-12 py-2 md:py-3.5 rounded-full' >Back</button>}
                    {step < 5 && <button onClick={nextStep} style={{ fontFamily: "'Space Grotesk', sans-serif" }} className=' bg-[#033E8A] hover:bg-white hover:text-[#033E8A] border hover:border-[#033E8A] transition-all duration-300 ease-in-out font-semibold text-sm text-white px-12 md:px-32 py-2 md:py-3.5 rounded-full' >Next</button>}
                    {step === 5 && <Link to='/thank-you' style={{ fontFamily: "'Space Grotesk', sans-serif" }} className=' bg-[#033E8A] hover:bg-white hover:text-[#033E8A] border hover:border-[#033E8A] transition-all duration-300 ease-in-out font-semibold text-sm text-white px-24 md:px-32 py-2 md:py-3.5 rounded-full' >Submit</Link>}
                </div>
            </div>
        </section>
    )
}

export default FormCard