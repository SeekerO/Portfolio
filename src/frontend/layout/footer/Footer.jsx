import React from "react";
import { FaGithub, FaFacebook, FaDiscord } from "react-icons/fa";
import { MdCall, MdOutlineMailOutline } from "react-icons/md";
const Footer = () => {
  const meta_data_contact = [
    { soc: "Twitter", href: "https://twitter.com/seekeroffi" },
    { soc: "Facebook", href: "https://www.facebook.com/baisa001" },
    { soc: "Github", href: "https://github.com/SeekerO" },
    { soc: "Discord", href: "https://discordapp.com/users/405593735532118026" },
  ];

  const iconSetter = (soc) => {
    if (soc === "Twitter") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="48px"
          height="48px"
          className="contacts-icon "
        >
          <path
            fill="white"
            d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"
          />
        </svg>
      );
    } else if (soc === "Facebook") {
      return (
        <FaFacebook className=" contacts-icon  h-[48px] w-[48px] text-white" />
      );
    } else if (soc === "Discord") {
      return (
        <FaDiscord className=" contacts-icon  h-[48px] w-[48px] text-white" />
      );
    } else if (soc === "Github") {
      return (
        <FaGithub className=" contacts-icon  h-[48px] w-[48px] text-white" />
      );
    }
  };

  function openLink(url) {
    window.open(url, "_blank");
  }
  return (
    <div
      className="textColor pt-40 pb-40 px-10 md:px-40 flex flex-col items-center justify-center w-full"
      id="footer"
    >
      <label className="font-semibold text-[40px] text-center flex flex-col">
        DON'T HESITATE TO MESSAGE ME!{" "}
        <em className="font-light text-[20px]">
          Let's discuss what you require for your online application or website.
        </em>
      </label>
      <div className="md:flex grid items-center justify-center gap-28 ">
        <div className="flex flex-wrap gap-2 mt-16 mb-2 justify-center">
          <div className="flex items-center justify-center gap-1">
            <MdOutlineMailOutline className="h-[30px] w-[30px] text-white" />
            <label className="hover:text-blue-500 hover:cursor-pointer hover:underline">
              albertbaisa@gmail.com
            </label>
          </div>
          <div className="flex items-center justify-center gap-1">
            <MdCall className="h-[30px] w-[30px] text-white" />
            <label>+639612253769</label>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {meta_data_contact.map((meta_data, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center px-7 mt-10 hover:cursor-pointer"
              onClick={() => openLink(meta_data.href)}
            >
              <div className="flex flex-shrink-0 contacts-icon items-center justify-center">
                {iconSetter(meta_data.soc)}
              </div>
              <label className="tracking-widest font-thin">
                {meta_data.soc}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
