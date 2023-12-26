import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experienceCards } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import TechIcon from "./TechIcon";

const ExperienceCard = ( {
  index, 
  companyName,
  title,
  icon,
  techStack,
  description,
} ) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full py-8">
      <div>
        <div className="flex pb-7">
          {/* Company and description */}
          <img className="tech-icon-img" src={icon}/>
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
        <div class="text-right pt-10 description-text">
          <p class="inline">learn more...</p>
      </div>
      </div>
    </div>
  );
};

const Experience2 = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-left`}>
            Experience
          </h2>
      </motion.div>
      <div>
        {experienceCards.map((experienceCard, index) => (
          // Return the ExperienceCard component
          <ExperienceCard
            key={`experienceCard-${index}`} index={index} {...experienceCard} // Fix the prop name
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience2, "work");
