"use client";
import React, { useState, useEffect } from "react";
import "./Project.css";
import WrapperContainer from "@/app/WrapperContainer";
import Card from "./Card";
import { dataList } from "./projectsData";
import AOS from "aos";

const Project = () => {
  const [filterData, setFilterData] = useState(dataList);
  const [category, setCategory] = useState("all");
  const [select, setSelect] = useState("all");

  //------------------ filter data funtion-------------
  useEffect(() => {
    if (category === "all") {
      setFilterData(dataList);
      setSelect("all");
    }
    if (category === "static") {
      const filterItem = dataList.filter((val) => val.type === category);
      setFilterData(filterItem);
      setSelect("web_page");
    }
    if (category === "dynamic") {
      const filterItem = dataList.filter((val) => val.type === category);
      setFilterData(filterItem);
      setSelect("web_app");
    }
  }, [category]);

  useEffect(() => {
    AOS.init({
      duration: 400,
      offset: 100,
      easing: "ease",
      // Add more AOS options here
    });
  }, []);
  return (
    <section id="projects" className="project_main_container">
      <WrapperContainer>
        <div className="w-full h-auto">
          <div className="w-full text-center pt-8">
            <h1
              className="text-white text-[18px] md:text-2xl mb-6"
              data-aos="fade-up"
            >
              Check My Portfolio
            </h1>
          </div>
          <div className="w-full flex items-center justify-center mt-6">
            <div className="w-[80%] md:w-1/3 md:h-[45px] flex items-center justify-center rounded-lg gap-2">
              <button
                onClick={() => setCategory("all")}
                className={`h-[32px] text-xs md:text-[13px]  md:h-[35px] outline-none flex-1 bg-gray-700 hover:ease-in-out text-slate-200 hover:bg-slate-200 hover:text-black shadow-lg rounded-full ${
                  select === "all" && "select"
                }`}
                data-aos="fade-up"
              >
                All
              </button>
              <button
                onClick={() => {
                  setCategory("static");
                  setSelect("web_page");
                }}
                className={`h-[32px] text-xs md:text-[13px]  md:h-[35px] outline-none flex-1 bg-gray-700 hover:ease-in-out text-slate-200 hover:bg-slate-200 hover:text-black shadow-lg rounded-full ${
                  select === "web_page" && "select"
                }`}
                data-aos="fade-up"
              >
                Web Page
              </button>
              <button
                onClick={() => {
                  setCategory("dynamic");
                  setSelect("web_app");
                }}
                className={`h-[32px] text-xs md:text-[13px]  md:h-[35px] outline-none flex-1 bg-gray-700 hover:ease-in-out text-slate-200 hover:bg-slate-200 hover:text-black shadow-lg rounded-full ${
                  select === "web_app" && "select"
                }`}
                data-aos="fade-up"
              >
                Web App
              </button>
            </div>
          </div>
          <div className="w-full mt-8 pb-8">
            <Card filterData={filterData} />
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default Project;
