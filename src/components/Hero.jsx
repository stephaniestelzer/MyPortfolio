import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-[50vh] mx-auto bg-white`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center justify-center`}
      >
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            <span className="font-bold">Stephanie Stelzer</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            using art and technology to create meaningful experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
