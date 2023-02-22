import React from "react";
import { Box } from "@mui/material";
import { BsPerson } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import {
  AiOutlineFileExcel,
  AiOutlineCheck,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdOutlineLibraryBooks, MdOutlinePeopleAlt } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
// import Accordion from "./Accordion";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Left = (anchor) => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

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
    <Box
      sx={{
        width: 290,
        backgroundColor: "#0E7705",
        // color: "white",
        height: "100%",
      }}
      className="filter flex-col bg-[#0E7705] "
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        className="w-full  bg-white"
        sx={{
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-2xl align-baseline text-[#faf8f8] flex p-3 pt-3  text-lg font-black space-x-3 items-center">
          <div className=" relative h-12 w-12">
            <img
              src="https://bgl-birth.vercel.app/static/media/72.7117ca72.png"
              alt="logo"
              className="rounded-full " // just an example
            />
          </div>

          <p className={`text-[#4caf50] text-sm leading-4 font-semibold `}>
            ECRVS Central <br />
            Management System
          </p>
        </div>
      </div>

      <div className="  ">
        <ul className="flex flex-col items-start space-y-3 py-4 mx-3 bg-[#0E7705]  ">
          {Menus.map((item, index) =>
            index === 0 || index > 4 ? (
              <div
                key={index}
                className=" w-full transition ease-in-out delay-150 text-white duration-300"
              >
                <li className="px-4 py-2  text-base  border-b border-white">
                  <Link href={item.link} className="flex items-center gap-x-1">
                    <div className="text-lg font-bold">{item.icon}</div>
                    <span className="origin-left duration-200 ">
                      {item.title}
                    </span>
                  </Link>
                </li>
              </div>
            ) : (
              <Accordion link={item.title} sub={item.sub} icon={item.icon} />
            )
          )}
        </ul>
      </div>
    </Box>
  );
};

export default Left;

const Accordion = ({ link, sub, icon }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-[#0E7705] border-b border-white  w-full">
      <div
        className="flex px-4 py-2 text-base  md:text-md  cursor-pointer  items-center justify-between  text-white"
        onClick={() => setShow(!show)}
      >
        <div className="flex items-center gap-x-2 ">
          <div className="text-lg">{icon}</div>
          <span className={`origin-left duration-200 `}>{link}</span>
        </div>

        <AiOutlineRight size={20} />
      </div>

      {show &&
        sub.map((item, index) => (
          <div
            key={index}
            className="pl-8 pt-4 pb-4   text-base  text-left text-white cursor-default"
          >
            <Link to={item.link} className="flex items-center gap-x-4 ">
              <div className="text-xl font-semibold">
                <BsGraphUp />
              </div>
              <span className={`origin-left duration-200 `}>{item.title}</span>
            </Link>
          </div>
        ))}
    </div>
  );
};
