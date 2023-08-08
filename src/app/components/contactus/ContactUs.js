import React, { useEffect } from "react";
import "./ContactUs.css";
import FormContent from "./FormContent";
import WrapperContainer from "@/app/WrapperContainer";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import AOS from "aos";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      offset: 120,
      easing: "ease",
      // Add more AOS options here
    });
  }, []);

  return (
    <div className="contactus_container" id="contact">
      <WrapperContainer>
        <div className="w-full text-center pt-6" data-aos="fade-up">
          <h1 className="text-white text-2xl md:text-3xl">
            Any Question? Feel Free
          </h1>
          <h1 className="text-white text-2xl md:text-3xl">to Contact</h1>
        </div>
        <div className="w-full h-auto flex flex-col md:flex-row gap-8 mt-[40px] pt-6">
          <div
            className="basis-2/4 md:basis-3/12 h-auto bg-[#1c1c1c] md:pt-[35px] p-[18px] md:pr-[20px] md:pl-[20px] rounded-lg"
            data-aos="fade-up"
          >
            <p className="text-white text-sm md:text-1xl text-justify tracking-wide">
              I would be happy to answer any questions, you may have about my
              skills.
            </p>
            <p className="flex items-center text-white mt-6">
              <span className="mr-3 text-1xl md:text-2xl">
                <BiPhoneCall />
              </span>
              <a
                href="tel:7644949363"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="text-sm md:text-1xl">+917644949363</span>
              </a>
            </p>
            <p className="flex items-center text-white mt-4">
              <span className="mr-3 text-1xl md:text-2xl">
                <AiOutlineWhatsApp />
              </span>
              <a
                href="https://wa.me/917087164123?text=Hi"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="text-sm md:text-1xl">+917087164123</span>
              </a>
            </p>
            <p className="flex items-center text-white mt-4">
              <span className="mr-3 text-1xl md:text-2xl">
                <MdOutlineEmail />
              </span>
              <a href="mailto:dipum906@gmail.com" target="_black">
                <span className="text-sm md:text-1xl">dipum906@gmail.com</span>
              </a>
            </p>
          </div>
          {/* ---------------------form------------- */}
          <div className="basis-2/4 md:basis-9/12 h-auto">
            <FormContent />
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default ContactUs;
