import React from 'react';
import TCM1 from '../assets/tcm1.jpeg';

const HeroMain = () => {
  return (
    <>
    
<div class="relative z-20 flex items-center  bg-white dark:bg-gray-800">
    <div className="container relative flex px-6 py-16 mx-auto">
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white">
            </span>
            <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
            Teska C. 
                <span className="text-5xl sm:text-7xl">
                Merchandise Co.Ltd
                </span>
            </h1>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white">
            The leading importer of motorcycle parts and general merchandise.
            Professional choice in motorcycle spare parts.
            Certified and Approved by the Standard organisation of Nigeria(SON).
            </p>
            <div className="flex mt-8">
                <a className="#" class="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400">
                    Download Brochure
                </a>
                <a href="#" className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md">
                    Read more
                </a>
            </div>
        </div>
        <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            <img src={TCM1} alt="izunwaonu" className="max-w-xs m-auto md:max-w-sm"/>
        </div>
    </div>
</div>

        
    </>
  )
}

export default HeroMain