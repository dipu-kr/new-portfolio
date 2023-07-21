import React from "react";
import "./Project.css";
import WrapperContainer from "@/app/WrapperContainer";

const Project = () => {
  return (
    <section className="project_main_container">
      <WrapperContainer>
        <div className="w-full h-[90vh] border">
          <div className="w-full text-center pt-6">
            <h1 className="text-white text-3xl" data-aos="fade-up">
              Check My Portfolio
            </h1>
          </div>
          <div className="w-full flex items-center justify-center mt-6">
            <div className="w-1/3 h-[45px] flex items-center justify-center rounded-lg gap-2">
              <button className="h-[45px] outline-none flex-1 bg-gray-700 hover:ease-in-out text-slate-200 hover:bg-slate-200 hover:text-black shadow-lg rounded-full">
                All
              </button>
              <button className="h-[45px] outline-none flex-1 bg-gray-700 hover:ease-in-out text-slate-200 hover:bg-slate-200 hover:text-black shadow-lg rounded-full">
                Web Page
              </button>
              <button className="h-[45px] outline-none flex-1 bg-gray-700 hover:ease-in-out text-slate-200 hover:bg-slate-200 hover:text-black shadow-lg rounded-full">
                Web App
              </button>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default Project;
