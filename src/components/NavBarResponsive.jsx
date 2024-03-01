import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import Logo from "../assets/tcm-logo2.png"
import { Link } from 'react-router-dom'
import {BiPhoneCall, BiSolidSun, BiSolidMoon } from "react-icons/bi";

const NavBarResponsive = ({showMenu}) => {
  return (
    <>
    <div className={`${showMenu?  "-left-[100%]" : "left-0" }
     h-screen w-[75%] bg-slate-950 fixed 
     top-0 z-50 transition-all duration-500 pt-24 ps-8 flex flex-col justify-between text-white`}>
        
        <div>
            <div className='flex items-center justify-start gap-3'>
                {/* <FaUserCircle size={50}/> */}
                
                <div>
                    <img src={Logo} alt="logo" className="h-[50px] w-[150px] pt-4 mb-4"/>
                    <h1 className='text-sm text-slate-500'>TESKA C. MERCHANDISE CO.LTD</h1>
                </div>

            </div>
            <nav className='mt-12'>
                <ul className='space-y-4 text-xl'>
                <li onClick={(!showMenu)}><Link  className="inline-block no-underline hover:text-yellow-600 font-medium text-lg py-2 px-4 lg:-ml-2" to="/">Home</Link></li>
                  <li onClick={(!showMenu)}><Link className="inline-block no-underline hover:text-yellow-600 font-medium text-lg py-2 px-4 lg:-ml-2" to="/product">Products</Link></li>
                  <li onClick={(!showMenu)}><Link className="inline-block no-underline hover:text-yellow-600 font-medium text-lg py-2 px-4 lg:-ml-2" to="/about">About</Link></li>
                  <li onClick={(!showMenu)}><Link className="inline-block no-underline hover:text-yellow-600 font-medium text-lg py-2 px-4 lg:-ml-2" to="/contact">Contact Us</Link>
                  </li>
                  <li>
                     <div className='flex gap-4'>
                        <div className='flex  items-center '>
                              <div>
                                 <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white bg-primary hover:bg-primary/90"/>
                              </div>
                              <div>
                                 <p className=' text-white'>Call us on</p>
                                 <p className=' text-white mb-6'><a href='tell: +2348030886778'> +2348030886778</a> </p> 
                                 <Link className="bg-yellow-700 text-gray-200 my-3 p-2 rounded  hover:bg-yellow-500 hover:text-gray-100">Get Quote</Link>
                              </div>
                              <div>
                              
                              </div>
                             
                        </div>
                        
                     </div>
                  </li>
                </ul>
            </nav>
        </div>
        <div className="footer">
            <h1> @copyright 2024 TCM | All Rights Reserved <Link to="/">TCM</Link> </h1> 
            
        </div>
     </div>
    </>
  )
}

export default NavBarResponsive