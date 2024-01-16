import React, {useEffect} from "react";

import { SectionWrapper } from "../../hoc"
import YouTubeEmbed from "../../utils/YouTubeEmbed";


const PolarDash = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
    <>
      <div className="flex flex-col items-left">
      <div className="text-black text-[30px] font-bold pt-20 pb-2">Popsicle's Polar Dash</div>
      <div className="grid grid-cols-4 place md:grid-rows-1 justify-left items-baseline gap-8">
        <div><span className="font-bold">Project Deliverable: </span> Game Demo, Game Build, GitHub Repository</div>
        <div><span className="font-bold">Timeline: </span>  January 2022 - May 2022 </div>
        <div><span className="font-bold">Technologies: </span> Unity, C#</div>
        <div ><a className="font-bold underline" href="https://github.com/stephaniestelzer/Line14"> GitHub→ </a> </div>
      </div>
      <br />
      <YouTubeEmbed videoId="bhd922nXctQ"/>
      </div>
    </>
  );
};

export default SectionWrapper(PolarDash, "PolarDash");
