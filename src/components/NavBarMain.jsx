import React, { useEffect, useState } from 'react';
import styles from "../style";
import Logo2 from "../assets/tcm-logo2.png";
import {BiPhoneCall, BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { Link } from 'react-router-dom';
import {HiMenuAlt1, HiMenuAlt3} from "react-icons/hi";
import NavBarResponsive from './NavBarResponsive';




const NavBarMain = () => {
   const [theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme") : 'light');
   const [showMenu, setShowMenu] = useState('false')
   const element = document.documentElement;
   
  
   useEffect(() => {
      if(theme==="dark") {
        element.classList.add('dark');
        localStorage.setItem("theme", "dark");
      }else{
        element.classList.remove('dark');
        localStorage.removeItem("theme");
      }
    },[theme]);

    const toggleMenu = ()=>{
      setShowMenu(!showMenu);
    }
  
  return (
    <header className=''>
    <nav  id="header" className=" flex items-center justify-between h-[70px]  bg-primary shadow-lg border-b border-yellow-600 ">
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
                               {/* Mobile menu Header */}

    <NavBarResponsive showMenu={showMenu}/>

         {/* <label for="menu-toggle" class="cursor-pointer md:hidden block">
            <svg className="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
               <title>menu</title>
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
         </label> */}
         <input className="hidden" type="checkbox" id="menu-toggle"/>
         
         <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav  className='flex items-center'>
            <div>
               <a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#"><img className='w-[128px] h-[42px]' src={Logo2} alt=""/>
               </a>
            </div>
               <ul className="md:flex items-center justify-end text-base text-white pt-2 md:pt-0">
                 
                  <li><Link className="inline-block no-underline hover:text-yellow-600 font-medium text-lg py-2 px-4 lg:-ml-2" to="/">Home</Link></li>
                  <li><Link className="inline-block no-underline hover:text-yellow-600 font-medium text-lg py-2 px-4 lg:-ml-2" to="/product">Products</Link></li>
                  <li><Link className="inline-block no-underline hover:text-yellow-600 font-medium text-lg py-2 px-4 lg:-ml-2" to="/about">About</Link></li>
                  <li><Link className="inline-block no-underline hover:text-yellow-600 font-medium text-lg py-2 px-4 lg:-ml-2" to="/contact">Contact Us</Link>
                  </li>
                  <li>
                     <div className='flex gap-4'>
                        <div className='flex items-center '>
                              <div>
                                 <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white bg-primary hover:bg-primary/90"/>
                              </div>
                              <div>
                                 <p className=' text-white'>Call us on</p>
                                 <p className=' text-white'><a href='tell: +2348030886778'> +2348030886778</a> </p>  
                              </div>
                        </div>
                        <a class="bg-yellow-700 text-gray-200  p-2 rounded  hover:bg-yellow-500 hover:text-gray-100">Get Quote</a>
                     </div>
                  </li>
                  
               </ul>
                      {/* Mobile menu Header */}
       {/* <div className="flex items-center gap-4 ">
       
          {
            showMenu? 
            <HiMenuAlt1
            
            onClick={toggleMenu}
            className='cursor-pointer text-white transition-all'
            size={30}
            />: 
            <HiMenuAlt3
            onClick={toggleMenu}
            className='cursor-pointer text-white transition-all'
            size={30}
            />
          }
       </div> */}

            </nav>
         </div>
         
         <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div class="auth flex items-center w-full md:w-full gap-4">
   {/* Phone Contact in the Menu */}
         
               {/* Changing of Theme */}
          <div>
          {
            theme==='dark' ? (
              <BiSolidSun 
              className='text-2xl text-white' 
              onClick={()=> 
                setTheme('light')}/>
            ): (
              <BiSolidMoon 
              className='text-2xl text-white' 
              onClick={()=> 
                setTheme('dark')}/>
            )
          }  
          </div>
          
            </div>
         </div>
      </div>
      <div className="items-center cursor-pointer md:hidden block gap-4 ">
       
       {
         showMenu? 
         <HiMenuAlt1
         
         onClick={toggleMenu}
         className='cursor-pointer text-white transition-all'
         size={30}
         />: 
         <HiMenuAlt3
         onClick={toggleMenu}
         className='cursor-pointer text-white transition-all'
         size={30}
         />
       }
      </div>
   </nav>
   
    </header>
  )
}

export default NavBarMain