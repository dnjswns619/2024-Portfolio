import React, { useEffect } from "react";
import { workContent } from "../constants";
import ProjectDesc from "./ProjectDesc";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const WorkDesc = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const workItemAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#workDesc",
        start: "0% 80%",
        end: "100% 100%",
        scrub: 0
      }
    })
    workItemAnimation
    .fromTo(".workDesc__item1 .codeImg__wrap--1", {rotate: 10}, {rotate: -10, duration: 0.3}, "a")
    .fromTo(".workDesc__item1 .codeImg__wrap--2", {rotate: 10}, {rotate: 1, duration: 0.3}, "a")
    .fromTo(".workDesc__item2 .codeImg__wrap--1", {rotate: 10}, {rotate: -10, duration: 0.3}, "b")
    .fromTo(".workDesc__item2 .codeImg__wrap--2", {rotate: 10}, {rotate: 1, duration: 0.3}, "b")
    .fromTo(".workDesc__item3 .codeImg__wrap--1", {rotate: 10}, {rotate: -10, duration: 0.3}, "c")
    .fromTo(".workDesc__item3 .codeImg__wrap--2", {rotate: 10}, {rotate: 1, duration: 0.3}, "c")
  }, []);

  return (
    <section id="workDesc" className="workDesc">
      <div className="workDesc__wrap">
        {
          workContent.map((item, idx) => {
            return (
              <div className={`workDesc__item workDesc__item${idx + 1}`}>
                <div className="workDesc__item--img">
                  <div className="codeImg__wrap codeImg__wrap--1">
                    <img className="codeImg codeImg1" src={require('../assets/images/' + item.imgSrc1 + '.png')} alt="" />
                  </div>
                  <div className="codeImg__wrap codeImg__wrap--2">
                    <img className="codeImg codeImg2" src={require('../assets/images/' + item.imgSrc2 + '.png')} alt="" />
                  </div>
                </div>
                <ProjectDesc data={item} />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default WorkDesc;