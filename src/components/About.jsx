import styled from "styled-components";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  background-color: #ffe4d3;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Title1 = styled.h1`
  font-size: 70px;
  position: relative;
  /* left: 460px; */
`;
const Title2 = styled.h1`
  font-size: 70px;
  position: relative;
  /* right: 460px; */
`;

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 40%",
          scrub: true,
          // markers: true,
        },
      });
      tl.to(title1Ref.current, { x: "460px" }).to(
        title2Ref.current,
        { x: "-460px" },
        0
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section data-scroll-section ref={aboutRef}>
      <Title1 ref={title1Ref}>Discover</Title1>
      <Container>
        <Title2 ref={title2Ref}>Our Brand</Title2>
      </Container>
    </Section>
  );
};

export default About;
