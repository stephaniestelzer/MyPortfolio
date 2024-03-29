import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experienceCards } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import TechIcon from "./TechIcon";

const ExperienceCard = ( {
  index, 
  companyName,
  title,
  icon,
  link,
  techStack,
  description,
} ) => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
    <motion.div variants={fadeIn()} className="grid grid-cols-2 gap-4 w-full py-8">
      <div>
        <div className="flex pb-4">
          {/* Company and description */}
          <img className="tech-icon-img pr-4" src={icon}/>
          <div>
            <h1 className="company-title mt-2">{companyName}</h1>
            <h1 className="position-title mt-2">{title}</h1>
          </div>
        </div>
        <p className="description-text pt-5">{description}</p>
      </div>
      <div className="pt-5 ml-10">
        {/* tech and learn more */}
        <div className="flex flex-wrap gap-10 justify-center">
          {techStack.map((tag, tagIndex) => (
            <div key={`tech-${index}-${tagIndex}`}>
              <TechIcon key={`${tag.name}`} tech={tag.icon} techName={tag.name}/>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end pt-10 description-text">
          <Link to={`${link}`} className="mr-2">learn more</Link>
          <GoArrowRight />
        </div>
      </div>
    </motion.div>
  );
};

const Experience2 = () => {
  return (
    <>
      <motion.div variants={fadeIn()}>
          <h2 className={`${styles.sectionHeadText} text-left`}>
            Experience
          </h2>
      </motion.div>
      <div>
        {experienceCards.map((experienceCard, index) => (
          <ExperienceCard
            key={`experienceCard-${index}`} index={index} {...experienceCard} // Fix the prop name
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience2, "work");
