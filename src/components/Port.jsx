import React, { useEffect } from "react";
import { portContent } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Port = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const portItemAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#port",
        start: "45% 100%",
        end: "100% 100%",
        scrub: 0,
        markers: true
      }
    })

    const portCards = document.querySelectorAll(".port__item--img");
    const portItem = document.querySelectorAll(".port__item");
    portCards.forEach((card, idx) => {
      card.addEventListener("mouseover", (e) => {
        portItem[idx].classList.add("on");
      })
      card.addEventListener("mouseout", () => {
        portItem[idx].classList.remove("on");
      })
    })
    
    gsap.utils.toArray(".port__item").forEach((item) => {
      portItemAnimation.to(item, {gap: () => 15 + "vw", yPercent: -10})
    })
  })

  return (
    <section id="port" className="port">
      <div className="port__wrap">
        <h2 className="port__title">Portfolio</h2>
        {
          portContent.map((port, idx) => {
            return(
              idx % 2 === 0 ? 
              <div className="port__item">
                <div className="port__item--img imgBox imgBox__left">
                  <div className="imgBox__item imgBox__front">
                    {
                      port.cardText ? <h2 dangerouslySetInnerHTML={{__html: port.cardText}}></h2> : <h2>{port.title}</h2>
                    }
                    
                  </div>
                  <div className="imgBox__item imgBox__behind">
                    <img src={require('../assets/images/' + port.imgSrc + '.jpg')} alt="" />
                  </div>
                </div>
                <div className="port__item--desc item">
                  <div className="item__title">{port.title}</div>
                  <div className="item__skill">
                    <div className="item__skill--tit">Language :</div>
                    <div className="item__skill--text">{port.skil.join(", ")}</div>
                  </div>
                  <div className="item__desc">
                    <div className="item__desc--tit">Description :</div>
                    <p className="item__desc--text" dangerouslySetInnerHTML={{__html: port.desc}}></p>
                  </div>
                  <div className="item__git-link">
                    <div className="item__git-link--tit">GitHub: </div>
                    <a href={port.gitLink} className="item__gitLink">{port.gitLink}</a>
                  </div>
                  
                </div>
              </div> :
              <div className="port__item">
                <div className="port__item--desc item">
                  <div className="item__title">{port.title}</div>
                  <div className="item__skill">
                    <div className="item__skill--tit">Language :</div>
                    <div className="item__skill--text">{port.skil.join(", ")}</div>
                  </div>
                  <div className="item__desc">
                    <div className="item__desc--tit">Description :</div>
                    <p className="item__desc--text" dangerouslySetInnerHTML={{__html: port.desc}}></p>
                  </div>
                  <div className="item__git-link">
                    <div className="item__git-link--tit">GitHub: </div>
                    <a href={port.gitLink} className="item__gitLink">{port.gitLink}</a>
                  </div>
                </div>
                <div className="port__item--img imgBox imgBox__right">
                  <div className="imgBox__item imgBox__front">
                    {
                      port.cardText ? <h2 dangerouslySetInnerHTML={{__html: port.cardText}}></h2> : <h2>{port.title}</h2>
                    }
                  </div>
                  <div className="imgBox__item imgBox__behind">
                    <img src={require('../assets/images/' + port.imgSrc + '.jpg')} alt="" />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Port;