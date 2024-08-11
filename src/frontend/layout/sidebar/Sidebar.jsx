import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
function SideBar({ openSideBar, setopenSideBar }) {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const divRef = useRef(null);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setopenSideBar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <motion.div
      ref={divRef}
      animate={openSideBar ? "open" : "closed"}
      variants={variants}
      className={`text-black h-screen w-[20rem] bg-[#192224] fixed  right-0 z-50 md:hidden`}
    >
      <IoMdClose
        onClick={() => setopenSideBar(!openSideBar)}
        className="mt-11 right-3 absolute textColor text-[30px] hover:text-red-500"
      />
      <nav className="mt-[8rem] flex flex-col gap-y-2 ">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2, // Delay before the opacity animation starts
            duration: 1, // Duration of the opacity animation
            ease: "easeOut", // Easing function for the opacity animation
          }}
          onClick={() => handleScroll("home")}
          className="side-buttonHeader"
        >
          HOME
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2, // Delay before the opacity animation starts
            duration: 1, // Duration of the opacity animation
            ease: "easeOut", // Easing function for the opacity animation
          }}
          onClick={() => handleScroll("projects")}
          className="side-buttonHeader"
        >
          PROJECTS
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2, // Delay before the opacity animation starts
            duration: 1, // Duration of the opacity animation
            ease: "easeOut", // Easing function for the opacity animation
          }}
          onClick={() => handleScroll("about")}
          className="side-buttonHeader"
        >
          ABOUT
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2, // Delay before the opacity animation starts
            duration: 1, // Duration of the opacity animation
            ease: "easeOut", // Easing function for the opacity animation
          }}
          onClick={() => handleScroll("contacts")}
          className="side-buttonHeader"
        >
          CONTACTS
        </motion.a>
      </nav>
    </motion.div>
  );
}

export default SideBar;
