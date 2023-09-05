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
  color: #ffffff;
  background-image: url(${headerImage});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Wrapper = styled.div`
  overflow: hidden;
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
  chars.forEach((e, i) => {
    const tl = gsap.timeline();
    tl.fromTo(
      e,
      { opacity: 1, yPercent: 80 },
      { opacity: 1, yPercent: 0, duration: 0.3 }
    );
  });

  return (
    <Section data-scroll-section>
      <Container>
        <Wrapper>
          <h1 data-splitting>WELCOME TO CHARLIE DONUTS</h1>
        </Wrapper>
      </Container>
    </Section>
  );
}

export default Header;
