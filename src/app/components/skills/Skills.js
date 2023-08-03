import React, { useEffect } from "react";
import "./Skills.css";
import WrapperContainer from "@/app/WrapperContainer";
import { skill } from "./skillData";
import AOS from "aos";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 300, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the element's position when triggering animation
      easing: "ease", // Animation easing (default: 'ease')
      // Add more AOS options here
    });
  }, []);
  return (
    <section className="skills_main_container pt-6">
      <WrapperContainer>
        <div className="w-full text-center pt-6">
          <h1 className="text-white text-3xl" data-aos="fade-up">
            SKILLS
          </h1>
        </div>
        <div className="w-full flex mt-4">
          <div className="w-1/2 h-[400px] text-white flex items-center justify-center flex-wrap">
            <div
              className="w-full h-auto flex flex-wrap items-center gap-8"
              data-aos="fade-right"
            >
              {skill.map((val, index) => (
                <div
                  className="w-1/4 h-20 flex flex-col items-center justify-center text-5xl skill_icon"
                  key={index}
                >
                  <span style={{ color: val.clr }}>{val.icon}</span>
                  <span className="text-sm mt-1">{val.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 h-[400px] text-white flex items-center justify-center">
            <div className="w-full" data-aos="fade-left">
              <p className="skill_para">
                A frontend developer with less than one year of experience. I'm
                proficient in HTML , CSS , JAVASCRIPT, and have experience
                working with popular frontend framework like React js and Next
                js. I have excellent problem solving abilities and keen eye for
                detail.
              </p>
              <div className="cv_download_btn_div">
                <button className="cv_download_btn">Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default Skills;
