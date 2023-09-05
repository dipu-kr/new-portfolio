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
    <div
      className="contactus_container flex items-center pb-4 md:pb-0"
      id="contact"
    >
      <WrapperContainer>
        <div className="w-full text-center pt-8" data-aos="fade-up">
          <h1 className="text-white text-[18px] md:text-2xl">
            Any Question? Feel Free
          </h1>
          <h1 className="text-white text-[18px] md:text-2xl">to Contact</h1>
        </div>
        <div className="w-full h-auto flex flex-col md:flex-row gap-8 mt-[40px] pt-6">
          <div
            className="basis-2/4 md:basis-3/12 h-auto bg-[#1c1c1c] md:pt-[35px] p-[18px] md:pr-[20px] md:pl-[20px] rounded-lg "
            data-aos="fade-up"
          >
            <p className="text-white font-light text-xs md:text-sm text-justify tracking-wide">
              I would be happy to answer any questions, you may have about my
              skills.
            </p>
            <p className="flex items-center text-white mt-6">
              <span className="mr-3 text-[20px] md:text-xl">
                <BiPhoneCall />
              </span>
              <a
                href="tel:7644949363"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="font-light text-xs md:text-sm">
                  +917644949363
                </span>
              </a>
            </p>
            <p className="flex items-center text-white mt-4">
              <span className="mr-3 text-[20px] md:text-xl">
                <AiOutlineWhatsApp />
              </span>
              <a
                href="https://wa.me/917087164123?text=Hi"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="font-light text-xs md:text-sm">
                  +917087164123
                </span>
              </a>
            </p>
            <p className="flex items-center text-white mt-4">
              <span className="mr-3 text-[20px] md:text-xl">
                <MdOutlineEmail />
              </span>
              <a href="mailto:dipum906@gmail.com" target="_black">
                <span className="font-light text-xs md:text-sm">
                  dipum906@gmail.com
                </span>
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
