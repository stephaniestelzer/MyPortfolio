import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const Paramount = () => {
  return (
    <>
      <div className="flex justify-center items-center text-black text-[50px] font-bold pt-20 pb-10">Paramount</div>
    </>
  );
};

export default SectionWrapper(Paramount, "paramount");
