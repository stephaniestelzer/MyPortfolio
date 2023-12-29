import React from "react";

import { SectionWrapper } from "../../hoc"


const PolarDash = () => {
  return (
    <>
      <div className="flex justify-center items-center text-black text-[50px] font-bold pt-20 pb-10">Paramount</div>
    </>
  );
};

export default SectionWrapper(PolarDash, "PolarDash");
