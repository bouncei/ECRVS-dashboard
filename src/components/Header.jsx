import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import { AiOutlineDown } from "react-icons/ai";

// PAGE COMPONENTS
import Left from "./Left";

// Icons
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [sideMenu, setSideMenu] = useState(false);
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

    setSideMenu(!sideMenu);
    setState({ ...state, [anchor]: open });
  };

  return (
    <div
      className={
        "fixed w-full p-1 md:p-3 h-12 md:h-auto shadow-xl z-[100] ease-in-out duration-300 bg-[#0E7705]"
      }
    >
      <div className="flex justify-between items-center w-full md:w-[85%] h-full px-2 2xl:px-16">
        <div className="h-full bg-white  text-[#0E7705] ml-2 rounded-md text-center hidden lg:flex items-center  ">
          <form className="group relative">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:border-amber-600"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              className="focus:ring-2 focus:border-amber-600 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-800 placeholder-slate-400 focus:ring-green-200 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
              type="text"
              aria-label="Filter"
              placeholder="Search..."
            />
          </form>
        </div>
        <div className="flex md:flex-none justify-between">
          <div
            className="text-white lg:hidden pr-8 cursor-pointer"
            onClick={toggleDrawer("left", true)}
          >
            {sideMenu ? <RiCloseLine size={25} /> : <RiMenuLine size={25} />}
          </div>
        </div>
      </div>

      {/* SIDE DRAWER MENU
    
      <SideBar isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    */}
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <Left left="left" />
      </Drawer>
    </div>
  );
};

export default Header;
