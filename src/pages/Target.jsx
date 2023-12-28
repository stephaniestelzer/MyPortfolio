import React from "react";
import target from "../assets/company/target.svg"
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const Target = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-black text-[50px] font-bold pt-20 pb-2">Target</div>
        <div className="position-title blue-text-gradient pb-10">Software Engineering Intern</div>
        <div className="grid grid-cols-2 md:grid-rows-2 content-center items-baseline gap-8">
          <div><span className="font-bold">Role: </span> Back-End Engineer </div>
          <div><span className="font-bold">Duration: </span> 10 Weeks </div>
          <div><span className="font-bold">Technologies: </span> Kotlin (Java), Micronaut, MongoDB, Docker </div>
          <div><span className="font-bold">Team Size: </span> 15 </div>
        </div>
      </ div>
      <div className="place-self-auto">
          <br />
          <div className="company-title">
            Overview
          </div>
          <br />
          <div className="text-base">
            <div className="object-contain">
              <img  className="float-right" src={target} />
            </div>
            In the summer of 2022, I worked as a Software Engineering Intern on the Acorn team at Target Tech. Our product was called <span className="text-red-500 font-semibold">Acorn</span> because it was a set of front-end and back-end tools that was used throughout different applications across the business. The idea was that “something big could grow from something small”.
          </div>
          <br />
          <div>
            As a part of this team, I participated in bi-weekly stand-ups, where I was exposed to both front-end and back-end development work. I also had a mentor who I recieved code reviews from and pair-programmed with the other two interns on my team.
          </div>
          <br />
          <div className="company-title">
            Project
          </div>
          <br />
          <div className="text-base">
            <span className="font-bold blue-text-gradient">The Problem: </span> Because our tools were used across the business, if a bug was released to production, it could have detrimental consequences to enterprise applications.
            Our project aimed to address this issue by logging changes made to our tools, enabling us to quickly find and address bugs released to production.
          </div>
          <br />
          <div>
            <span className="font-bold blue-text-gradient">The Solution: </span>Our team of interns was tasked with creating a RESTful/CRUD API that would track changes that other software engineers make to Acorn Settings – 
            which is a broad framework that the Target Enterprise uses across its various applications, but most famously “MyDay”, the application that retail workers use to restock shelves. 
            We were to build a microservice using Micronaut, Kotlin, MongoDB, and Docker.
          </div>
          <br />
          <div>
            We built an  <span className="font-bold blue-text-gradient">API </span> that had... 
            <ul className="list-disc pl-8 pt-3">
              <li>a <span className="font-bold">controller </span> that called the different requests (i.e.  @Post & @Get) </li>
              <li>a <span className="font-bold">DAO (Data Access Object) </span> that contained the MongoDB data </li>
              <li>a <span className="font-bold">DTO (Data Transfer Object) </span> that transferred the incoming data into a usable form for our application</li>
              <li> <span className="font-bold">Service Functions </span> that the controller called to log the data </li>
            </ul>
          </div>
          <br />
          <div className="company-title">
            Impact
          </div>
          <br />
          <div className="company-title">
            Learnings
          </div>
          <br />
          <div>
            Prior to this experience
          </div>
        </div>
    </>
  );
};

export default SectionWrapper(Target, "Target");
