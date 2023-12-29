import React from "react";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard  from "../utils/ProjectCard"

const Portfolio = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Portfolio</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Portfolio, "about");
