import React, {useEffect} from "react";
import VimeoEmbed from "../../utils/VimeoEmbed";

import { SectionWrapper } from "../../hoc"

import { A3PlanningDoc } from "../../assets";
import { Stelzer_Stephanie_A4_Ref } from "../../assets";

const ParkourAnimation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div className="flex flex-col items-left">
      <div className="text-black text-[30px] font-bold pt-20 pb-2">Parkour Blocking Animation</div>
      <p className="pb-5">In my Advanced 3D Animation course, I was tasked with creating a parkour animation. 
      The goal of the project was to learn the fundamentals of body mechanics and to practice switching between IK and FK.
      </p>
      <div className="grid grid-cols-4 place md:grid-rows-1 justify-left items-baseline gap-8">
        <div><span className="font-bold">Project Deliverable: </span> Blocking Playblast, Pose Planning Sheet </div>
        <div><span className="font-bold">Timeline: </span>  March 2022 </div>
        <div><span className="font-bold">Technologies: </span> Maya, Procreate</div>
      </div>      
      <div className="grid grid-cols gap-4 w-full">
        <br />
        <div className="text-black text-[30px] font-medium pb-2">Final</div>
        <VimeoEmbed videoId={828404878} />
        <br />
        <div className="text-black text-[30px] font-medium pb-2">Planning Sheet</div>
        <div className="w-3/4 h-auto">
          <img src={A3PlanningDoc} className="w-full h-full object-cover"/>
        </div>
        <br />
        <div className="text-black text-[30px] font-medium pb-2">Reference</div>
        <div>
          <video controls width="640" height="360">
            <source src={Stelzer_Stephanie_A4_Ref} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <br />
        <div className="text-black text-[30px] font-medium ">Learnings</div>
        <div>
            <ul className="list-disc pl-8">
              <li>The fundamentals of the bouncing ball exercise and principle of squash and stretch are imperative to creating realistic motion. These principles create buoyancy and keep the character's movement from appearing floaty and weightless.</li>
              <li> Rushing into Maya will hurt the quality of your animation. Be sure to carefully plan out your IK and FK switches. </li>
            </ul>
          </div>
      </div>
    </ div>
  );
};

export default SectionWrapper(ParkourAnimation, "ParkourAnimation");
