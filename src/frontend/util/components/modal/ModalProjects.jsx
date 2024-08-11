import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdArrowBackIosNew } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
const ModalProjects = ({ openModal, setOpenModal, projectData }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const ref = useRef();

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!openModal) return null;
  return (
    <div className="w-screen h-screen inset-0 fixed z-50 bg-opacity-50 bg-black backdrop-blur-[1px] justify-center items-center flex">
      <motion.div
        ref={ref}
        initial={{ width: "0%", height: "10px" }}
        animate={
          openModal
            ? {
                width: isSmallScreen ? "100%" : "50%",
                height: isSmallScreen ? "100%" : "60%",
              }
            : { width: "0%", height: "0px" }
        }
        transition={{
          duration: 0.5,
          width: { duration: 1 },
          height: { delay: 1, duration: 0.5 },
        }}
        className=" h-[10px] textColor bg-[#1f2b2e] overflow-hidden backdrop-blur-sm overflow-y-auto rounded-md"
      >
        <div className="px-5 flex flex-col items-center h-full overflow-y-auto">
          <div className="w-full flex mb-5 mt-5">
            <button onClick={() => setOpenModal(false)}>
              <MdArrowBackIosNew className="text-[30px]" />
            </button>
          </div>

          <div className="h-full">
            <div className="mb-5">
              <h1 className="text-[30px] font-bold">{projectData.title}</h1>
              <p className="font-thin">{projectData.discrp}</p>
            </div>

            <div className="h-full flex flex-col gap-y-2">
              <h1 className="text-[20px] font-semibold">Features:</h1>
              {projectData?.feature.map((feature) => (
                <>
                  {feature.title !== "" && (
                    <div
                      key={feature.id}
                      className="grid grid-cols-2 border-[1px] rounded-md py-1 px-1.5 bg-slate-800"
                    >
                      <label className="flex items-center gap-1 font-semibold shrink-0">
                        <IoIosSettings className="text-[30px]" /> {feature.title}
                      </label>
                      <p className="font-thin">{feature.disc}</p>
                    </div>
                  )}
                </>
              ))}
              <div className="mt-2 mb-2 flex w-full justify-center">
                {projectData.subtitle}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ModalProjects;
