import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
  }) => {
    return (
      <div>
        <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
          <div className='relative w-full h-[230px]'>
            <Link to={source_code_link}>
              <img
                src={image}
                alt='project_image'
                className='w-full h-full object-contain rounded-2xl'
              />
            </Link>
          </div>
  
          <div className='mt-5'>
            <h3 className='text-black font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
  
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] tech-tag ${tag.color}`}
              >
                {tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default ProjectCard;
