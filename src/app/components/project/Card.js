"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

const Card = ({ filterData }) => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      offset: 100,
      easing: "ease",
      // Add more AOS options here
    });
  }, []);
  return (
    <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
      {filterData.map((data, index) => (
        <div
          className="w-[95%] lg:w-[85%] h-[250px] m-auto flex flex-col gap-2 rounded-lg bg-white shadow-lg p-2"
          key={index}
          data-aos="zoom-in-up"
        >
          <div className="w-full h-[170px]">
            <Image
              src={data.image}
              // width="100%"
              // height={170}
              alt="project-image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="h-[80px] w-full flex items-center justify-center">
            <a
              href={data.link}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full"
            >
              <button className="bg-[#21243d] text-white text-sm px-8 h-[35px] w-[100%] shadow-lg rounded-lg hover:bg-[#2d3044] ease-in-out">
                View
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
