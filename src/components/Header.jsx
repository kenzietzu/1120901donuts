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
  background-color: none;
  z-index: 100;
`;

const Bg = styled.div`
  position: absolute;
  background-color: #ffe4d3;
  height: 100vh;
  width: 100vw;
  z-index: 100;
`;

const Container = styled.div`
  width: 100%;
  height: 98vh;
  border-bottom-left-radius: 40px 40px;
  border-bottom-right-radius: 40px 40px;
  color: #ffffff;
  background-image: url(${headerImage});
  background-color: #ffe4d3;
  background-size: cover;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: none; */
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 60px;
`;

function Header() {
  const headerRef = useRef(null);
  const containerRef = useRef(null);
  Splitting({
    target: "[data-splitting]",
    by: "words",
  });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //title animation
      const words = gsap.utils.toArray(".word");
      let titleTl = gsap.timeline({ delay: 0 });
      words.forEach((e) => {
        titleTl.from(
          e,
          { yPercent: 280, duration: 0.5, ease: "back.out" },
          "-=0.2"
        );
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //layout animation
      let layoutTL = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          end: "bottom 50%",
          scrub: true,
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
    <Section ref={headerRef}>
      <Bg ref={containerRef}>
        <Container>
          <Wrapper>
            <Title data-splitting>WELCOME TO CHARLIE'S DONUTS</Title>
          </Wrapper>
        </Container>
      </Bg>
      <About />
    </Section>
  );
}

export default Header;
