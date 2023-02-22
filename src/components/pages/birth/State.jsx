import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-router-dom";

const State = () => {
  return (
    <div className="mt-3 w-full">
      <div className="flex-auto">
        <div className="p-3 pt-20 w-auto min-w-full pb-4 flex flex-col">
          <div className="w-full md:w-[20vw] flex items-start justify-between p-5 pb-6 bg-white rounded-md shadow-lg">
            <div className="flex flex-col gap-y-5">
              <p className="block  text-sm font-medium">
                Total Birth Registrations
              </p>
              <div className="flex flex-col space-y-2">
                <p className=" font-bold text-xl">12,000,000</p>

                <div className="flex items-center text-green-500 font-bold">
                  <AiOutlineArrowUp />
                  <p className="text-xs">46%</p>
                </div>
              </div>
            </div>
            <div
              className="flex align-items-center justify-content-center "
              style={{ width: "2.8rem", height: "2.8rem" }}
            >
              <img
                src="https://bgl-birth.vercel.app/static/media/naija.6cb8a7f0.png"
                className="w-full"
              />
            </div>
          </div>

          <p className="text-left pt-8 pb-4 font-semibold ">
            Registrations by state
          </p>

          <div className="bg-green-700 py-2 mb-3"></div>

          <div className="py-4 flex flex-col md:grid md:grid-cols-3 gap-4 ">
            <div className="flex flex-col items-center bg-white shadow-xl rounded-md p-3 space-y-2">
              <img
                src="https://bgl-birth.vercel.app/static/media/72.7117ca72.png"
                className="w-[3rem] h-[3rem]"
              />
              <span className="text-md uppercase font-bold">adamawa</span>
              <span className="text-xs text-green-500 ">6,500,000</span>
              <img
                src="data:image/png;base64,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"
                className="w-[3rem] h-[3rem]"
              />

              <Link
                to="/birth/lga/:lgaid"
                className="text-green-500 text-xs font-bold  cursor-pointer"
              >
                view lgas
              </Link>

              <Link
                to="/birth/list/:zonalid/:stateid/:lgaid"
                className="text-green-500 text-xs font-bold  cursor-pointer"
              >
                view registrations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
