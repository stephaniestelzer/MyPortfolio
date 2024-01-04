import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {Headshot} from "../assets";

const About = () => {
  return (
    <div>
      <div className="flex justify-center items-center text-black text-[50px] font-bold pb-10">About Me</div>
      <div className="grid grid-cols-2 gap-4 w-full py-8">
        <motion.div variants={textVariant()} className="flex items-center justify-center">
          <img src={`${Headshot}`} />
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='about-text max-w-3xl leading-[30px] '
        >
          <p>
            Welcome!
          </p>
          <br />
          <p>
            I am a recent graduate of the University of Florida, where I earned my Bachelor of Science in Digital 
            Arts and Sciences Engineering. 
          </p>
          <br />
          <p>
            My degree is a core computer science curriculum, with a special emphasis on human-computer interaction and digital media.
          </p>
          <br />
          <p>
            So far, I have been a...
          </p>
          <br />
          <p>
            <span className="pink-text-gradient text-[18px] font-bold cursor-pointer">Technical Director Intern</span> at <a className="underline" href="http://www.paramountanimation.com/" >Paramount Animation</a>
            <br />
          </p>
          <br />
          <p>
            <span className="pink-text-gradient text-[18px] font-bold cursor-pointer">Developer Department Manager</span> at <a className="underline" href="https://theagency.jou.ufl.edu/" >The Agency at UF</a>
            <br />
          </p>
          <br />
          <p>
            <span className="pink-text-gradient text-[18px] font-bold cursor-pointer">Software Engineering Intern</span> at <a className="underline" href="https://tech.target.com/" >Target</a>
            <br />
          </p>
          <br />
          <p>
            I have a deep desire to use both art and technology to create meaningful experiences, and I strive to bring this passion into everything I do.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
