import React, { useState, useEffect } from 'react'
import Slider01 from "../assets/slider01.png"
import Slider02 from "../assets/slider02.png"
import Slider03 from "../assets/slider03.png"
import FirstHero from './FirstHero'
import styles from '../style'
import HomeSlider from './HomeSlider'

const Slider = () => {
    const images =[
        Slider01,
        Slider02,
        Slider03
    ]

const [backgroundImage, setBackgroundImage] = useState(images[0])

useEffect(() => {
    let currentIndex = 0;

   const changeBackgroundImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        setBackgroundImage(images[currentIndex])
       
    }
    const interval = setInterval(changeBackgroundImage,1000)
        return()=>{
            clearInterval(interval);
        }
})

  return (
    <>
     <section className={`${styles.flexCenter} bg-fixed bg-cover bg-center backdrop-brightness-50`} style={{backgroundImage:`url(${backgroundImage})`, transition:'1s'}}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
        
        <div>
        
        </div>
      {/* {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))} */}
    </div>
  </section>

    {/* <div className='' 
    >
        <div className='my-4 flex items-center flex-row flex-wrap sm:mb-20 mb-6'>
            

        

        </div>
    </div> */}
    </>
  )
}

export default Slider