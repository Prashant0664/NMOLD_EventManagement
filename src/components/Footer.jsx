import React from 'react'
import Logo from '../assets/Logo.png'
import "../style/Footer.css"
import BG from "../assets/Hero-img.jpg"
const Footer = () => {
  return (
    <>
      <div className='mt-10 bg-black h-[49vh] block bottom-0 footer-main'>
        <div className='footer-bg-img h-full bg-black z-[1]'>
          <img src={BG} className='opacity-[40%]' />
        </div>
        <div className='h-full z-[10] relative'>
          <div className=''>

            <div className='flex justify-evenly text-white h-full pt-[5rem]'>
              <img src={Logo} alt="" className='h-[40px] w-[90px]' />
              <div className='font-semibold flex flex-col items-center'>
                <div className='text-[23px] font-semibold'>
                  Useful Links
                </div>
                <ul style={{ listStyleType: "disc" }}>
                  <li className='hover:cursor-pointer hover:scale-105 text-slate-200'>About Us</li>
                  <li className='hover:cursor-pointer hover:scale-105 text-slate-200'>Our Services</li>
                  <li className='hover:cursor-pointer hover:scale-105 text-slate-200'>Testimonials</li>
                  <li className='hover:cursor-pointer hover:scale-105 text-slate-200'>Find Us</li>
                </ul>
              </div>

              <div className='font-semibold flex flex-col items-left'>
                <div className='text-[23px] font-semibold mb-1'>
                  Conatct Us
                </div>
                <div className=''>
                  <div className='text-slate-300 text-[14px]'>
                    46. The queen's walk Street, San Antonio 78154.
                  </div>
                  <div className='mb-2 mt-6'>
                    +98 7654 8765
                  </div>
                  <div className='mb-2'>
                    ijwecbew@gmail.com
                  </div>
                </div>
              </div>
              <div className='font-semibold flex flex-col items-left'>
              <div className='text-[23px] font-semibold mb-4'>
                  Email Unsubscribe
                </div>
                <div className='text-slate-300 text-[14px]'>
                  Your email address
                </div>
                <form className='mt-5 flex'>
                  <input
                    type="email"
                    placeholder='email@mail.com'
                    className='footer-ubn-d'
                  />
                  <div className='bg-slate-700 rounded-lg text-center w-[70%] p-1'>
                    Unsubscribe
                  </div>
                </form>
              </div>
            </div>
            <div className='w-full'>

            <div className='text-white font-semibold items-center text-center justify-center content-center mt-10'>
              <div className='text-slate-300'>
                Copyright @2023 Developed by Prashant
              </div>
              <div className='text-slate-300'>
                Privacy Policy Terms and Conditions
              </div>
            </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer