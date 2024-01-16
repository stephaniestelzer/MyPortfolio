import React, {useEffect} from "react";
import YouTubeEmbed from "../../utils/YouTubeEmbed";

import { SectionWrapper } from "../../hoc"


const GulfEnergy = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div className="flex flex-col items-left">
      <div className="text-black text-[30px] font-bold pt-20 pb-2">Gator Gulf Energy</div>
      <div className="font-semibold ">Florida Hacks With IBM, First Place Winner <span > 🏆</span> </div>
      <br />
      <div className="grid grid-cols-4 place md:grid-rows-1 justify-left items-baseline gap-8">
        <div><span className="font-bold">Project Deliverable: </span> Final Presentation </div>
        <div><span className="font-bold">Timeline: </span>  September 2021 - December 2021 </div>
        <div><span className="font-bold">Technologies: </span> Figma, React, Maya</div>
        {/* <div ><a className="font-bold underline" href="https://github.com/stephaniestelzer/FireStarter"> GitHub→ </a> </div> */}
      </div>
      <br />
      <div className="text-base">
        <div className="position-title pb-2"> <span className="font-bold"> Overview </span> </div> 
        <div>
        Currently, Florida’s energy portfolio is heavily dependent on fossil fuels - 86% of our power generation is sourced from natural gas and coal. As one of the largest producers of energy in the nation, if there is to be true change 
        in the way that energy is generated on a national level, it is crucial that Florida be one of the state’s leading the initiative.
        </div>
        <br />
        <div>
        We propose to begin harnessing the power of the Florida Gulf Stream as a reliable and continuous source of clean power. Our project goal is to assess the extent to which tidal power can holistically impact Florida's energy portfolio.
        </div>
        <br />
        <YouTubeEmbed videoId={WD_bB5OMNoQ} />
      </div>
      <br />
    </ div>
  );
};

export default SectionWrapper(GulfEnergy, "GulfEnergy");
