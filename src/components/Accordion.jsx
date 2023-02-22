import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { Link } from "react-router-dom";

function Accordion({ link, sub, icon }) {
  const [show, setShow] = useState(false);

  return (
    <div className="border-b border-white">
      <div
        className="flex px-3 md:py-4 md:px-4 cursor-pointer text-sm md:text-base items-center justify-between  text-white"
        onClick={() => setShow(!show)}
      >
        <div className="flex items-center gap-x-2 ">
          <div className="text-2xl">{icon}</div>
          <span className={`origin-left duration-200 `}>{link}</span>
        </div>

        <AiOutlineRight size={20} />
      </div>

      {show &&
        sub.map((item, index) => (
          <div
            key={index}
            className="pl-8 pt-4 pb-2 text-sm md:text-base text-left text-white cursor-default"
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
}

export default Accordion;
