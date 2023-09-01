import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contact = () => {
  return (
    <Section data-scroll-section>
      <h1>Contact Me</h1>
    </Section>
  );
};

export default Contact;
