import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const TheAgency = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-black text-[50px] font-bold pt-20 pb-2">The Agency</div>
        <div className="position-title blue-text-gradient pb-10">Led by professionals. Staffed by students. Inspired by faculty.</div>
        <div className="grid grid-cols-4 place md:grid-rows-2 content-center items-baseline gap-8 pl-12">
          <div><span className="font-bold">Role: </span> Full-Stack Developer & Department Manager </div>
          <div><span className="font-bold">Organization Size: </span> 70+ </div>
        </div>
      </ div>
      <div className="place-self-auto">
          <br />
          <div className="company-title">
            Overview
          </div>
          <br />
          <div className="text-base">
            Upon joining UF's Digital Arts and Sciences program, my aspiration was always to contribute as a developer in a collaborative, interdisciplinary team. 
            When the opportunity arose to work at the Agency, the University of Florida's in-house creative advertising studio, I was excited to dive into this passion.
          </div>
          <br />
          <div>
            In October of 2021, I joined the Agency as a Full-Stack Developer. In March of 2022, I took on the role of Developer Department Manger, and assumed the responsibility of hiring & onboarding 
            new team members and being the technical liaison to the other department heads.          
          </div>
          <br />
          <div className="company-title">
            Development Work
          </div>
          <br />
          <div className="text-base">
            As part of my onboarding training, I learned the fundamentals of web development, including HTML, CSS, and JavaScript, and completed a simple onboarding project: 
            a landing page for a past client’s website. After completing onboarding, 
            I worked with one of our clients to make a few UI updates to their Shopify site.
          </div>
          <br />
          <div>
            When I took on the role of Department Manager, I began the development of a New Business Pitch Deck Website. 
            The idea was that instead of just sending potential clients a typical pitch deck, we would be able to send them a custom website, complete with animations, 
            customizations with the client’s name and logo, 
            and selected case studies that showcased our most relevant work to the client’s business needs.
          </div>
          <br />
          <div>
            I chose to use a MERN architecture for this project, as React components and props were ideal for being able to customize the different sections of the site. 
            The below diagram is a simplified outline of how the system would work: 
          </div>
          <br />
          <div>
          The main benefits of this approach were…
            <ul className="list-disc pl-8 pt-3">
              <li> Case study components could be chosen by the New Business team and loaded in to the proper location on the page </li>
              <li> Properties like logos and client names could be passed to components as props </li>
              <li> From a development perspective, I could assign components as sprint items, keeping development work 
                    siloed and avoiding merge conflicts. </li>
            </ul>
          </div>
          <br />
          <div className="company-title">
            Department Manager Responsibilities
          </div>
          <br />
          <div>
            At the beginning of my internship, my manager told us that he wanted to integrate this system into other applications,
            so we developed with scalability in mind. We built our application for Acorn settings, but since the completion of our project, the
            system has been integrated into other Acorn applications.
          </div>
          <br />
          <div className="company-title">
            Learnings
          </div>
          <br />
          <div>
            I came away from this experience
          </div>
        </div>    
    </>
  );
};

export default SectionWrapper(TheAgency, "paramount");
