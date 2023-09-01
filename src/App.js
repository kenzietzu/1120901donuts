import "locomotive-scroll/dist/locomotive-scroll.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Works from "./components/Works";
import GlobalStyles from "./GlobalStyles";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
// import useLocoScroll from "./components/useLocoScroll";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  // useLocoScroll();
  const lenisRef = useRef(null);
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  useEffect(() => {
    function update(time) {
      lenisRef.current?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <>
      <GlobalStyles />

      <ReactLenis root ref={lenisRef} autoRaf={false}>
        <ScrollTriggerProxy />
        <Header />
        <Works />
        <Contact />
      </ReactLenis>
    </>
  );
}

export default App;
