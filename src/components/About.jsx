import styled from "styled-components";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { Model } from "./Scene";

const Section = styled.section`
  height: 120vh;
  display: flex;
  background-color: #ffe4d3;
  flex-direction: column;
  justify-content: center;
`;

const Title1 = styled.h1`
  font-size: 80px;
  position: absolute;
  z-index: 10;
  color: #ff4f55;
  padding-top: 400px;
  @media (max-width: 500px) {
    font-size: 50px;
    padding-top: 450px;
  }
`;

const Title2 = styled(Title1)`
  right: 0;
  padding-top: 600px;
  @media (max-width: 500px) {
  }
`;

const Filler = styled.div`
  height: 20vh;
`;

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);

  useLayoutEffect(() => {
    const width = document.documentElement.clientWidth;
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 40%",
          scrub: true,
          // markers: true,
        },
      });
      tl.to(title1Ref.current, { x: `${width / 2}` }).to(
        title2Ref.current,
        { x: `-${width / 2}` },
        0
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={aboutRef}>
      <Filler></Filler>
      <Title1 ref={title1Ref}>Discover</Title1>

      <Title2 ref={title2Ref}>Our Donuts</Title2>

      <Canvas>
        <ambientLight />
        <directionalLight />
        <mesh>
          <Float>
            <Model aboutRef={aboutRef} />
          </Float>
          <Environment preset="sunset" />
          {/* <OrbitControls /> */}
        </mesh>
      </Canvas>
    </Section>
  );
};

export default About;
