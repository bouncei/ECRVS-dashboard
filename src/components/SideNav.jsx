import React from "react";
import { BsPerson } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import {
  AiOutlineFileExcel,
  AiOutlineCheck,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdOutlineLibraryBooks, MdOutlinePeopleAlt } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import Accordion from "./Accordion";
import { Link } from "react-router-dom";

const SideNav = ({ open, onClose }) => {
  const Menus = [
    { title: "Dashboard", icon: <BiHome />, link: "/" },
    {
      title: "Birth Registration",
      icon: <BsPerson />,
      sub: [
        { title: "Statistics", link: "/birth" },
        { title: "Registration", link: "/birth/registration" },
      ],
    },
    {
      title: "Death Registration",
      icon: <AiOutlineFileExcel />,
      sub: [
        { title: "Statistics", link: "" },
        { title: "Registration", link: "" },
        { title: "Reports", link: "" },
      ],
    },
    {
      title: "Birth Attestation ",
      icon: <MdOutlineLibraryBooks />,
      sub: [
        { title: "Statistics", link: "" },
        { title: "Registration", link: "" },
        { title: "Reports", link: "" },
      ],
    },
    {
      title: "Verified Certificates",
      icon: <MdOutlineLibraryBooks />,
      sub: [
        { title: "Statistics", link: "" },
        { title: "Registration", link: "" },
        { title: "Reports", link: "" },
      ],
    },
    { title: "Verified Certiicates", icon: <AiOutlineCheck />, link: "" },
    { title: "Hospitals", icon: <HiOutlinePlusSm />, link: "" },
    { title: "Registrars/dcr", icon: <MdOutlinePeopleAlt />, link: "" },

    { title: "Settings", icon: <AiOutlineSetting />, link: "" },
  ];

  return (
    <div className="bg-[#0E7705] flex flex-col h-full justify-between">
      <div className={`flex flex-col  `}>
        {/* Header */}
        <div className="bg-white ">
          <div
            className={`h-full flex space-x-3 items-center ${
              open ? "p-1" : "px-8 py-3"
            }`}
          >
            <img
              className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${
                open && "rotate-[360deg]"
              } `}
              src="https://bgl-birth.vercel.app/static/media/72.7117ca72.png"
              alt="companyIcon"
            />
            <p
              className={`text-[#4caf50] text-sm leading-4 font-semibold ${
                open ? "hidden" : "inline-block"
              }`}
            >
              ECRVS Central <br />
              Management System
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between"></div>

        {/* Menu Items */}
        <ul className="px-4 mt-6">
          {Menus.map((item, index) =>
            index === 0 || index > 4 ? (
              <div
                key={index}
                className="transition ease-in-out delay-150 text-white "
              >
                <li
                  className={`flex px-3 md:py-4 md:px-4 cursor-pointer text-sm md:text-base items-center justify-between border-b border-white
         `}
                >
                  <Link to={item.link} className="flex items-center gap-x-1 ">
                    <div className="text-xl font-bold" onClick={onClose}>
                      {item.icon}
                    </div>
                    <span
                      className={`${
                        open ? "hidden" : "inline-block"
                      }origin-left duration-200 `}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              </div>
            ) : (
              <Accordion
                key={index}
                link={item.title}
                sub={item.sub}
                icon={item.icon}
              />
            )
          )}
        </ul>
      </div>
      {/*
    
      <div className=" pb-10">End of theh stack</div>
    */}
    </div>
  );
};

export default SideNav;
