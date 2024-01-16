import React, {useEffect} from "react";

import { SectionWrapper } from "../../hoc"


const PortfolioProject = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 

  return (
    <>
      <div className="flex justify-center items-center pt-20 pb-10">
        <div className="grid-cols-1">In the process of documenting this project. Coming soon.</div>
      </div>
    </>
  );
};

export default SectionWrapper(PortfolioProject, "PortfolioProject");
