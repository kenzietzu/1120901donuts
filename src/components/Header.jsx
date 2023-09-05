import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import styled from "styled-components";
import headerImage from "../assets/donuts1.webp";
import gsap from "gsap";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Container = styled.div`
  margin: 0px 30px 50px;
  height: 100vh;
  width: 100vw;
  border-bottom-left-radius: 40px 40px;
  border-bottom-right-radius: 40px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  background-image: url(${headerImage});
  background-size: cover;
  h1 {
    font-size: 60px;
  }
`;

function Header() {
  Splitting({
    target: "[data-splitting]",
    by: "chars",
    key: null,
  });

  const chars = gsap.utils.toArray(".word");
  const tl = gsap.timeline();
  chars.forEach((e, i) => {
    tl.fromTo(
      e,
      { opacity: 0, yPercent: 50 },
      { opacity: 1, yPercent: 0, duration: 0.3 }
    );
  });

  return (
    <Section data-scroll-section>
      <Container>
        <h1 data-splitting>WELCOME TO CHARLIE DONUTS</h1>
      </Container>
    </Section>
  );
}

export default Header;
