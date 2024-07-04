import React from 'react'
import "../style/Contact.css"
const ContactUs = () => {
    return (
        <>
            <div className='mt-10'></div>
            <hr />
            <div className='mt-16 flex justify-around'>
                <div className='text-[65px] font-semibold mx-10 w-[40%] text-slate-500'>
                    Contact Us
                    <div className='mt-2 text-[18px] font-[500]'>
                        We just do more than just connect with the clients, we relate to their business and try to provide them with the best possible cost-effective solution.
                    </div>
                </div>
                <div className=' w-[50%]'>
                    <form className='flex flex-col gap-2 border border-slate-400 p-3 h-[62vh] contact-form'>
                        <div className='flex gap-2 mb-4'>
                            <div className='w-[50%] form-up'>
                                <label className='text-[3.0vh] contact-label'>First Name</label>
                                <input type='text' placeholder='First Name' className='block w-full p-2 border border-gray-300 rounded-md h-[7vh] text-[3vh]' />
                            </div>
                            <div className='w-[50%] form-up'>
                                <label className='text-[3.0vh] contact-label'>Last Name</label>
                                <input type='text' placeholder='Last Name' className='block w-full p-2 border border-gray-300 rounded-md h-[7vh] text-[3vh]' />

                            </div>
                        </div>
                        <div className='flex gap-2 mb-4'>
                            <div className='w-[50%] form-up'>
                                <label className='text-[3.0vh] contact-label'>Phone Number</label>
                                <input type='number' placeholder='Ph. No.' className='block w-full p-2 border border-gray-300 rounded-md h-[7vh] text-[3vh]' />
                            </div>
                            <div className='w-[50%] form-up'>
                                <label className='text-[3.0vh] contact-label'>Mail</label>
                                <input type='text' placeholder='Mail Id' className='block w-full p-2 border border-gray-300 rounded-md h-[7vh] text-[3vh]' />

                            </div>
                        </div>
                        <div className='flex gap-2 mb-4'>
                            <div className='w-[50%] form-up'>
                                <label className='text-[3.0vh] contact-label'>Company Name</label>
                                <input type='text' placeholder='Company Name' className='block w-full p-2 border border-gray-300 rounded-md h-[7vh] text-[3vh]' />
                            </div>
                            <div className='w-[50%] form-up'>
                                <label className='text-[3.0vh] contact-label'>Website URL</label>
                                <input type='text' placeholder='Website URL' className='block w-full p-2 border border-gray-300 rounded-md h-[7vh] text-[3vh]' />

                            </div>
                        </div>
                        <div className='bg-blue-700 border text-[25px] hover:shadow-lg shadow-md hover:cursor-pointer text-slate-100 font-semibold p-4 px-8 w-[25%] text-center'>
                            Submit
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs