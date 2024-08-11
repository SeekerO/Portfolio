import React, { useState, useEffect } from "react";
import project_Data from "../../../util/json/json_projects.json";

import ProjectImageConfig from "../../../util/config/ProjectImageConfig";
const Projects = () => {
  const [projectData, setProjectsData] = useState([]);


  useEffect(() => {
    const resposne = project_Data.projects;
    setProjectsData(resposne);
  }, []);

  console.log(projectData);
  return (
    <div className="lg:px-40 px-10 mt-32 h-auto textColor">
      <h1 className="textColor mt-20 text-[25px] font-bold">PROJECTS</h1>
      <div className="flex flex-col gap-5 mt-5">
        {projectData
          .sort((a, b) => (b.status === "Online") - (a.status === "Online"))
          .map((project, idx) => (
            <ProjectImageConfig project={project} key={idx} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
