import gsap from "gsap";
import React from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import styled from "styled-components";

const Section = styled.section`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fea789;
  color: #fff;
  z-index: 200;
  h1 {
    font-size: 60px;
  }
  .percent {
    margin-left: 10px;
  }
`;

const Loader = ({ setLoaded }) => {
  const loaderRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({ onComplete: () => setLoaded(true) });
      tl.to(".num", { innerText: 100, snap: "innerText", duration: 20 });
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={loaderRef}>
      <h1 className="num">0</h1>
      <h1 className="percent">%</h1>
    </Section>
  );
};

export default Loader;
