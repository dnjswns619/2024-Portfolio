import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Intro = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const introAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#intro",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
        markers: true
      }
    })

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const ballWidth = document.querySelector(".intro__ball").offsetWidth;
    const ballHeight = document.querySelector(".intro__ball").offsetHeight;
    introAnimation
    .to(".intro__ball", { y: () => (windowHeight / 2) + (ballHeight / 2) })
    .to(".intro__ball", { y: () => (windowHeight / 2) })
    .to(".intro__ball", { y: () => (windowHeight / 2) + (ballHeight / 2) })
    .to(".intro__ball", { x: () => -((windowWidth / 2) - (ballWidth / 2) - 10), rotate: -360, borderRadius: 20 }, "a")
    .to(".intro__ball", {scale: 10})

    return () => {
      introAnimation.kill();
    }
  }, [])
  return (
    <section id="intro" className="intro">
      <div className="intro__inner">
        <div className="intro__tit">
          <h2 className="intro__tit--text intro__tit--default">
            <span>JUN'S</span>
            PORTFOLIO
          </h2>
        </div>
        <div className="intro__ball"></div>
      </div>
    </section>
  )
}

export default Intro;