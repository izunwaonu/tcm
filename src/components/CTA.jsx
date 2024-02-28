import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div 
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500"
    className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Discover our exceptional products today!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      From top-quality parts to exceptional customer service, 
      everything you need for your motorcycle is right here at TCM
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
