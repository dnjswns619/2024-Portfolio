import React, { useEffect } from "react";
import { workImg } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const renderWorkImg = (length) => {
  const imgArr = [];
  let randomWorkImg = 0;
  for (let i = 0; i <= length - 1; i++) {
    randomWorkImg = Math.floor(workImg.length * Math.random());
    imgArr.push(
      <img className="workImg" src={require('../assets/images/work/' + workImg[randomWorkImg].imgSrc + '.jpg')} />
    )
  }
  return imgArr;
}

const Work = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    console.clear();
    const workImg1 = document.querySelectorAll(".work__img-box--section1 .workImg");
    const workImg2 = document.querySelectorAll(".work__img-box--section2 .workImg");
    const workImg3 = document.querySelectorAll(".work__img-box--section3 .workImg");
    const workImgAnimation1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "20% 40%",
        end: "50% 100%",
        scrub: 0,
        invalidateOnRefresh: true
      },
      ease: "none"
    })
    const workImgAnimation2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "50% 100%",
        end: "80% 100%",
        scrub: 0,
        invalidateOnRefresh: true
      },
      ease: "none"
    })
    const workImgAnimation3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "80% 100%",
        end: "100% 100%",
        scrub: 0,
        invalidateOnRefresh: true
      },
      ease: "none"
    })
    ScrollTrigger.matchMedia({
      "(min-width: 751px)": function() {
        // workProject 1
        workImgAnimation1
        .to(".work__img-box--section", { autoAlpha: 0, duration: 0.2 }, "a")
        .fromTo(".work__img-box--section1", {top: () => 0 + "%", left: () => 0 + "%", scale: 0.533, autoAlpha: 1 }, {top: () => 0 + "%", left: () => 0 + "%", scale: 1, autoAlpha: 1 }, "a")
        workImg1.forEach((img, idx) => {
          workImgAnimation1
          .fromTo(img, {left: () => 12 + "vw"}, { left: () => 50 + "vw", duration: 0.1 }, "b")
          .fromTo(workImg1[idx + 1], {autoAlpha: 0}, {autoAlpha: 1, duration: 0.1}, "b")
          .fromTo(img,{zIndex: () => -idx}, {zIndex: 1, duration: 0.1})
          .fromTo(img,{rotateY: 0}, {rotateY: -180})
        })
        workImgAnimation1
        .to(".work__img-box--section1", {top: () => 0 + "%", left: () => 0 + "%", scale: 0.533, autoAlpha: 1 })
        .to(".work__img-box--section", { autoAlpha: 1 })

        // workProject 2
        workImgAnimation2
        .to(".work__img-box--section", { autoAlpha: 0, duration: 0.4 }, "c")
        .fromTo(".work__img-box--section2", {top: () => 0 + "%", left: () => 33 + "%", scale: 0.533, autoAlpha: 1}, {top: () => 0 + "%", left: 0, scale: 1, autoAlpha: 1 }, "c")
        workImg2.forEach((img, idx) => {
          workImgAnimation2
          .fromTo(img, {left: () => 12 + "vw"}, { left: () => 50 + "vw", duration: 0.1 }, "d")
          .fromTo(workImg2[idx + 1], {autoAlpha: 0}, {autoAlpha: 1, duration: 0.1}, "d")
          .fromTo(img,{zIndex: () => -idx}, {zIndex: 1, duration: 0.1})
          .fromTo(img,{rotateY: 0}, {rotateY: -180})
        })
        workImgAnimation2
        .to(".work__img-box--section2", {top: () => 0 + "%", left: () => 33 + "%", scale: 0.533, autoAlpha: 1 })
        .to(".work__img-box--section", { autoAlpha: 1 })

        // workProject3
        workImgAnimation3
        .to(".work__img-box--section", { autoAlpha: 0, duration: 0.4 }, "e")
        .fromTo(".work__img-box--section3",{top: () => 0 + "%", left: () => 66 + "%", scale: 0.533, autoAlpha: 1}, { left: 0, scale: 1, autoAlpha: 1 }, "e")
        workImg3.forEach((img, idx) => {
          workImgAnimation3
          .fromTo(img, {left: () => 12 + "vw"}, { left: () => 50 + "vw", duration: 0.1 }, "f")
          .fromTo(workImg3[idx + 1], {autoAlpha: 0}, {autoAlpha: 1, duration: 0.1}, "f")
          .fromTo(img,{zIndex: () => -idx}, {zIndex: 1, duration: 0.1})
          .fromTo(img,{rotateY: 0}, {rotateY: -180})
        })
        workImgAnimation3
        .to(".work__img-box--section3", {top: () => 0 + "%", left: () => 66 + "%", scale: 0.533, autoAlpha: 1 })
        .to(".work__img-box--section", { autoAlpha: 1 })
      },
      "(max-width: 750px)": function() { //모바일 반응형
        // workProject 1
        workImgAnimation1
        .to(".work__img-box--section", { autoAlpha: 0, duration: 0.2 }, "a")
        .fromTo(".work__img-box--section1", {top: () => -6 + "%", left: () => 41 + "%", scale: 0.733, autoAlpha: 1 }, {top: () => 19 + "%", left: () => 41 + "%", scale: 1, autoAlpha: 1 }, "a")
        workImg1.forEach((img, idx) => {
          workImgAnimation1
          .fromTo(img, {left: () => 0 + "vw"}, { left: () => 9 + "vw", duration: 0.1 }, "b")
          .fromTo(workImg1[idx + 1], {autoAlpha: 0}, {autoAlpha: 1, duration: 0.1}, "b")
          .fromTo(img,{zIndex: () => -idx}, {zIndex: 1, duration: 0.1})
          .fromTo(img,{rotateY: 0}, {rotateY: -180})
        })
        workImgAnimation1
        .to(".work__img-box--section1", {top: () => -6 + "%", left: () => 33 + "%", scale: 0.733, autoAlpha: 1 })
        .to(".work__img-box--section", { autoAlpha: 1 })

        // workProject 2
        workImgAnimation2
        .to(".work__img-box--section", { autoAlpha: 0, duration: 0.4 }, "c")
        .fromTo(".work__img-box--section2", {top: () => 27 + "%", left: () => 41 + "%", scale: 0.733, autoAlpha: 1}, {top: () => 19 + "%", left: () => 41 + "%", scale: 1, autoAlpha: 1 }, "c")
        workImg2.forEach((img, idx) => {
          workImgAnimation2
          .fromTo(img, {left: () => 0 + "vw"}, { left: () => 9 + "vw", duration: 0.1 }, "d")
          .fromTo(workImg2[idx + 1], {autoAlpha: 0}, {autoAlpha: 1, duration: 0.1}, "d")
          .fromTo(img,{zIndex: () => -idx}, {zIndex: 1, duration: 0.1})
          .fromTo(img,{rotateY: 0}, {rotateY: -180})
        })
        workImgAnimation2
        .to(".work__img-box--section2", {top: () => 27 + "%", left: () => 33 + "%", scale: 0.733, autoAlpha: 1 })
        .to(".work__img-box--section", { autoAlpha: 1 })

        // workProject3
        workImgAnimation3
        .to(".work__img-box--section", { autoAlpha: 0, duration: 0.4 }, "e")
        .fromTo(".work__img-box--section3",{top: () => 60 + "%", left: () => 41 + "%", scale: 0.733, autoAlpha: 1}, {top: () => 19 + "%", left: () => 41 + "%", scale: 1, autoAlpha: 1 }, "e")
        workImg3.forEach((img, idx) => {
          workImgAnimation3
          .fromTo(img, {left: () => 0 + "vw"}, { left: () => 9 + "vw", duration: 0.1 }, "f")
          .fromTo(workImg3[idx + 1], {autoAlpha: 0}, {autoAlpha: 1, duration: 0.1}, "f")
          .fromTo(img,{zIndex: () => -idx}, {zIndex: 1, duration: 0.1})
          .fromTo(img,{rotateY: 0}, {rotateY: -180})
        })
        workImgAnimation3
        .to(".work__img-box--section3", {top: () => 60 + "%", left: () => 33 + "%", scale: 0.733, autoAlpha: 1 })
        .to(".work__img-box--section", { autoAlpha: 1 })
      }
    });

    gsap.set(".work__wrap", {"--circle-scale": () => 5 + "%"})
    const workCircle1Animation = gsap.timeline({
      scrollTrigger: {
        trigger: ".work__wrap",
        start: "0% 70%",
        end: "0% -20%",
        scrub: 0,
        invalidateOnRefresh: true
      },
      ease: "none"
    })
    workCircle1Animation
    .fromTo(".work__wrap", {duration: 0.7,"--circle-scale": () => 5 + "%"}, {duration: 0.7,"--circle-scale": () => 30 + "%"})
    .to(".work__wrap", {duration: 0.3,"--circle-scale": () => 80 + "%"})

    gsap.to(".work__img-box", {
      scrollTrigger: {
        trigger: "#work",
        start: "10% 0%",
        end: "20% 0%",
        scrub: 0,
        invalidateOnRefresh: true
      },
      autoAlpha: 1
    })
  })

  const workImgLength = 15;
  
  return (
    <section id="work" className="work">
      <div className="work__wrap">
        <div className="work__img-box">
          <div className="work__img-box--section work__img-box--section1">
            <h3 className="project__title">초등학교 3, 4학년 과학</h3>
            {renderWorkImg(workImgLength)}
            </div>
          <div className="work__img-box--section work__img-box--section2">
            <h3 className="project__title">AIDT 고등학교 영어</h3>
            {renderWorkImg(workImgLength)}
            </div>
          <div className="work__img-box--section work__img-box--section3">
            <h3 className="project__title">고등학교 영어 전자저작물</h3>
            {renderWorkImg(workImgLength)}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Work;