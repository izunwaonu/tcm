import React from 'react'

const FirstHero = () => {
  return (
    <>
    <div className="grid">
        <div className="bg-slate-200 m-4 p-4"> 
            <h1 className="text-bold bg-orange-400 text-sm sm:text-3xl  p-5">Welcome to Teska C. Merchandise Co. Ltd</h1>
            <p className='pt-4 pb-4 text-sm sm:text-xl'>
            ...a rich legacy of 
            automotive excellence meets cutting-edge innovation. Since our inception, 
            we've been at the forefront of manufacturing and selling auto components, 
            specializing in tires, oil, and gears for transmission, differential, and 
            engine systems. With a steadfast commitment to quality and customer satisfaction, 
            we've built a reputation for reliability and integrity in the industry. 

            
            
            </p>
            <button className=' rounded-md border-2 border-orange-400 bg-dimWhite px-4 py-2 text-sm sm:text-xl text-slate-700 transition-colors
        duration-300 hover:text-white hover:bg-primary/80'>Read More</button>
        </div>

    </div>
    </>
  )
}

export default FirstHero