import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Log from "../assets/caro1.jpg";

const Hero = () => {
  return (
    <section id="home" className={` mt-2 flex md:flex-row flex-col ${styles.paddingY}`}>
      <div data-aos="zoom-in-up" className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          {/* <img src={discount} alt="discount" className="w-[32px] h-[32px]" /> */}
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">TESKA C</span> MERCHANDICE{" "}
            <span className="text-white">CO</span> LTD
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-slate-950 dark:text-white ss:leading-[100.8px] leading-[75px]">
            Over <br className="sm:block hidden" />{" "}
            <span className="text-gradient"> 20 Years</span>{" "}
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px]  text-slate-950 dark:text-white ss:leading-[100.8px] leading-[75px] w-full">
          Experience
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5  text-slate-950 dark:text-white`}>
        Teska C. Merchandise Co., Ltd is a leading importer 
        of motorcycle parts and general mechandise. Our goal 
        at TCM is to maintain long-lasting relationshps with 
        our customers based on exceptional customer service 
        and cost-effective solutions 
        that meet and exceed our customer's expectations. We look forward to serving you.
        </p>
      </div>

      <div data-aos="zoom-in"  className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={Log} alt="" className="w-[100%] h-[100%] relative z-[5] shadow-inner rounded-full p-4" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
