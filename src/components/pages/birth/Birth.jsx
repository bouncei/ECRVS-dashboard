import React, { useEffect, useState } from "react";
import {
  MotherChart,
  ChildChart,
  DonutChart,
  LineGraph,
  GenderChart,
  HorizontalChart,
} from "../../charts";
// import { FaMale, FaFema } from "react-icons/fa";
import { FiShoppingCart, FiMapPin, FiMessageCircle } from "react-icons/fi";
import { SlDrawer } from "react-icons/sl";
import axios from "../../../axios";

const HeaderCard = ({ title, number, icon, color, bgColor }) => {
  return (
    <div
      className={`w-full md:w-auto flex items-start justify-between p-5 pb-10 rounded-md text-white`}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div className="flex flex-col">
        <p>{title}</p>
        <p>{number}</p>
      </div>
      <div
        className="flex align-items-center justify-content-center bg-white border-round p-3 rounded-md"
        style={{ color: `${color}` }}
      >
        {icon}
      </div>
    </div>
  );
};

const Main = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "birth-registration/stats/birth-statistic-data"
      );
      console.log("Testing API", res.data[0]);
      setData(res.data[0]);
    })();
  }, []);

  console.log(data);
  const dummyData = [
    {
      title: "Pending Registrations",
      number: data.pending,
      icon: <FiShoppingCart size={20} />,
      bgColor: "#2d96fb",
      color: "#2196f3",
    },
    {
      title: "Approved Registrations",
      number: data.approved,
      icon: <FiMapPin size={20} />,
      bgColor: "#fea93b",
      color: "#fea93b",
    },
    {
      title: "Printed Certificates",
      number: data.printed,
      icon: <SlDrawer size={20} />,
      bgColor: "#0d5cab",
      color: "#2d96fb",
    },
    {
      title: "Queried Registsrations",
      number: data.querried,
      icon: <FiMessageCircle size={20} />,
      bgColor: "#f30c1c",
      color: "#f30c1c",
    },
  ];
  return (
    <div className=" mt-3 w-full">
      <div className="flex-auto">
        <div className=" p-3 pt-20 w-auto min-w-full pb-4 flex flex-col ">
          <div className="bg-green-700 py-1  md:py-2 mb-3">
            <span className="text-0 pl-4 text-white font-bold text-sm flex items-center space-x-1">
              <p>Total Registrations:</p>
              <p>{data.total_registration}</p>
            </span>
          </div>

          <div className="mx-2 flex flex-col md:grid md:grid-cols-4 mb-4 items-center md:gap-3 space-y-3">
            {dummyData.map((item, index) => (
              <HeaderCard
                key={index}
                title={item.title}
                icon={item.icon}
                number={item.number}
                bgColor={item.bgColor}
                color={item.color}
              />
            ))}
          </div>

          <div className="mt-1 mx-2">
            <div className="flex flex-col md:flex-row items-center md:gap-x-4 gap-y-3 ">
              <div className="w-full shadow-lg">
                <div className="bg-white rounded p-5">
                  <div className="text-left tracking-wide text-900 font-medium  pb-2 md:pb-4 ">
                    Statistics By Age
                  </div>
                  <div className="w-full md:w-auto ">
                    <HorizontalChart />
                  </div>
                </div>
              </div>

              <div className="w-full shadow-lg">
                <div className="bg-white rounded p-5">
                  <div className="text-left tracking-wide text-900 font-medium pb-2 md:pb-4 ">
                    Under 5 Birth Registrations
                  </div>
                  <div className="w-full md:w-auto ">
                    <ChildChart />
                    {/*
                  <HorizontalChart />
                
                */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 mx-2">
            <div className="flex flex-col md:flex-row items-start md:gap-x-4 gap-y-3 ">
              <div className="shadow-lg w-full p-5 md:max-w-[50%] rounded  bg-white">
                <div className="text-left tracking-wide text-900 font-medium  pb-2 md:pb-4 ">
                  Mother's Age at Birth
                </div>
                <div className="w-full md:w-auto ">
                  <MotherChart />
                </div>
              </div>
              <div className=" shadow-lg md:max-w-[50%] w-full p-5  bg-white rounded">
                <div className="text-left tracking-wide text-900 font-medium  pb-2 md:pb-4 ">
                  Birth VS Death Comparison
                </div>
                <div className="flex flex-col items-center justify-center h-auto">
                  <div className="w-full md:w-auto ">
                    <DonutChart />
                    {/*
                
                */}
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 mx-2">
            <div className="flex flex-col md:flex-row  md:gap-x-3 gap-y-3 ">
              <div className="shadow-lg w-full md:max-w-[70%] ">
                <div className="p-5 shadow-lg bg-white rounded">
                  <p className="text-left tracking-wide text-900 font-medium  pb-2 md:pb-4 ">
                    Birth by Place of Occurrence
                  </p>
                  <div className="w-full md:w-auto ">
                    <LineGraph />
                  </div>
                </div>
              </div>

              <div className="w-full md:max-w-[30%] shadow-lg">
                <div className="bg-white rounded p-5">
                  <div className="text-left tracking-wide text-900 font-medium  pb-2 md:pb-4 ">
                    Birth by Sex
                  </div>
                  <div className="w-full md:w-auto ">
                    <GenderChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
