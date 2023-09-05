import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import styled from "styled-components";
import headerImage from "../assets/donuts1.webp";
import gsap from "gsap";
import About from "./About";
import { useLayoutEffect, useRef } from "react";

const Section = styled.section`
  height: 120vh;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: none;
  z-index: 100;
`;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  border-bottom-left-radius: 40px 40px;
  border-bottom-right-radius: 40px 40px;
  color: #ffffff;
  background-image: url(${headerImage});
  background-size: cover;
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* display: none; */
`;

const Wrapper = styled.div`
  overflow: hidden;
  h1 {
    font-size: 60px;
  }
`;

function Header() {
  const headerRef = useRef(null);
  const containerRef = useRef(null);
  const aboutRef = useRef(null);
  Splitting({
    target: "[data-splitting]",
    by: "chars",
    key: null,
  });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //title animation
      const chars = gsap.utils.toArray(".word");
      const titleTl = gsap.timeline();
      chars.forEach((e, i) => {
        titleTl.fromTo(
          e,
          { opacity: 1, yPercent: 80 },
          { opacity: 1, yPercent: 0, duration: 0.3 }
        );
      });
      //layout animation
      let layoutTL = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          end: "bottom 50%",
          scrub: true,
          pin: aboutRef.current,
          pinSpacer: true,
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });
      layoutTL.to(containerRef.current, { yPercent: -100 });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section data-scroll-section ref={headerRef}>
      <Container ref={containerRef}>
        <Wrapper>
          <h1 data-splitting>WELCOME TO CHARLIE'S DONUTS</h1>
        </Wrapper>
      </Container>
      <About ref={aboutRef} />
    </Section>
  );
}

export default Header;
