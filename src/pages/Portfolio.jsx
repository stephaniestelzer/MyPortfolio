import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import Works from "../components/Works";


const Portfolio = () => {
  return (
    <>
      <div className='mt-20 flex flex-wrap gap-10'>
        <Works />
      </div>
    </>
  );
};

export default SectionWrapper(Portfolio, "about");
