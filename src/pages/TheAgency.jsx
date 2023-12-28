import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const TheAgency = () => {
  return (
    <>
      <div className="flex justify-center items-center text-black text-[50px] font-bold pt-20 pb-10">The Agency at UF</div>

    </>
  );
};

export default SectionWrapper(TheAgency, "paramount");
