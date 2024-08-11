import React from "react";
import IconSorter from "./IconSorter";

const Tech = () => {
  const skills_meta_data = [
    { type: "JAVASCRIPT" },
    { type: "TYPESCRIPT" },
    { type: "JAVA" },
    { type: "C-Sharp" },
    { type: "CSS3" },
    { type: "HTML5" },
    { type: "REACT.JS" },
    { type: "NODE.JS" },
    { type: "NEXT.JS" },
    { type: "VITE.JS" },
    { type: "SVELTE" },
    { type: "TAILWIND" },
    { type: "FIGMA" },
    { type: "WORDPRESS" },
    { type: "ELEMENTOR" },
    { type: "SUPABASE" },
    { type: "FIREBASE" },
    { type: "MONGO DB" },
    { type: "mySQL" },
  ];

  return (
    <div className="lg:px-40 px-10 mt-32 w-full justify-center items-start flex flex-col">
      <div className="textColor mt-20 text-[25px] font-bold">TECH-STACKS</div>
      <div className="skillsContainer">
        {skills_meta_data.map((meta_data, index) => (
          <div
            key={index}
            className=" flex flex-col items-center group relative "
          >
            <div className="icon w-fit mr-1 flex-shrink-0 rounded-full items-center flex justify-center">
              {<IconSorter name={meta_data.type} />}
            </div>
            <label className=" textColor font-semibold mt-1 flex justify-center flex-wrap text-clip">
              {meta_data.type}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
