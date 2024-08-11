import Header from "./frontend/layout/header/Header";
import Footer from "./frontend/layout/footer/Footer";
import Content from "./frontend/layout/content/Content";
import CornerLottie from "../src/frontend/util/lottie/CornerLottie";
import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
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
    <div className="bg-[#0C1618] w-auto h-auto">
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

      <div className="w-full flex flex-col selection:overflow-hidden">
        <Content
          refHero={refHero}
          refProjects={refProjects}
          refAbout={refAbout}
        />
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
