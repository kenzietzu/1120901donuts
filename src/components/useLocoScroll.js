import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useLocoScroll = (start) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector(".App");

    let locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1.5,
      class: "hello",
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      //   scrollLeft(value) {
      //     if (locoScroll) {
      //       return arguments.length
      //         ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
      //         : locoScroll.scroll.instance.scroll.x;
      //     }
      //     return null;
      //   },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "",
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.defaults({ scroller: scrollEl });
    ScrollTrigger.refresh();
  }, [start]);
};

export default useLocoScroll;
