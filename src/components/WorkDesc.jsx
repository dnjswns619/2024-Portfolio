import React from "react";
import { workContent } from "../constants";
import ProjectDesc from "./ProjectDesc";
import codeImg1 from "../assets/images/code1.png"

const WorkDesc = () => {
  return (
    <section id="workDesc" className="workDesc">
      <div className="workDesc__wrap">
        {
          workContent.map((item) => {
            return (
              <div className="workDesc__item">
                <div className="workDesc__item--img">
                  <img src={require('../assets/images/' + item.imgSrc1 + '.png')} alt="" />
                  <img src={require('../assets/images/' + item.imgSrc2 + '.png')} alt="" />
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