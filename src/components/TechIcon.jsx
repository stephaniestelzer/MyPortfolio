import React from "react";

const TechIcon = ({ tech, techName }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="tech-icon flex flex-row flex-wrap justify-center gap-5">
                <img className="tech-icon-img object-contain" src={tech}/>
            </div>
            <p className="tech-icon-subtext align-middle p-2">{techName}</p>
        </div>

    );
  };
  

export default TechIcon;
