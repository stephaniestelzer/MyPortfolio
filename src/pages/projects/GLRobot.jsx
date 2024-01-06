import React, {useEffect} from "react";
import VimeoEmbed from "../../utils/VimeoEmbed";

import { SectionWrapper } from "../../hoc"

const GLRobot = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div className="flex flex-col items-left">
      <div className="text-black text-[30px] font-bold pt-20 pb-2">OpenGL Robot</div>
      <p className="pb-5">After taking Advanced 3D Animation, I wanted to learn more about creating rigs.
      I reached out to my 3D Animation instructor, and he agreed to oversee an individual course of study that would focus on the fundamentals of rigging characters for CG animation.
      </p>
      <div className="grid grid-cols-4 place md:grid-rows-1 justify-left items-baseline gap-8">
        <div><span className="font-bold">Topics Covered: </span> model/mesh cleaning, auto rigging systems, joint placement, weight-painting, blend shapes, connection editor </div>
        <div><span className="font-bold">Timeline: </span>  January 2023 - May 2023 </div>
        <div><span className="font-bold">Technologies: </span> Maya, Advanced Skeleton 5</div>
      </div>      
      <div className="grid grid-cols gap-4 w-full">
        <br />
        <div className="text-black text-[30px] font-medium pb-2">Final</div>
        <VimeoEmbed videoId={828446023} />
        <br />
        <div className="text-black text-[30px] font-medium ">Learnings</div>
        <div>
            <ul className="list-disc pl-8">
              <li>The fundamentals of the bouncing ball exercise and principle of squash and stretch are imperative to creating realistic motion. These principles create buoancy and keep the character's movement from becoming floaty and weightless.</li>
              <li>Planning the keyframes of your shot and your IK / FK switches is imperative. Do not rush into Maya. </li>
              <li>Pay attention to how you are setting keyframes on the rig. Failing to key poses properly will result in difficulties further into animation. </li>
            </ul>
          </div>
      </div>
    </ div>
  );
};

export default SectionWrapper(GLRobot, "GLRobot");
