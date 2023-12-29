import React, {useEffect} from "react";

import { SectionWrapper } from "../../hoc"


const GulfEnergy = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
    <>
      <div className="flex justify-center items-center text-black text-[50px] font-bold pt-20 pb-10">Gator Gulf Energy</div>
    </>
  );
};

export default SectionWrapper(GulfEnergy, "GulfEnergy");
