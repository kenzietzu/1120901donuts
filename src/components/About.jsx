import styled from "styled-components";
import gsap from "gsap";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    display: block;
    font-size: 30px;
    background-color: #e2e2e2;
    color: #151515;
    width: 100vw;
    text-align: center;
  }
`;

const About = () => {
  return (
    <Section data-scroll-section>
      <h1>About Me</h1>
      <h2>
        <span
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed={gsap.utils.random(-10, 10, 2)}
        >
          I'm Charlie.
        </span>
      </h2>
      <h2 data-scroll data-scroll-speed="-4">
        <span
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed={gsap.utils.random(-10, 10, 2)}
        >
          Taiwanese.
        </span>
      </h2>
      <h2>
        <span
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed={gsap.utils.random(-10, 10, 2)}
        >
          Web Developer.
        </span>
      </h2>
      <h2>
        <span
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed={gsap.utils.random(-10, 10, 2)}
        >
          Minimalist.
        </span>
      </h2>
      <h2 data-scroll data-scroll-speed="6">
        <span
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed={gsap.utils.random(-10, 10, 2)}
        >
          Solo Traveler.
        </span>
      </h2>
      <h2>
        <span
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed={gsap.utils.random(-10, 10, 2)}
        >
          Apple User.
        </span>
      </h2>
      <h2>
        <span
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed={gsap.utils.random(-10, 10, 2)}
        >
          Full Sugar Bubble Tea Drinker.
        </span>
      </h2>
    </Section>
  );
};

export default About;
