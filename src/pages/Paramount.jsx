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
    <div className="flex flex-col items-center">
      <div className="text-black text-[50px] font-bold pt-20 pb-2">Paramount Animation</div>
      <div className="position-title blue-text-gradient pb-10">Technical Director Intern</div>
      <div className="grid grid-cols-4 place md:grid-rows-2 content-center items-baseline gap-8 pl-12">
        <div><span className="font-bold">Role: </span> Pre-visualization Technical Director </div>
        <div><span className="font-bold">Timeline: </span>  June-August & September-November 2023 (20 weeks) </div>
        <div><span className="font-bold">Technologies: </span>  Python, Maya, PyOpenGL, USD (Universal Scene Description) </div>
        <div><span className="font-bold">Team: </span> Animation Technology </div>
      </div>
    </ div>
    <div className="place-self-auto">
        <br />
        <div className="company-title">
          Overview
        </div>
        <br />
        <div className="text-base">
          <div className="object-contain">
          </div>
          In the summer & fall of 2023, I worked as a Technical Director Intern at Paramount Animation, assisting in the production of the studio’s upcoming animated feature films.        </div>
        <br />
        <div>
        For my first internship (June - August), my work consisted of familiarizing myself with the Previsualization Pipeline, 
        collaborating with closely with Previs & Layout Artists to gain an understanding of their workflow and tools, 
        and diving into tool development and enhancement.        
        </div>
        <br />
        <div>
          During my second internship (September - November), I collaborated with a mentor to investigate the potential integration of USD Universal Scene Description (USD) into our Pre-Visualization pipeline. The focus was on understanding how incorporating 
          USD could enhance  our existing processes.
        </div>
        <br />
        <div className="company-title">
          Pre-Visualization Pipeline
        </div>
        <br />
        <div className="text-base">
          Previsualization is a unique phase of the animation pipeline, characterized by the fact that a significant portion of the artistic work
           produced will likely not be included in the final film. A Previsualization Artist must possess the ability to rapidly 
           and effectively communicate the story of a shot and prioritize conveying the main concept without getting lost 
           in unnecessary details. This process is much like constructing a prototype or a mockup — conceptual ideas become real and can be iterated upon.
        </div>
        <br />
        <div>
          Because of nature of this stage of the pipeline, artists will use whatever tools will help them get their job done the fastest, as directors often request to see many different versions of the same shot and need to make decisions quickly in order to keep production moving forward.
          Designing with simplicity is key, as artists do not have the time or desire to learn a whole new set of tools to complete their work.
        </div>
        <br />
        <div>
          At Paramount Animation, the goal is to get work to the RLO (Rough Layout) stage, 
          so that it can be sent to vendor studios to go through the rest of the animation pipeline (Animation, VFX, etc.).
        </div>
        <br />
        <div className="company-title">
          USD
        </div>
        <br />
        <div>
        Universal Scene Description is rapidly changing the way 3D data is stored and translated between different digital content 
          creation software (Unity, Maya, Houdini, etc.). The technology was developed by Pixar and made open-source in 2016, and 
          pipelines have been steadily integrating it ever since. I was thrilled when my mentor tasked me with researching its integration into our pipeline, 
          as I had always wanted to learn more about it.
        </div>
        <br />
        <div>
        Throughout my research I learned important components of USD (such as stages, payloads, and layers), and conceptualized ways to bring 
        the technology into our pipeline. I can’t reveal the details of our proposed system, but this process involved gaining an even greater understanding of our 
        existing pipeline, creating design diagrams, and most importantly, collaborating 
        with artists to understand how the integration of USD into the pipeline would affect their workflow.
        </div>
        <br />
        <div className="company-title">
          Learnings
        </div>
        <br />
      </div>
    </>
  );
};

export default SectionWrapper(Paramount, "paramount");
