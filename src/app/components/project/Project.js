"use client";
import React, { useEffect } from "react";
import "./Project.css";
import WrapperContainer from "@/app/WrapperContainer";
import Card from "./Card";
import { dataList } from "./projectsData";
import AOS from "aos";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      offset: 100,
      easing: "ease",
      // Add more AOS options here
    });
  }, []);
  return (
    <section className="project_main_container">
      <WrapperContainer>
        <div className="w-full h-auto">
          <div className="w-full text-center pt-6">
            <h1 className="text-white text-3xl" data-aos="fade-up">
              Check My Portfolio
            </h1>
          </div>
          <div className="w-full flex items-center justify-center mt-6">
            <div className="w-1/3 h-[45px] flex items-center justify-center rounded-lg gap-2">
              <button
                className="h-[45px] outline-none flex-1 bg-gray-700 hover:ease-in-out text-slate-200 hover:bg-slate-200 hover:text-black shadow-lg rounded-full"
                data-aos="fade-up"
              >
                All
              </button>
              <button
                className="h-[45px] outline-none flex-1 bg-gray-700 hover:ease-in-out text-slate-200 hover:bg-slate-200 hover:text-black shadow-lg rounded-full"
                data-aos="fade-up"
              >
                Web Page
              </button>
              <button
                className="h-[45px] outline-none flex-1 bg-gray-700 hover:ease-in-out text-slate-200 hover:bg-slate-200 hover:text-black shadow-lg rounded-full"
                data-aos="fade-up"
              >
                Web App
              </button>
            </div>
          </div>
          <div className="w-full mt-8 pb-8">
            <Card dataList={dataList} />
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default Project;
