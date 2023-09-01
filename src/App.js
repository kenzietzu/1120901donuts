import "locomotive-scroll/dist/locomotive-scroll.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Works from "./components/Works";
import GlobalStyles from "./GlobalStyles";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import useLocoScroll from "./components/useLocoScroll";
import { useRef } from "react";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  useLocoScroll();
  const containerRef = useRef(null);

  return (
    <>
      <GlobalStyles />
      {/* <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        }}
        watch={[]}
        containerRef={containerRef}
      > */}
      <main className="App" data-scroll-container ref={containerRef}>
        <ScrollTriggerProxy />
        <Header />
        <Works />
        <Contact />
      </main>
      {/* </LocomotiveScrollProvider> */}
    </>
  );
}

export default App;
