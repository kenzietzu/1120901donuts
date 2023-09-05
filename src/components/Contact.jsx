import styled from "styled-components";

const Section = styled.section`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fea789;
  flex-direction: column;
  h2 {
    margin-top: 20px;
    text-align: center;
  }
`;

const Contact = () => {
  return (
    <Section data-scroll-section>
      <h1>Contact Us</h1>
      <h2>
        WE love hearing from you! <br />
        reach out to us at info@charliesdonuts.com
        <br />
        or call us at 02-2209-2257
      </h2>
    </Section>
  );
};

export default Contact;
