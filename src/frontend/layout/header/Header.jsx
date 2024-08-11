import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import changeWindowHistory from "../../util/components/changeWindowHistory";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = ({
  isInViewHero,
  isInViewProjects,
  isInViewAbout,
  isInViewFooter,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const text = "SEEKERDEV";

  const MenuBarSide1 = [
    { name: "HOME", id: "hero" },
    { name: "PROJECTS", id: "projects" },
  ];

  const MenuBarSide2 = [
    { name: "ABOUT", id: "about" },
    { name: "CONTACT", id: "footer" },
  ];

  const LineAnimation = () => {
    return (
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
        className="secondcolor h-[1px]"
      />
    );
  };
  return (
    <div
      className={`${
        isScrolled &&
        "bg-[#192224] duration-300 bg-opacity-90 backdrop-blur-sm "
      } w-screen flex fixed p-3 items-center textColor justify-center gap-10 z-40 select-none `}
    >
      <div className="md:flex hidden gap-5 text-[15px] tracking-widest font-thin">
        {MenuBarSide1.map((menu, idx) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
            onClick={() => changeWindowHistory(menu.id)}
            key={menu.name}
            className="cursor-pointer flex flex-col w-full justify-center"
          >
            <label>{menu.name}</label>

            {menu.id === "hero" &&
              isInViewHero &&
              !isInViewProjects &&
              LineAnimation()}
            {menu.id === "projects" &&
              isInViewProjects &&
              !isInViewAbout &&
              LineAnimation()}
          </motion.div>
        ))}
      </div>

      <h1 className="bold text-[40px] flex font-bold textColor tracking-[10px] text-black ">
        <motion.div className="text">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </h1>
      <div className="md:hidden flex">
        <RxHamburgerMenu className="text-[30px]" />
      </div>
      <div className="md:flex hidden gap-5 text-[15px] tracking-widest font-thin ">
        {MenuBarSide2.map((menu, idx) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
            onClick={() => changeWindowHistory(menu.id)}
            key={menu.name}
            className="cursor-pointer flex flex-col w-full justify-center hover:cursor-pointer"
          >
            <label className="text-clip">{menu.name}</label>

            {menu.id === "about" &&
              !isInViewFooter &&
              isInViewAbout &&
              LineAnimation()}
            {menu.id === "footer" && isInViewFooter && LineAnimation()}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Header;
