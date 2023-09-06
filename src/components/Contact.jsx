import gsap from "gsap";
import { useRef } from "react";
import { useLayoutEffect } from "react";
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
    line-height: 12px;
    @media (max-width: 500px) {
      line-height: 32px;
    }
  }
  h1 {
    color: #fff;
  }
`;

const Contact = () => {
  const contactRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 60%",
          toggleActions: "restart none none none",
        },
      });
      tl.to(".contactTitle", {
        scaleY: 1.2,
        scaleX: 0.8,
        repeat: -1,
        yoyo: true,
      });
      const lines = gsap.utils.toArray("h2");
      lines.forEach((e, i) => {
        tl.from(e, { opacity: 0, yPercent: 70, duration: 0.3 });
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={contactRef}>
      <h1 className="contactTitle">Contact Us</h1>
      <h2>We love hearing from you!</h2>
      <h2>Reach out to us at info@charliesdonuts.com</h2>
      <h2>or call us at 02-2209-2257</h2>
    </Section>
  );
};

export default Contact;
