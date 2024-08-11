import React from "react";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import GradPic from "../../../util/images/Grad_pic.jpg";

const Hero = () => {
  return (
    <div className={`h-screen w-full justify-center flex`} id="hero">
      <div className={`flex-col flex w-full items-center gap-5 justify-center`}>
        <img
          src={GradPic}
          className="h-[250px] w-[250px] object-cover object-top  rounded-full bg-black border-[3px] border-[#FAF4D3]"
        />

        <div
          className={`w-full md:mt-0 mt-10 flex flex-col textColor items-center `}
        >
          <div className="flex md:text-[40px] text-[30px] pr-1 font-bold flex-wrap justify-center gap-x-1">
            Hello!
            <motion.span className="md:text-[40px] text-[30px] flex-shrink-0 pr-1">
              I'am John Albert Baisa
            </motion.span>
          </div>
          <div className="md:text-[25px] text-[20px]  tracking-widest text-center w-full">
            A Full-Stack Web Developer
          </div>
          <motion.div
            initial={{ width: "0px" }}
            animate={{ width: "300px" }}
            transition={{ duration: 1, delay: 2 }}
            className=" h-[1px] bg-[#FAF4D3] mt-1"
          />
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            href="https://drive.google.com/file/d/1rXdAFXxokYbFMY70BnpisWOnxC8cjnGG/view?usp=drive_link"
            download
            className="w-fit flex items-center gap-2 px-5  py-2 rounded-md font-semibold bg-[#FAF4D3] text-[#0C1618] mt-5 
            cursor-pointer duration-300 hover:translate-y-1"
          >
            <AiOutlineDownload className="text-[20px]" />
            RESUME
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
