import React, { useEffect } from 'react'
import Slider from '../Slider'
import styles from "../../style";
import ProductHome from '../ProductHome';
import Hero from '../Hero';
import Vision from '../Vision';
import Stats from '../Stats';
import Business from '../Business';
import Testimonials from '../Testimonials';
import CTA from '../CTA';
import "aos/dist/aos.css";
import AOS from "aos";

const Home = () => {
   
    useEffect(()=>{
        AOS.init(
          {
            offset: 100,
            duration: 500,
            easing: "ease-in-sine",
            delay: 100,
          }
        );
        AOS.refresh();
      
      },[])
  return (
    <>
    <div className={`${styles.paddingX} ${styles.flexCenter} mt-[70px] bg-white dark:bg-slate-900`}>
      <div className={`${styles.boxWidth}`}>
      <Slider/> 
      </div>
    </div>
    
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-gray-300 dark:bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <ProductHome/>
      </div>
    </div>
    

    <div className={`bg-white dark:bg-slate-900 ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-gray-300 dark:bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Vision/>
      </div>
    </div>
    
    <div className={`bg-white dark:bg-slate-900 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Stats />
      </div>
    </div>
   
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-gray-300 dark:bg-primary`}>
      <div className={`${styles.boxWidth}`}>
      <Business />    
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}bg-white dark:bg-slate-900`}>
      <div className={`${styles.boxWidth}`}>
      <Testimonials />   
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter} bg-gray-300 dark:bg-primary`}>
      <div className={`${styles.boxWidth}`}>
      <CTA />   
      </div>
    </div>
    </>
  )
}

export default Home