import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  background-color: #ffede0;
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 700px) {
    margin: 40px 40px;
    h1 {
      margin: 20px 0;
    }
  }
`;

const Mobile = styled.div`
  width: 100%;
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  height: 20rem;
  width: 20rem;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
`;

const W1 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffe4d3;
  @media (max-width: 700px) {
    width: 20rem;
    height: 20rem;
    position: relative;
    border-radius: 20px;
  }
`;

const W2 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #dfeed7;
  @media (max-width: 700px) {
    width: 20rem;
    height: 20rem;
    position: relative;
    border-radius: 20px;
  }
`;

const W3 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #e7e0eb;
  @media (max-width: 700px) {
    width: 20rem;
    height: 20rem;
    position: relative;
    border-radius: 20px;
  }
`;

const Works = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const wRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set("#www", { yPercent: 0 });
      const anime = gsap.from("#www", {
        yPercent: 100,
        stagger: 1,
      });
      ScrollTrigger.create({
        trigger: sectionRef.current,
        animation: anime,
        strart: "top top",
        end: "bottom bottom",
        pin: rightRef.current,
        scrub: true,
        markers: true,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section data-scroll-section id="container" ref={sectionRef}>
      <Left>
        <Content>
          <h1>ORANGE</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos modi
          facilis reprehenderit voluptatum et nesciunt doloribus nulla autem
          perferendis, voluptatem explicabo assumenda! Aperiam architecto velit,
          dolore dolorem totam vel? Fuga!
        </Content>
        <Content>
          <h1>GREEN</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos modi
          facilis reprehenderit voluptatum et nesciunt doloribus nulla autem
          perferendis, voluptatem explicabo assumenda! Aperiam architecto velit,
          dolore dolorem totam vel? Fuga!
        </Content>
        <Content>
          <h1>PURPLE</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos modi
          facilis reprehenderit voluptatum et nesciunt doloribus nulla autem
          perferendis, voluptatem explicabo assumenda! Aperiam architecto velit,
          dolore dolorem totam vel? Fuga!
        </Content>
      </Left>
      <Right ref={rightRef}>
        <Wrapper ref={wRef}>
          <W1></W1>
          <W2 id="www"></W2>
          <W3 id="www"></W3>
        </Wrapper>
      </Right>
      <Mobile>
        <Content>
          <W1></W1>
          <h1>ORANGE</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos modi
          facilis reprehenderit voluptatum et nesciunt doloribus nulla autem
          perferendis, voluptatem explicabo assumenda! Aperiam architecto velit,
          dolore dolorem totam vel? Fuga!
        </Content>
        <Content>
          <W2></W2>
          <h1>GREEN</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos modi
          facilis reprehenderit voluptatum et nesciunt doloribus nulla autem
          perferendis, voluptatem explicabo assumenda! Aperiam architecto velit,
          dolore dolorem totam vel? Fuga!
        </Content>
        <Content>
          <W3></W3>
          <h1>PURPLE</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos modi
          facilis reprehenderit voluptatum et nesciunt doloribus nulla autem
          perferendis, voluptatem explicabo assumenda! Aperiam architecto velit,
          dolore dolorem totam vel? Fuga!
        </Content>
      </Mobile>
    </Section>
  );
};

export default Works;
