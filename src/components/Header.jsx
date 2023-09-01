import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return (
    <Section data-scroll-section>
      <h1>WELCOME TO CHARLIE UNIVERSE P2</h1>
    </Section>
  );
}

export default Header;
