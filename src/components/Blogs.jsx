import React from 'react'
import '../style/Services.css'
import '../style/Blog.css'
import Logo from '../assets/Logo.png'
import BG from "../assets/Hero-img.jpg"
const Blogs = () => {
    return (
        <>
            <div className='w-full blog-main h-[100vh] relative'>
            <div className='absolute w-full h-full blogs-sub-img'>

            </div>
                <div className='text-[35px] text-center font-bold text-white z-[1000] relative pt-10'>
                    OUR BLOGS
                </div>
                <br />
                <div className='blog-card-main'>
                <div className='p-12 pt-2 px-2  relative rounded-lg border-[1px]  text-center blog-card w-[95%] h-[100%]'>
                        <img src={BG} alt='Logo' className='w-full h-[280px] border-[1px] p-0 text-center justify-center items-center rounded-lg' />
                        <div className='absolute top-0 right-0 p-2 bg-[#f7d200] mt-4 mx-4 shadow-lg rounded-lg'>
                            12 June, 2023
                        </div>
                        <div className='text-[13px] mt-2 text-left underline-offset-1 text-blue-500 font-semibold'>
                            Destination Wedding
                        </div>
                        <div className=' text-left mt-2 text-[20px] head-blog'>
                            The Latest Trends In Indian Wedding Decor For 2024
                        </div>
                        <div className='text-[14px] text-justify mt-2'>
                            Latest Trends in Indian Wedding Decor
                            Indian weddings are known for their grandeur, vibrancy, and [...]
                        </div>
                        <div className='flex w-[100%] justify-evenly'>
                            <div className='border bg-slate-100 bg-opacity-65 bg-none p-1 rounded-lg px-2 text-center border-black hover:cursor-pointer hover:text-white hover:bg-slate-500 mt-5 w-[60%]'>
                                More Information
                            </div>
                        </div>
                    </div>
                    <div className='p-12 pt-2 px-2  relative rounded-lg border-[1px]  text-center blog-card w-[95%] h-[100%]'>
                        <img src={BG} alt='Logo' className='w-full h-[280px] border-[1px] p-0 text-center justify-center items-center rounded-lg' />
                        <div className='absolute top-0 right-0 p-2 bg-[#f7d200] mt-4 mx-4 shadow-lg rounded-lg'>
                            12 June, 2023
                        </div>
                        <div className='text-[13px] mt-2 text-left underline-offset-1 text-blue-500 font-semibold'>
                            Destination Wedding
                        </div>
                        <div className=' text-left mt-2 text-[20px] head-blog'>
                            The Latest Trends In Indian Wedding Decor For 2024
                        </div>
                        <div className='text-[14px] text-justify mt-2'>
                            Latest Trends in Indian Wedding Decor
                            Indian weddings are known for their grandeur, vibrancy, and [...]
                        </div>
                        <div className='flex w-[100%] justify-evenly'>
                            <div className='border bg-slate-100 bg-opacity-65 bg-none p-1 rounded-lg px-2 text-center border-black hover:cursor-pointer hover:text-white hover:bg-slate-500 mt-5 w-[60%]'>
                                More Information
                            </div>
                        </div>
                    </div>
                    <div className='p-12 pt-2 px-2  relative rounded-lg border-[1px]  text-center blog-card w-[95%] h-[100%]'>
                        <img src={BG} alt='Logo' className='w-full h-[280px] border-[1px] p-0 text-center justify-center items-center rounded-lg' />
                        <div className='absolute top-0 right-0 p-2 bg-[#f7d200] mt-4 mx-4 shadow-lg rounded-lg'>
                            12 June, 2023
                        </div>
                        <div className='text-[13px] mt-2 text-left underline-offset-1 text-blue-500 font-semibold'>
                            Destination Wedding
                        </div>
                        <div className=' text-left mt-2 text-[20px] head-blog'>
                            The Latest Trends In Indian Wedding Decor For 2024
                        </div>
                        <div className='text-[14px] text-justify mt-2'>
                            Latest Trends in Indian Wedding Decor
                            Indian weddings are known for their grandeur, vibrancy, and [...]
                        </div>
                        <div className='flex w-[100%] justify-evenly'>
                            <div className='border bg-slate-100 bg-opacity-65 bg-none p-1 rounded-lg px-2 text-center border-black hover:cursor-pointer hover:text-white hover:bg-slate-500 mt-5 w-[60%]'>
                                More Information
                            </div>
                        </div>
                    </div>

                    

                </div>

            </div>
        </>
    )
}

export default Blogs