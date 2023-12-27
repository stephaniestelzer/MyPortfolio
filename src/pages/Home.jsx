import React from "react";
import { SectionWrapper } from "../hoc";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Experience2 from "../components/Experience2";
import Works from "../components/Works";


const Home = () => {
    return (
      <>
        <div className='relative z-0 bg-primary'>
            <div>
                <Navbar />
                <Hero />
            </div>
            <Experience2 />
            <Works />
            <div className='relative z-0'>
            </div>
        </div>
      </>
    );
  };
  
  export default SectionWrapper(Home, "about");