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
    const ballWidth = document.querySelector(".intro__ball").offsetWidth;
    const titWidth = document.querySelector(".intro__tit--change").offsetWidth
    introAnimation
    .to(".intro__ball", { y: () => windowHeight + 30 })
    .to(".intro__ball", { x: () => -((titWidth / 2) + (ballWidth / 2)), rotate: -360, borderRadius: 20 }, "a")
    .to(".intro__ball", {y: () => windowHeight * 2 - 30}, "a+=0.1")

    return () => {
      introAnimation.kill();
    }
  }, [])
  return (
    <section id="intro" className="intro">
      <div className="intro__inner">
        <div className="intro__tit">
          <h2 className="intro__tit--text">
            <span>JUN'S</span>
          </h2>
          <h2 className="intro__tit--text intro__tit--change">
            PORTFOLI
            <span className="intro__ball"></span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Intro;