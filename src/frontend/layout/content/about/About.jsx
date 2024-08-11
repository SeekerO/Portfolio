import React from "react";

const About = ({ ref }) => {
  return (
    <div className="textColor text-[18px] flex flex-col w-full ">
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
    </div>
  );
};

export default About;
