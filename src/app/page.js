"use client";
import { useEffect } from "react";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration in milliseconds
      offset: 80, // Offset (in pixels) from the element's position when triggering animation
      easing: "ease-in-out", // Animation easing (default: 'ease')
      // Add more AOS options here
    });
  }, []);
  return (
    <div className="w-full overflow-x-hidden">
      <Intro />
      <Skills />
      <Project />
    </div>
  );
}
