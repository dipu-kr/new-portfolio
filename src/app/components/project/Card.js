"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

const Card = ({ dataList }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 120,
      easing: "ease",
      // Add more AOS options here
    });
  }, []);
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {dataList.map((data, index) => (
        <div
          className="w-full h-[250px] flex flex-col gap-2 rounded-lg bg-white shadow-lg p-2"
          key={index}
          data-aos="fade-down"
        >
          <div className="w-full h-[170px]">
            <Image
              src={data.image}
              width="100%"
              height={170}
              alt="project-image"
              className="h-[170px] w-[100%] bg-contain bg-center"
              layout="responsive"
            />
          </div>
          <div className="h-[80px] w-full flex items-center justify-center">
            <a
              href={data.link}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full"
            >
              <button className="bg-[#21243d] text-white px-8 h-[40px] w-[100%] shadow-lg rounded-lg hover:bg-[#2d3044] ease-in-out">
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
