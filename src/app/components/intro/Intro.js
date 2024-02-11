"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "./Intro.css";
import WrapperContainer from "@/app/WrapperContainer";
import Navbar from "../navbar/Navbar";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const Intro = () => {
  useEffect(() => {
    // Set the scroll position to (0, 0) on component mount (page load)
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="intro_main_container">
      <div className="background_img"></div>
      <WrapperContainer>
        <Navbar />
        <div
          id="about"
          className="about_container w-full h-auto md:h-[100vh - 70px] flex items-center justify-center gap-6 flex-col-reverse md:flex-row  md:gap-x-14 relative"
        >
          <div className="about_con_div w-full md:w-3/6">
            <div className="flex items-center">
              <h2 className="text-white text-lg md:text-xl">Hello</h2>
              <Image
                src="/image/hand.png"
                alt="icon"
                width={40}
                height={40}
                className="mx-2"
              />
              <h2 className="text-white text-[20px] md:text-xl"> I Am</h2>
            </div>
            <div className="name_div">
              <div className="name_div_child">
                <h1 className="text-white text-[20px] md:text-[22px] md:mt-3 md:mb-2">
                  Dipu Kumar Mandal
                </h1>
              </div>
            </div>

            <p className="text-white my-3 md:my-3 font-light text-xs md:text-sm text-justify">
              As a frontend developer, I specialize in creating user interfaces
              and experiences that bring websites and web applications to life.
            </p>
            <div className="mt-4 inline-block">
              <Link href="https://github.com/dipu-kr" target="_blank">
                <button className="flex items-center justify-between bg-white text-black px-3 py-1 md:px-4 md:py-2 rounded-sm  text-sm group hover:bg-yellow-500 relative transition duration-150 ease-out hover:ease-in">
                  Github Link
                  <span className="bg-yellow-500 text-black p-1 ml-3 rounded-full group-hover:bg-white transition duration-150 ease-out hover:ease-in">
                    <BsArrowUpRight className=" text-xs md:text-sm" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-3/6 h-auto flex justify-center mt-8 md:flex md:items-center md:justify-center">
            <div className="flex justify-center mt-0 md:flex md:items-center md:justify-center">
              <Image
                src="/image/user.png"
                alt="Moon"
                priority={true}
                width={400}
                height={300}
                // layout="responsive"
                className="h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default Intro;
