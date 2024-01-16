import React, {useEffect} from "react";
import YouTubeEmbed from "../../utils/YouTubeEmbed";

import { SectionWrapper } from "../../hoc"


const FireStarter = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div className="flex flex-col items-left">
      <div className="text-black text-[30px] font-bold pt-20 pb-2">Fire Starter 🔥</div>
      <div className="grid grid-cols-4 place md:grid-rows-1 justify-left items-baseline gap-8">
        <div><span className="font-bold">Project Deliverable: </span> Tutorial Videos, GitHub Repository, Documentation</div>
        <div><span className="font-bold">Timeline: </span>  August 2023 - December 2023 </div>
        <div><span className="font-bold">Technologies: </span> Houdini, Maya, Python, VEX Expressions</div>
        <div ><a className="font-bold underline" href="https://github.com/stephaniestelzer/FireStarter"> GitHub→ </a> </div>
      </div>
      <br />
      <br />
      <div className="text-base">
        <div className="position-title pb-2"> The Problem </div> 
        <div>
        At the Digital Worlds Institute at the University of Florida, animation students often want to include visual effects, such as fire, in their projects. 
        However, students lack the time to become proficient in the specific skills needed to create these types of simulations.
        </div>
      </div>
      <br />
      <div>
        <div className="position-title font-bold pb-2"> My Solution  </div>
        <div>
        <span className="font-bold text-orange-500"> Fire Starter </span> is a Houdini plug-in that enables artists to quickly create simple fire effects for export to Maya. 
        There are two types of fire an artist can create: “Campfire” or “Spread”.
        </div>
        <br />
        <div>
        The <span className="font-bold"> Campfire </span> simulation creates source geometry 
        inside of Houdini and produces an in-place, bonfire-like simulation.
        </div>
        <br />
        <div>
        The <span className="font-bold"> Spread </span>simulation allows artists to import their own geometry, stagnant or animated, and uses Houdini’s 
        underlying tools to create the spread simulation across the given mesh.
        </div>
        <br />
        <div>
        Once artists finish creating their simulation in Houdini, they can export it to a series of 
        .VDB files for rendering in Maya with Arnold.
        </div>
      </div> 
      <br />
      <div className="position-title font-bold pb-2">Final Presentation</div>
      {/* <YouTubeEmbed videoId={Nqutjmodq_M} /> */}
      <br />
    </ div>
  );
};

export default SectionWrapper(FireStarter, "FireStarter");
