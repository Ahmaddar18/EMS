import React from "react";
//import "./main.css";
import mail from "../../assets/mail.png";
//import * as c from "./constants";
import { message } from "antd";
import { Carousel } from "antd";
import "./style.css"
class Gallery extends React.Component {
  render() {
    return (
        <Carousel autoplay className="container">
          <div className="box">
          <img className="box" src="https://media.visualstories.com/images/15/398322/640-398322-509352020.jpg" alt="Earthquack precautions" />
          </div>
          <div className="box">
          <img className="box" src="https://www.observerbd.com/2019/02/10/observerbd.com_1549822775.jpg" alt="Earthquack precautions" />
          </div>
          <div className="box">
          <img className="box" src="https://3.bp.blogspot.com/-8TVaA-cvDQE/VVHdvfHhEzI/AAAAAAAAcHE/MHnt0wVClZo/s640/CEyyC_pW0AEoeto.jpg" alt="Earthquack precautions" />
          </div>
          <div className="box">
          <img className="box" src="https://www.calacademy.org/sites/default/files/styles/manual_crop_standard_960x540/public/uploads/images/iconsexplained-copyrite2012.jpg?itok=AAtaP6KB&c=9121a0bf19c27ff304e1e2b63d191d21" alt="Earthquack precautions" />
          </div>
        </Carousel>
    );
  }
}
export default Gallery;
