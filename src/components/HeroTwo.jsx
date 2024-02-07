import React from 'react'

const HeroTwo = () => {
  return (
    <>
    <div className='h-[650px] bg-gradient-to-r md:h-[500px] from-green-950 to-green-900 pt-20'>
      <section className='container flex flex-col items-center justify-between'>
        <div className='grid grid-cols-1 md:grid-cols-2  items-center gap-8 text-white'>
          {/* Hero text Container */}
          <div
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-one="true"
          className='flex flex-col items-center text-center gap-4 md:items-start md:text-left'>
            <h1 className=' text-2xl md:text-4xl'>TESKA C. MERCHANDICE CO. LTD</h1>
            <p className=' text-l text-white dark:text-slate-400'>
            We stand at the forefront of 
            the import and export landscape, specializing in General 
            Vehicle Goods. As a distinguished importer and exporter, 
            we are dedicated to providing high-quality automotive products, 
            ranging from precision-engineered vehicle parts to cutting-edge 
            accessories. Our commitment to excellence and innovation sets us apart, 
            ensuring that clients receive top-tier merchandise that enhances the performance, 
            aesthetics, and functionality of their vehicles...
            </p>
              <div className='space-x-4'>
                <button className='btn-primary '>Read More</button>
                <button className='btn-outlined target="_new'>Download Brochure</button>
              </div>
          </div>
          {/* Hero image Container */}
          {/* <div
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-one="true"
          
          >
            <img src={HeroImg} alt='not found' className=''/>
          </div> */}
        </div>
      </section>
    </div>
    </>
  )
}

export default HeroTwo