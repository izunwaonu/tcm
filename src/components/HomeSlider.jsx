// import React, { useState, useEffect } from 'react'
// // import Slider1 from "../assets/Slide1.png";
// import Slider2 from "../assets/Slide2.png";
// import Slider3 from "../assets/Slide3.png";

// import styles from '../style'

// const HomeSlider = () => {

//     const images =[
//         Slider1,
//         Slider2,
//         Slider3
//     ]
//     const [backgroundImage, setBackgroundImage] = useState(images[0])

// useEffect(() => {
//     let currentIndex = 0;

//    const changeBackgroundImage = () => {
//         currentIndex = (currentIndex + 1) % images.length;
//         setBackgroundImage(images[currentIndex])
       
//     }
//     const interval = setInterval(changeBackgroundImage,5000)
//         return()=>{
//             clearInterval(interval);
//         }
// })
//   return (
//     <section className={`${styles.flexCenter} 
//     bg-fixed bg-cover bg-center`} 
//     style={{backgroundImage:`url(${backgroundImage})`, transition:'1s' }}>
//     <div className={`${styles.flexCenter} flex-wrap w-full`}>
//         <img src={backgroundImage} alt="tcm" className='shadow-xl'/>

//       {/* {clients.map((client) => (
//         <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
//           <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
//         </div>
//       ))} */}
//     </div>
//   </section>

//   )
// }

// export default HomeSlider