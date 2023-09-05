import React, { useEffect } from "react";
import "./Skills.css";
import WrapperContainer from "@/app/WrapperContainer";
import { skill } from "./skillData";
import AOS from "aos";

const Skills = () => {
  const handleDownload = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1grlRa7sulmsyqfP4zAEKOJQUhWc9YTZc/view?usp=drivesdk";

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.target = "_blank";
    link.download =
      "file/d/1grlRa7sulmsyqfP4zAEKOJQUhWc9YTZc/view?usp=drivesdk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    AOS.init({
      duration: 200, // Animation duration in milliseconds
      offset: 150, // Offset (in pixels) from the element's position when triggering animation
      easing: "ease", // Animation easing (default: 'ease')
      // Add more AOS options here
    });
  }, []);
  return (
    <section id="skills" className="skills_main_container pt-6">
      <WrapperContainer>
        <div className="w-full text-center pt-6">
          <h1
            className="text-white text-[23px] md:text-2xl lg:text-3xl mb-6"
            data-aos="fade-up"
          >
            SKILLS
          </h1>
        </div>
        <div className="w-full flex flex-col md:flex-row mt-4">
          <div className="w-full h-auto md:w-1/2 md:h-[400px] text-white flex items-center justify-center flex-wrap">
            <div
              className="w-full h-auto flex flex-wrap items-center gap-8"
              data-aos="fade-up"
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
          <div className="w-full h-auto md:w-1/2 md:h-[400px] text-white flex items-center justify-center">
            <div className="w-full mt-8" data-aos="fade-up">
              <p className="skill_para font-light text-sm md:text-base">
                I am a frontend developer with 8 months of experince in React
                and state management like Redux with proficiency in web
                technology like HTML5, CSS3, javaScript, building large-scale
                web applications, cross-browser platforms, and design
                constraints on web, and building responsive user interfaces.
              </p>
              <div className="cv_download_btn_div">
                <button className="cv_download_btn" onClick={handleDownload}>
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default Skills;
