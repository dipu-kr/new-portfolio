import React from "react";
import Image from "next/image";
import "./Intro.css";
import WrapperContainer from "@/app/WrapperContainer";
import Navbar from "../navbar/Navbar";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const Intro = () => {
  return (
    <section className="intro_main_container">
      <div className="background_img"></div>
      <div className="cloud_soft">
        <img src="/image/cloud-soft.png" atl="img" />
      </div>
      <div className="cloud">
        <img src="/image/cloud.png" />
      </div>
      <WrapperContainer>
        <Navbar />
        <div className="about_container w-full flex items-center justify-center gap-6 flex-col-reverse md:flex-row h-100 md:gap-x-14 relative">
          <div className="about_con_div w-full md:w-3/6">
            <div className="flex items-center text-white text-2xl md:text-3xl lg:text-4xl">
              <h2>Hello</h2>
              <img
                src="/image/hand.png"
                className="mx-2 w-[40px] md:w-[50px]"
              />
              <h2>, I Am</h2>
            </div>
            <div className="name_div">
              <div className="name_div_child">
                <h1 className="text-white text-3xl lg:text-5xl md:mt-3 md:mb-4">
                  Dipu Kumar Mandal
                </h1>
              </div>
              <div className="name_div_child">
                <h1 className="text-white text-3xl leading-normal lg:text-5xl md:mt-3 md:mb-4">
                  a Frontend Developer
                </h1>
              </div>
            </div>

            <p className="text-white my-5 text-sm md:text-1xl text-justify md:mb-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters,
            </p>
            <div className="mt-6">
              <Link href="#contact">
                <button className="flex items-center justify-between bg-white text-black px-3 py-1 md:px-6 md:py-3 rounded-sm  text-1xl md:text-2xl group hover:bg-yellow-500 relative transition duration-150 ease-out hover:ease-in">
                  Contact me
                  <span className="bg-yellow-500 text-black p-1 ml-3 rounded-full group-hover:bg-white transition duration-150 ease-out hover:ease-in">
                    <BsArrowUpRight className=" text-xs md:text-sm" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className=" w-full md:w-3/6 h-[250px] md:h-auto flex items-start justify-center lg:mt-8">
            <img src="/image/girl.png" alt="image" className="intro_main_img" />
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default Intro;