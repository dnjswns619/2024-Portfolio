import React, { useEffect } from "react";
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

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("body", {
      scrollTrigger: {
        trigger: "#about",
        start: "0% 0%",
        end: "100% 100%",
        onLeaveBack: () => {
          gsap.to("body", {backgroundColor: "#000"})
          gsap.to(".about__title", {color: "#fff"})
        },
        onEnter: () => {
          gsap.to("body", {backgroundColor: "#eeeae4"})
          gsap.to(".about__title", {color: "#222"})
        }
      }
    })

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
      }
    })
    aboutDesc1Animation
    .to(".about__desc .item1__img-box--1", {xPercent: 50}, "a")
    .to(".about__desc .item1__img-box--2", {xPercent: -80}, "a")
    .to(".about__desc .item1__img-box--3", {xPercent: -50}, "a")
    .to(".about__desc .item1__img-box--4", {xPercent: -30}, "a")

    const aboutDesc2Animation = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "50% 100%",
        end: "100% 100%",
        scrub: 0,
        markers: true
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
              <p className="item__main-text">
                <span className="item__main-text--point">성실</span>하고 <span className="item__main-text--point">책임감</span>이 있는것이 저의 가장 큰 장점입니다.<br />
                주어진 일에 성실하게 최선을 다하고 맡은 일들을 끝까지 해냅니다.<br />
                이러한 능력을 바탕으로 <span className="item__main-text--point">입사 8개월만에 선임 퍼블리셔</span> 자리를 맡아<br />
                프로젝트를 진행한 경험이 있습니다.<br />
              </p>
              <p className="item__sub-text">
                편도 1시간 30분이 넘는 대학교, 기공소,<br />
                편도 2시간이 넘는 현재의 출퇴근 시간에도<br />
                한번의 지각도 결근도 한 적이 없습니다.
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
              <p className="item__main-text">
                <span className="item__main-text--point">웹 표준</span>과 <span className="item__main-text--point">웹 접근성</span>을 준수하는 웹사이트를 만듭니다.<br />
                html, css를 조합하여 컨텐츠를 능숙하게 구현할 수 있으며,<br />
                다른 사람이 짜놓은 js를 이해하고 응용, 수정할 수 있습니다.
              </p>
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