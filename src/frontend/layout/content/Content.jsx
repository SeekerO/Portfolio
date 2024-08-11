import React, { useEffect, useLayoutEffect } from "react";
import Hero from "./hero/Hero";
import Tech from "./skills/Tech";
import About from "../content/about/About";
import Projects from "./projects/Projects";

const Content = ({ refHero, refProjects, refAbout }) => {
  return (
    <>
      <div ref={refHero} id="hero" className="flex w-full">
        <Hero />
      </div>
      <div className="flex w-full">
        <Tech />
      </div>
      <div ref={refProjects} id="projects" className="mb-24">
        <Projects />
      </div>
      <div ref={refAbout} id="about" className="flex w-full md:px-40 px-10 pt-32 pb-32">
        <About />
      </div>
    </>
  );
};

export default Content;
