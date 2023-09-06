import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import imgPurple from "../assets/purple.png";
import imgGreen from "../assets/green.png";
import imgOrange from "../assets/orange.png";

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
  @media (max-width: 800px) {
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
  @media (max-width: 800px) {
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
  padding: 0 60px;
  h1 {
    margin: 20px 0;
  }
  @media (max-width: 800px) {
    height: 150vh;
    padding: 0;
  }
`;

const Mobile = styled.div`
  width: 100%;
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const W1 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: orange;
  background-image: url(${imgOrange});
  background-size: cover;
  background-position: center -5%;
  border-bottom-left-radius: 20px 20px;
  border-bottom-right-radius: 20px 20px;
  z-index: 3;
  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 0px;
    background-position: center center;
  }
`;

const W2 = styled(W1)`
  background-color: green;
  background-image: url(${imgGreen});
  background-size: cover;
  z-index: 2;
`;

const W3 = styled(W1)`
  background-color: purple;
  background-image: url(${imgPurple});
  background-size: cover;
  border-radius: 0;
  z-index: 1;
`;

const TitleWrapper = styled.div`
  overflow: hidden;
`;

const Words = styled.div`
  padding: 100px 50px;
  h1 {
    padding-bottom: 30px;
  }
`;

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const wRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //content animation
      gsap.set("#www", { yPercent: 0 });
      gsap.set(leftRef.current, { backgroundColor: "#ffede0" });
      const animeR = gsap.to("#www", {
        yPercent: -100,
        stagger: 0.5,
        ease: "power3.in",
      });
      const animeL = gsap.timeline();
      animeL
        .to(leftRef.current, {
          backgroundColor: "#ffd4d3",
        })
        .to(leftRef.current, {
          backgroundColor: "#dfeed7",
        })
        .to(leftRef.current, {
          backgroundColor: "#e7e0eb",
        });
      ScrollTrigger.create({
        trigger: sectionRef.current,
        animation: animeR,
        strart: "top top",
        end: "bottom bottom",
        pin: rightRef.current,
        scrub: true,
      });
      ScrollTrigger.create({
        trigger: sectionRef.current,
        animation: animeL,
        strart: "top 30%",
        end: "bottom bottom",
        scrub: true,
      });
      //bgcolor animation
      const mobileContent = gsap.utils.toArray(".mContent");
      const bgColor = ["#ffe4d3", "#dfeed7", "#e7e0eb"];
      mobileContent.forEach((e, i) => {
        gsap.set(e, { backgroundColor: bgColor[i] });
      });
      //title animation
      const titles = gsap.utils.toArray("h1");
      titles.forEach((e, i) => {
        const titleTl = gsap.timeline({
          scrollTrigger: {
            trigger: e,
            start: "top 70%",
            // markers: true,
            toggleActions: "restart none none none",
          },
        });
        titleTl.from(e, {
          yPercent: 110,
          opacity: 1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="container" ref={sectionRef}>
      <Left ref={leftRef}>
        <Content className="dContent">
          <TitleWrapper>
            <h1>MANDARIN ORANGE</h1>
          </TitleWrapper>
          🍊 A Burst of Citrus Sunshine in Every Bite! 🍊 Prepare your taste
          buds for an extraordinary adventure with our Mandarin Orange Doughnut.
          Crafted with the perfect blend of sweet and tangy, this doughnut is a
          refreshing twist on a classic favorite.
        </Content>
        <Content className="dContent">
          <TitleWrapper>
            <h1>Our Story</h1>
          </TitleWrapper>
          Dough was founded in 2010 in Bedstuy, Brooklyn. What started as a
          neighborhood spot for morning treats quickly boomed. Dough Doughnuts
          became everyone's favorite doughnut both in Brooklyn and
          internationally. Dough expanded into Manhattan, placing roots in the
          Flatiron district in 2015.
        </Content>
        <Content className="dContent">
          <TitleWrapper>
            <h1>HANDMADE</h1>
          </TitleWrapper>
          Dough's doughnuts are handmade with love and care. Our staff
          passionately mastered the craft of doughnut making through a hands-on
          approach that focuses on freshness and fullness of flavor. Dough's
          doughnuts are made in small batches throughout the day to ensure that
          they are always fresh for you to enjoy.
        </Content>
      </Left>
      <Right ref={rightRef}>
        <Wrapper ref={wRef}>
          <W1 id="www"></W1>
          <W2 id="www"></W2>
          <W3></W3>
        </Wrapper>
      </Right>
      <Mobile>
        <Content className="mContent">
          <W1></W1>
          <Words>
            <TitleWrapper>
              <h1>MANDARIN ORANGE</h1>
            </TitleWrapper>
            🍊 A Burst of Citrus Sunshine in Every Bite! 🍊 Prepare your taste
            buds for an extraordinary adventure with our Mandarin Orange
            Doughnut. Crafted with the perfect blend of sweet and tangy, this
            doughnut is a refreshing twist on a classic favorite.
          </Words>
        </Content>
        <Content className="mContent">
          <W2></W2>
          <Words>
            <TitleWrapper>
              <h1>Our Story</h1>
            </TitleWrapper>
            Dough was founded in 2010 in Bedstuy, Brooklyn. What started as a
            neighborhood spot for morning treats quickly boomed. Dough Doughnuts
            became everyone's favorite doughnut both in Brooklyn and
            internationally. Dough expanded into Manhattan, placing roots in the
            Flatiron district in 2015.
          </Words>
        </Content>
        <Content className="mContent">
          <W3></W3>
          <Words>
            <TitleWrapper>
              <h1>HANDMADE</h1>
            </TitleWrapper>
            Dough's doughnuts are handmade with love and care. Our staff
            passionately mastered the craft of doughnut making through a
            hands-on approach that focuses on freshness and fullness of flavor.
            Dough's doughnuts are made in small batches throughout the day to
            ensure that they are always fresh for you to enjoy.
          </Words>
        </Content>
      </Mobile>
    </Section>
  );
};

export default Works;
