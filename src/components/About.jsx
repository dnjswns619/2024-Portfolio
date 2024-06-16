import React, { useEffect, useState } from "react";
import aboutImg0 from "../assets/images/about00.svg";
import aboutImg1 from "../assets/images/about01.svg";
import aboutImg2 from "../assets/images/about02.svg";
import aboutImg3 from "../assets/images/about03.svg";
import aboutImg4 from "../assets/images/about_html.svg"
import aboutImg5 from "../assets/images/about_css.svg"
import aboutImg6 from "../assets/images/about_js.svg"
import aboutImg7 from "../assets/images/about_react.svg"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const easeOutQuad = (t) => t * (2 - t);

const UseCountUp = ({ targetNumber, duration }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(targetNumber, 10);
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      let progress = timestamp - startTime;
      let percent = Math.min(progress / duration, 1);
      percent = easeOutQuad(percent);

      setCurrentNumber(Math.floor(percent * end));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCurrentNumber(end);
      }
    };

    requestAnimationFrame(animate);
  }, [targetNumber, duration]);

  return (
    <span className="countNum">{currentNumber}</span>
  )
}

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const aboutDesc = document.querySelector(".about__desc")
    gsap.to(".about__wrap", {
      scrollTrigger: {
        trigger: "#about",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0
      },
      x: () => {
        return -aboutDesc.offsetWidth
      }
    })

    const aboutDesc1Animation = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "0% 0%",
        end: "33.333% 20%",
        scrub: 0,
        onEnter: () => {
          gsap.fromTo(".item1 .item__main-text", { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: -20, duration: 1 })
          gsap.fromTo(".item1 .item__sub-text", { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: 1 })
        }
      }
    })
    aboutDesc1Animation
    .to(".about__desc .item1__img-box--1", {xPercent: 60, yPercent: -10}, "a")
    .to(".about__desc .item1__img-box--2", {xPercent: -90, yPercent: 10}, "a")
    .to(".about__desc .item1__img-box--3", {xPercent: -70, yPercent: 10}, "a")
    .to(".about__desc .item1__img-box--4", {xPercent: -70, yPercent: 10}, "a")

    const aboutDesc2Animation = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "50% 100%",
        end: "100% 100%",
        scrub: 0,
        markers: true,
        onEnter: () => {
          gsap.fromTo(".item2 .item__main-text", { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: -20, duration: 1 })
          gsap.fromTo(".item2 .item__sub-text", { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: 1 })
        }
      }
    })
    aboutDesc2Animation
    .to(".about__desc .item2__img-box--1", {xPercent: 50, yPercent: -5}, "b")
    .to(".about__desc .item2__img-box--2", {xPercent: -60, yPercent: 10}, "b+=0.3")
    .to(".about__desc .item2__img-box--3", {xPercent: 40, yPercent: -15}, "b+=0.8")
    .to(".about__desc .item2__img-box--4", {xPercent: -55, yPercent: -5}, "b")
  }, [])
  return (
    <section id="about" className="about">
      <div className="about__sticky">
        <div className="about__wrap">
          <h2 className="about__title">
            About Me
          </h2>
          <div className="about__desc">
            <div className="about__desc--item item item1">
              <div className="item1__img-box item1__img-box--1">
                <img src={aboutImg0} alt="" className="item1__img-box--img" />
              </div>
              <div className="item1__img-box item1__img-box--2">
                <img src={aboutImg1} alt="" className="item1__img-box--img" />
              </div>
              <div className="item1__img-box item1__img-box--3">
                <img src={aboutImg2} alt="" className="item1__img-box--img" />
              </div>
              <div className="item1__img-box item1__img-box--4">
                <img src={aboutImg3} alt="" className="item1__img-box--img" />
              </div>
              <div className="item__main-keyword">
                <span className="item__main-num">
                  <UseCountUp targetNumber={8} duration={2000} />
                  <span className="item__main-num--sub">M</span>
                </span>
                <p className="item__main-keyword--text">
                  성실함과 책임감으로 입사 8개월만에 선임 퍼블리셔 자리를 맡아<br />프로젝트를 진행한 경험이 있습니다.
                </p>
              </div>
              <p className="item__sub-text">
                왕복 3시간 거리 통학러<br />
                왕복 4시간 성실한 출근러
              </p>
            </div>
            <div className="about__desc--item item item2">
              <div className="item2__img-box item2__img-box--1">
                <img src={aboutImg4} alt="" className="item2__img-box--img" />
              </div>
              <div className="item2__img-box item2__img-box--2">
                <img src={aboutImg7} alt="" className="item2__img-box--img" />
              </div>
              <div className="item2__img-box item2__img-box--3">
                <img src={aboutImg6} alt="" className="item2__img-box--img" />
              </div>
              <div className="item2__img-box item2__img-box--4">
                <img src={aboutImg5} alt="" className="item2__img-box--img" />
              </div>
              <div className="item__main-keyword">
                <span className="item__main-num">
                  <UseCountUp targetNumber={3} duration={2000} />
                  <span className="item__main-num--sub">Project</span>
                </span>
                <p className="item__main-keyword--text">
                  html과 css를 주로 사용하여 웹 표준과 웹 접근성을 준수하고<br />
                  개발팀에서 짜놓은 js를 이해하고 응용, 수정하여 사용해 프로젝트를 제작했습니다. 
                </p>
              </div>
              <p className="item__sub-text">
                현재는 더욱 성장하기 위해 react와<br />js를 꾸준히 공부하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;