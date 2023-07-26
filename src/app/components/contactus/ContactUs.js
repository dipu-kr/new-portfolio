import React from "react";
import "./ContactUs.css";
import WrapperContainer from "@/app/WrapperContainer";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="contactus_container mb-8">
      <WrapperContainer>
        <div className="w-full text-center pt-6">
          <h1 className="text-white text-3xl">Any Question? Feel Free</h1>
          <h1 className="text-white text-3xl">to Contact</h1>
        </div>
        <div className="w-full h-auto flex flex-wrap gap-6 mt-[40px] pt-6">
          <div className="w-1/4 h-[300px] bg-[#1c1c1c] pt-[35px] pr-[20px] pl-[20px] rounded-lg">
            <p className="text-white text-justify tracking-wide">
              I would be happy to answer any questions you may have about my
              skills.
            </p>
            <p className="flex items-center text-white mt-6">
              <span className="mr-3 text-2xl">
                <BiPhoneCall />
              </span>
              <span>+917644949363</span>
            </p>
            <p className="flex items-center text-white mt-4">
              <span className="mr-3 text-2xl">
                <AiOutlineWhatsApp />
              </span>
              <span>+917087164123</span>
            </p>
            <p className="flex items-center text-white mt-4">
              <span className="mr-3 text-2xl">
                <MdOutlineEmail />
              </span>
              <span>dipum906@gmail.com</span>
            </p>
          </div>
          {/* ---------------------form------------- */}
          <div className="w-[3/4] border">
            <h1>form content</h1>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default ContactUs;
