import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold dark:text-white text-slate-900 text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal dark:text-white text-slate-900 text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}  dark:text-white text-slate-900`}>
      Our Products  <br className="sm:block hidden" /> & Services
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5  dark:text-white text-slate-900`}>
      We Import and deliver complete motorcycle parts to various machine part markets and dealers nationwide.

        We also produce all forms of Adhesives and Gums 
        ranging from superglues to epoxy resins, silicone sealants, 
        contact adhesives, pressure 
        adhesives and different car care units all at affordable market prices.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col `}>
      {features.map((feature, index) => (
        <FeatureCard className=" dark:text-white text-slate-900" key={feature.id} {...feature} index={index}  />
      ))}
    </div>
  </section>
);

export default Business;
