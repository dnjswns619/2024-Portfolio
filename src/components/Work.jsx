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

    gsap.set(".work__wrap", {"--circle-scale": () => 5 + "%"})
    const workCircle1Animation = gsap.timeline({
      scrollTrigger: {
        trigger: ".work__wrap",
        start: "0% 70%",
        end: "0% -20%",
        scrub: 0,
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
      },
      autoAlpha: 1
    })

    const workImgAnimation1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "20% 40%",
        end: "45% 100%",
        scrub: 0,
        markers: true
      },
      ease: "none"
    })
    const workHorizontalAnimation1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "45% 100%",
        end: "50% 100%",
        scrub: 0,
      },
      ease: "none"
    })
    const workImgBox = document.querySelector(".work__img-box");
    gsap.utils.toArray(".work__img-box--section1 .workImg").forEach((img) => {
      workImgAnimation1.to(img, {autoAlpha: 1})
    })
    workHorizontalAnimation1.to(".work__img-box", { x: () => (-workImgBox.offsetWidth) })

    const workImgAnimation2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "50% 100%",
        end: "75% 100%",
        scrub: 0,
        markers: true
      },
      ease: "none"
    })
    const workHorizontalAnimation2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "75% 100%",
        end: "80% 100%",
        scrub: 0,
      },
      ease: "none"
    })
    gsap.utils.toArray(".work__img-box--section2 .workImg").forEach((img) => {
      workImgAnimation2.to(img, {autoAlpha: 1})
    })
    workHorizontalAnimation2.to(".work__img-box", { x: () => (-workImgBox.offsetWidth) * 2 })

    const workImgAnimation3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "80% 100%",
        end: "100% 100%",
        scrub: 0,
        markers: true
      },
      ease: "none"
    })
    gsap.utils.toArray(".work__img-box--section3 .workImg").forEach((img) => {
      workImgAnimation3.to(img, {autoAlpha: 1})
    })
  })

  const workImgLength = 15;
  
  return (
    <section id="work" className="work">
      <div className="work__wrap">
        <div className="work__img-box">
          <h2 className="work__title">WORK PORTFOLIO</h2>
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