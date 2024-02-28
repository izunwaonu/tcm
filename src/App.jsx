import { useEffect } from "react";
import styles from "./style";
import {Business, CTA, Footer, Stats, Testimonials, Hero } from "./components";
import Slider from "./components/Slider";
import NavBarMain from "./components/NavBarMain";
import Vision from "./components/Vision";
import ProductHome from "./components/ProductHome";
import "aos/dist/aos.css";
import AOS from "aos";

const App = () => {
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
  
  return(
  
  <div className="bg-white w-full overflow-hidden">  
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary fixed top-0 left-0 sm:w-auto right-0 z-[99] w-full `}>
      <div className={`${styles.boxWidth}`}>
      <NavBarMain/> 
      </div>
    </div>
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
    <div className={`bg-slate-900 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>     
        <Footer />
      </div>
    </div>
  </div>
)};

export default App;
