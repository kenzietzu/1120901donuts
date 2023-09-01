import Contact from "./components/Contact";
import Header from "./components/Header";
import Works from "./components/Works";
import GlobalStyles from "./GlobalStyles";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useLocoScroll from "./components/useLocoScroll";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useLocoScroll(true);

  return (
    <>
      <GlobalStyles />
      <main className="App" data-scroll-container>
        <Header />
        <Works />
        <Contact />
      </main>
    </>
  );
}

export default App;
