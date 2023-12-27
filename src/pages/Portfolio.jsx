import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const Portfolio = () => {
  return (
    <>
      <div className='mt-20 flex flex-wrap gap-10'>
        Portfolio Page
      </div>
    </>
  );
};

export default SectionWrapper(Portfolio, "about");
