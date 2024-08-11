import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const About = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("animated-div");
      const rect = element.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (inViewport && !hasAnimated) {
        setHasAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check immediately on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);
  return (
    <motion.div
      id="animated-div"
      initial={{ height: 0, opacity: 0 }}
      animate={hasAnimated ? { height: "auto", opacity: 1 } : {}}
      transition={{ duration: 2 }}
      style={{ overflow: "hidden" }}
      className="textColor text-[18px] flex flex-col w-full"
    >
      <label className="font-semibold text-[25px]">ABOUT</label>
      <p className="pt-2 font-thin text-justify">
        Hello! My name is <strong className="font-semibold">John</strong>, but
        you can call me <strong className="font-semibold">Albert</strong> if you
        like. I have a bachelor's degree in information technology and have
        adequate experience to build websites. My experience encompasses all
        aspects of website development, having worked with multiple tech stacks
        such as ReactJS, Svelte, Node.JS, Tailwind CSS, JavaScript, Java,
        C-shrap, Figma, Wordpress and Supabase. Programming on the front and
        back ends is my area of expertise.
      </p>
      <div className="pt-2 font-thin text-justify" id="about">
        I approach every assignment with a collaborative mindset and good
        problem-solving skills in addition to my technical expertise. Working
        together with cross-functional teams to fully understand project needs
        and deliver exceptional solutions is something I enjoy doing. I'm
        committed to offering excellent software solutions that support business
        success, and I'm also committed to lifetime learning and staying up to
        date with current market trends.
      </div>
    </motion.div>
  );
};

export default About;
