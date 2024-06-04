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
    introAnimation
    .to(".intro__tit", {"--circle": () => 0 + "%"}, "a")
    .to(".intro__desc", {"--scale": 1}, "a")

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
        <div className="intro__desc">
          <p>qweqwe</p>
          <div className="intro__desc--circle"></div>
          <p>qweqwe</p>
        </div>
      </div>
    </section>
  )
}

export default Intro;