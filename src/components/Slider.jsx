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
              <h5 className=" text-sm sm:text-xl "> <span>TESKA C.</span> MERCHANDISE CO.LTD</h5>
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
              <h5 className="text-xl">We Are Trusted</h5>
              <p>
              Professional choice in motorcycle spare parts.
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
            <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <h5 className="text-xl">TCM and GIWA</h5>
              <p>
              Certified and Approved by the Standard organisation of Nigeria(SON).
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
  

    
     </div>
  )
}

export default Slider