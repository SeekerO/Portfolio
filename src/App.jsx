//Pages
import Header from "./frontend/layout/header/Header";
import Footer from "./frontend/layout/footer/Footer";
import Content from "./frontend/layout/content/Content";
//Lottie
import CornerLottie from "../src/frontend/util/lottie/cornerAnimation/CornerLottie";
//Vercel Analytics
import { Analytics } from "@vercel/analytics/react";
//Hooks
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import ParticlesComponent from "./frontend/util/lottie/particles/ParticlesComponent";

function App() {
  const refHero = useRef(null);
  const refProjects = useRef(null);
  const refAbout = useRef(null);
  const refFooter = useRef(null);

  const isInViewHero = useInView(refHero);
  const isInViewProjects = useInView(refProjects);
  const isInViewAbout = useInView(refAbout);
  const isInViewFooter = useInView(refFooter);

  return (
    <div className="bg-[#] w-auto h-auto">
      <Analytics />
      <div className="absolute">
        <CornerLottie />
      </div>

      <header className="w-full flex">
        <Header
          isInViewHero={isInViewHero}
          isInViewProjects={isInViewProjects}
          isInViewAbout={isInViewAbout}
          isInViewFooter={isInViewFooter}
        />
      </header>

      <div className="w-full flex flex-col overflow-hidden relative">
        <Content
          refHero={refHero}
          refProjects={refProjects}
          refAbout={refAbout}
        />
        <div className="absolute">
          <ParticlesComponent id="particles" />
        </div>
      </div>
      <footer ref={refFooter} className="flex w-full">
        <Footer />
      </footer>
      <div className="w-full flex justify-end">
        <div className="rotate-180">
          <CornerLottie />
        </div>
      </div>
    </div>
  );
}

export default App;
