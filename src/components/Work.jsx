import React from "react";
import { workImg } from "../constants";

const renderWorkImg = (length) => {
  const imgArr = [];
  let randomWorkImg = 0;
  for (let i = 0; i <= length; i++) {
    randomWorkImg = Math.floor(workImg.length * Math.random());
    imgArr.push(
      <img src={require('../assets/images/work/' + workImg[randomWorkImg].imgSrc + '.jpg')} />
    )
  }
  return imgArr;
}

const Work = () => {
  const workImgSect1 = 5;
  const workImgSect2 = 10;
  const workImgSect3 = 15;
  const workImgSect4 = 15;
  
  return (
    <section id="work" className="work">
      <div className="work__wrap">
        <div className="work__img-box">
          {renderWorkImg(workImgSect1)}
        </div>
        <div className="work__img-box">
        {renderWorkImg(workImgSect2)}
        </div>
        <div className="work__img-box">{renderWorkImg(workImgSect3)}</div>
        <div className="work__img-box">{renderWorkImg(workImgSect4)}</div>
      </div>
    </section>
  )
}

export default Work;