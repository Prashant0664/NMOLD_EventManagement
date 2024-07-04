import React from 'react'
import Logo from "../assets/Logo.png"
import '../style/navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className='h-[100px] background'>
        <div className='flex h-full justify-evenly items-center text-center content-center self-center place-content-center'>
          <div className='flex w-full justify-evenly items-center'>
            <div className='menu-title' onClick={()=>{navigate("/about")}}>
              ABOUT
            </div>
            <div className='menu-title' onClick={()=>{navigate("/services")}}>
              SERVICES
            </div>
            <div className='menu-title' onClick={()=>{navigate("/pricing")}}>
              PRICING
            </div>
          {/* </div> */}
          {/* <div className='w-full justify-center text-center flex'> */}
          
            <img src={Logo} alt="" className='h-[60px] w-[200px]'  onClick={()=>{navigate("/")}}/>
          {/* </div> */}
          {/* <div className='flex justify-evenly w-full ml-[-10rem]'> */}
            <div className='menu-title' onClick={()=>{navigate("/gallery")}}>
              GALLERY
            </div> 
            <div className='menu-title' onClick={()=>{navigate("/about")}}>
              CONTACT US
            </div>
            <div className='menu-title' onClick={()=>{navigate("/blogs")}}>
              BLOGS
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar
// import React from 'react';
// import './Navbar.css'; // Import your CSS file

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="container">
//         <a href="/" className="logo">
//           <img src="your-logo.png" alt="Adornment Events" /> {/* Replace with your logo */}
//         </a>
//         <ul className="nav-links">
//           <li>
//             <a href="/about">ABOUT</a>
//           </li>
//           <li>
//             <a href="/services">SERVICES</a>
//           </li>
//           <li>
//             <a href="/kind-words">KIND WORDS</a>
//           </li>
//           <li>
//             <a href="/gallery">GALLERY</a>
//           </li>
//           <li>
//             <a href="/bubbly-bar">BUBBLY BAR</a>
//           </li>
//           <li>
//             <a href="/contact">CONTACT</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;