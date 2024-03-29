import React, {useEffect} from "react";
import VimeoEmbed from "../../utils/VimeoEmbed";

import { SectionWrapper } from "../../hoc"

import { Stelzer_Stephanie_Render_01 } from "../../assets";
import { Stelzer_Stephanie_Render_02 } from "../../assets";
import { Stelzer_Stephanie_Render_03 } from "../../assets";

import { GardenArch_Reference } from "../../assets";
import { GardenBench_Reference } from "../../assets";
import { Garden_Shed_Reference } from "../../assets";
import { SucculentFountain_Reference } from "../../assets";
import { Succulent_FlowerPot_Reference } from "../../assets";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Terrarium = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div className="flex flex-col items-left">
      <div className="text-black text-[30px] font-bold pt-20 pb-2">Terrarium</div>
      <p className="pb-5">The prompt for this project was to create a "Floating World" that could be held in one's hand. I immediately thought of the decorative terrariums commonly placed on desks. 
      For my project, I imagined that a whole different world existed within one of these small glass jars. 
      My terrarium would be the home of a dedicated gardener who took great joy in his craft.
      </p>
      <p className="pb-5">
      The world is designed to be "in-progress," showcasing the gardener's work before its completion. The shed is open, tools lay awry, 
      and the plants aren’t fully embedded in the soil, creating an atmosphere of continuous progress. 
      The winding path and bench provide a place for the gardener to sit and appreciate his environment. 
      The hole in the center of the jar invites viewers into the world and to join the gardener in his work.
      </p>
      <p className="pb-5">
        Throughout the development of this project, I learned about parametric modeling, world-building, and using deformers in Cinema4D.
      </p>
      <div className="grid grid-cols-4 place md:grid-rows-1 justify-left items-baseline gap-8">
        <div><span className="font-bold">Project Deliverable: </span> Turntable Video, Rendered Images</div>
        <div><span className="font-bold">Timeline: </span>  January 2022 </div>
        <div><span className="font-bold">Software: </span> Cinema4D</div>
      </div>      
      <div className="grid grid-cols gap-4 w-full">
        <br />
        <div className="text-black text-[30px] font-medium pb-2">Final</div>
        <VimeoEmbed videoId={859190931} />
        <br />
        <div className="w-3/4 h-auto">
          <img src={Stelzer_Stephanie_Render_01} className="object-cover py-3"/>
          <img src={Stelzer_Stephanie_Render_02} className="object-cover py-3"/>
          <img src={Stelzer_Stephanie_Render_03} className="object-cover py-3"/>
        </div>
        <br />
        <div className="text-black text-[30px] font-medium pb-2">Reference</div>
        </div>
        <div className="w-1/3 mx-auto">
            <AliceCarousel>
                <img src={GardenArch_Reference} className="img-carousel"/>
                <img src={GardenBench_Reference} className="img-carousel"/>
                <img src={Garden_Shed_Reference} className="img-carousel"/>
                <img src={SucculentFountain_Reference} className="img-carousel"/>
                <img src={Succulent_FlowerPot_Reference} className="img-carousel"/>
            </AliceCarousel>
        </div>
        {/* <div className="text-black text-[30px] font-medium ">Learnings</div>
        <div>
            <ul className="list-disc pl-8">
                <li>The fundamentals of the bouncing ball exercise and principle of squash and stretch are imperative to creating realistic motion. These principles create buoancy and keep the character's movement from becoming floaty and weightless.</li>
                <li>Planning the keyframes of your shot and your IK / FK switches is imperative. Do not rush into Maya. </li>
                <li>Pay attention to how you are setting keyframes on the rig. Failing to key poses properly will result in difficulties further into animation. </li>
            </ul>
        </div> */}
    </ div>
  );
};

export default SectionWrapper(Terrarium, "Terrarium");
