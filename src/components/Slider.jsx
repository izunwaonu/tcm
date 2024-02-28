import React from 'react'
import { TECarousel, TECarouselItem } from "tw-elements-react";
import TCM1 from "../assets/tcm1.png";
import TCM2 from "../assets/tcm33.png";
import TCM3 from "../assets/tcm22.png";
import TCM4 from "../assets/tcm4.jpg";




const Slider = () => {
    

  return (
    <div className="mb-4 mt-2">
      <TECarousel showControls showIndicators ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={TCM2}
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <h5 className="  p-0 sm:p-4 sm:m-1 m-2 sm:text-xl text-sm "> <span className='bg-yellow-600 px-1 rounded-xl'>TESKA C.</span> MERCHANDISE CO.LTD</h5>
              <p>
              ..leading importer of motorcycle parts and general merchandise.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
             src={TCM3}
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5  py-5 text-center text-white md:block">
              <h5 className="text-xl">Second slide label</h5>
              <p>
              ...leading importer of motorcycle parts and general merchandise.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={TCM4}
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
  

    
     </div>
  )
}

export default Slider