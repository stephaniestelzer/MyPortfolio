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
      <div className="grid grid-cols-4 place md:grid-rows-1 justify-left items-baseline gap-8">
        <div><span className="font-bold">Concepts: </span> Vertex Buffer/Array Objects, hierarchy set-up, transformation matrices, shaders (GLSL), OpenGL Lighting Model </div>
        <div><span className="font-bold">Timeline: </span>  November 2022 </div>
        <div><span className="font-bold">Technologies: </span> C++, OpenGL, XCode</div>
      </div>      
      <div className="grid grid-cols gap-4 w-full">
        <br />
        {/* <div className="text-black text-[30px] font-medium pb-2">Final</div> */}
        <VimeoEmbed videoId={828446023} />
        <br />
        {/* <div className="text-black text-[30px] font-medium ">Learnings</div> */}
        {/* <div>
            <ul className="list-disc pl-8">
              <li>The fundamentals of the bouncing ball exercise and principle of squash and stretch are imperative to creating realistic motion. These principles create buoancy and keep the character's movement from becoming floaty and weightless.</li>
              <li>Planning the keyframes of your shot and your IK / FK switches is imperative. Do not rush into Maya. </li>
              <li>Pay attention to how you are setting keyframes on the rig. Failing to key poses properly will result in difficulties further into animation. </li>
            </ul>
        </div> */}
      </div>
    </ div>
  );
};

export default SectionWrapper(GLRobot, "GLRobot");
