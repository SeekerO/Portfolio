import React, { useState } from "react";
import Wink from "../lottie/winkAnimation/WinkLottie";
import {
  iMonitor,
  Send_here,
  Akira,
  Seekerdev,
  Todo,
  trackit,
  foodsearchy,
  uptomovie,
} from "../images/images";
import ModalProjects from "../components/modal/ModalProjects";
const ProjectImageConfig = ({ project }) => {
  const [openLink, setOpenLink] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const setImages = (imageName) => {
    const imagesMap = {
      iMonitor,
      Send_here,
      Akira,
      Seekerdev,
      Todo,
      trackit,
      foodsearchy,
      uptomovie,
    };

    return imagesMap[imageName] || null;
  };

  const openingAnimation = () => {
    setOpenLink(!openLink);
    setTimeout(() => {
      setOpenLink(false);
      window.open(project.href);
    }, 1600);
  };
  return (
    <>
      {" "}
      <div className="md:flex grid gap-10 items-center select-none">
        <div
          className="relative h-fit w-fit hover:scale-105 duration-300 group  cursor-pointer"
          onClick={() => openingAnimation()}
        >
          <div className="w-full h-full  bg-black absolute z-10 group-hover:opacity-100 opacity-0 justify-center flex items-center duration-300 underline underline-offset-2">
            {openLink ? (
              <div className="w-full h-full absolute z-10">
                <Wink />
              </div>
            ) : (
              "Go to website"
            )}
          </div>
          <img
            src={setImages(project.src)}
            className="w-[400px] h-[200px] border-[1px] object-fill  shadow-lg shadow-black z-0"
          />
        </div>

        <div className="">
          <div
            className="text-[30px] md:flex grid items-center font-bold  cursor-pointer"
            onClick={() => setOpenModal(!openModal)}
          >
            <h1 className="md:flex hidden">{project.title}</h1>
            <em
              className={`${
                project.status === "Online"
                  ? "text-green-500"
                  : "text-yellow-500"
              } px-2 text-sm font-normal`}
            >
              {project.status}
            </em>
            <h1 className="md:hidden flex">{project.title}</h1>
          </div>
          <p>{project.subtitle}</p>
        </div>
      </div>
      <ModalProjects
        openModal={openModal}
        setOpenModal={setOpenModal}
        projectData={project}
      />
    </>
  );
};

export default ProjectImageConfig;
