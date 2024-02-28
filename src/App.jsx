import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import HeroTwo from "./components/HeroTwo";
import Slider from "./components/Slider";
import Locations from "./components/Locations";
// import HomeSlider from "./components/HomeSlider";
import NavBarMain from "./components/NavBarMain";
import HeroMain from "./components/HeroMain";
import Vision from "./components/Vision";
import ProductHome from "./components/ProductHome";

const App = () => (
  
  <div className="bg-white w-full overflow-hidden">  
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-white`}>
      <div className={`${styles.boxWidth}`}>
      <NavBarMain/> 
        {/* <Navbar /> */}
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-slate-900`}>
      <div className={`${styles.boxWidth}`}>
        <Slider/>  
        <ProductHome/>
      </div>
    </div>
  

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Vision/>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />     
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
