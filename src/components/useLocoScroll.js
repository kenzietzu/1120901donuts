import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useLocoScroll = (start) => {
  useEffect(() => {
    if (!start) return;
    let locoScroll = null;

    const scrollEl = document.querySelector(".App");

    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1.5,
    });

    locoScroll.on("scroll", () => {
      ScrollTrigger.update();
    });

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      // scrollLeft(value) {
      //   if (locoScroll) {
      //     return arguments.length
      //       ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
      //       : locoScroll.scroll.instance.scroll.x;
      //   }
      //   return null;
      // },
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

    // return () => {
    //   if (locoScroll) {
    //     ScrollTrigger.removeEventListener("refresh", lsUpdate);
    //     locoScroll.destroy();
    //     locoScroll = null;
    //     console.log("Kill", locoScroll);
    //   }
    // };
  }, [start]);
};

export default useLocoScroll;
