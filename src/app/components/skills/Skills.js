import React from "react";
import "./Skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiGitMerge, DiResponsive } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiClockify, SiTailwindcss } from "react-icons/si";
import { SlRocket } from "react-icons/sl";

const skill = [
  {
    id: 1,
    icon: <AiFillHtml5 />,
    clr: "#D95707",
  },
  {
    id: 2,
    icon: <DiCss3 />,
    clr: "#0F66F5",
  },
  {
    id: 3,
    icon: <BsBootstrapFill />,
    clr: "#7B1FA2",
  },
  {
    id: 4,
    icon: <SiTailwindcss />,
    clr: "#3490dc",
  },
  {
    id: 5,
    icon: <TbBrandJavascript />,
    clr: "#F39C12",
  },
  {
    id: 6,
    icon: <FaReact />,
    clr: "lightblue",
  },
  {
    id: 7,
    icon: <SiRedux />,
    clr: "#9C27B0",
  },
  {
    id: 8,
    icon: <TbBrandNextjs />,
    clr: "#ffffff",
  },
  {
    id: 9,
    icon: <DiGitMerge />,
    clr: "#CB4335 ",
  },
];

const Skills = () => {
  return (
    <section className="skills_main_container">
      <div className="w-full text-center pt-6">
        <h1 className="text-white text-3xl" data-aos="fade-up">
          SKILLS
        </h1>
      </div>
      <div className="w-full flex">
        <div className="w-1/2 h-[400px] text-white flex items-center justify-center flex-wrap">
          <div
            className="w-2/3 h-auto flex flex-wrap items-center justify-center gap-8"
            data-aos="fade-up"
          >
            {skill.map((val, index) => (
              <span
                className="w-1/4 h-10 flex items-center justify-center text-5xl skill_icon"
                key={index}
                style={{ color: val.clr }}
              >
                {val.icon}
              </span>
            ))}
          </div>
        </div>
        <div className="w-1/2 h-[400px] text-white flex items-center justify-center">
          <div className="w-3/4" data-aos="fade-up">
            <p className="skill_para">
              A frontend developer with less than one year of experience. I'm
              proficient in HTML , CSS , JAVASCRIPT, and have experince working
              with popular frontend framework like React js and Next js. I have
              excellent problem solving abilities and keen eye for detail.
            </p>
            <div className="cv_download_btn_div">
              <button className="cv_download_btn">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
