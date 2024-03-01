import React from "react";
import styles from "./style";
import { Footer } from "./components";
import NavBarMain from "./components/NavBarMain";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Product from "./components/products/Product";
import ContactUs from "./components/contact/ContactUs";
import NavBarResponsive from "./components/NavBarResponsive";



const App = () => {
  
  
  return(
  
<BrowserRouter >
<div className="bg-white w-full overflow-hidden" >
<div className={`${styles.paddingX} ${styles.flexCenter} bg-primary fixed top-0 left-0 sm:w-auto right-0 z-[99] w-full `}>
      <div className={`${styles.boxWidth}`}>
      <NavBarMain/> 
      </div>
</div>
<Routes>
  
          
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/izu" element={ <NavBarResponsive/>} />
         
        
        
  </Routes>
  <div className={`bg-slate-900 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>  
       {/* <Scroll/>    */}
        <Footer />
        
  </div>
    </div>
  </div>
  
  </BrowserRouter>

)};

export default App;
