import React, {useEffect} from "react";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { pixarProjects } from "../constants";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard  from "../utils/ProjectCard"

const Pixar = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
    <>
      <div variants={textVariant()}>
        {/* <h2 className={`${styles.sectionHeadText}`}>Portfolio</h2> */}
        {/* <h1>Selected works for Pixar Animation Technician Intern Application</h1> */}
        {/* <h1>Note: This is a hidden webpage. If you navigate to other parts of this website, you won't be able to get back to this page. </h1> */}
      </div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {pixarProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Pixar, "about");
