import React from "react";
import "./main.css";
import mail from "../../assets/mail.png";
import * as c from "./constants";
import { message, Button } from "antd";
const success = () => {
  if (document.getElementById("name").value === "")
    message.error(c.errName);
  else if (document.getElementById("email").value === "")
    message.error(c.EMAIL);
  else if (document.getElementById("msg").value === "")
    message.error(c.errMSG);
  else message.success(c.errSUCCESS);
};
class Contact extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <div class="container-contact100">
          <div class="wrap-contact100">
            <span class="contact100-form-symbol">
              <img src={mail} alt="SYMBOL-MAIL" />
            </span>

            <form class="contact100-form validate-form flex-sb flex-w">
    <span class="contact100-form-title">{c.TITLE}</span>

              <div
                class="wrap-input100 rs1 validate-input"
                data-validate="Name is required"
              >
                <input
                  id="name"
                  class="input100"
                  type="text"
                  name="name"
                  placeholder={c.NAME}
                />
                <span class="focus-input100"></span>
              </div>

              <div
                class="wrap-input100 rs1 validate-input"
                data-validate="Email is required: e@a.z"
              >
                <input
                  id="email"
                  class="input100"
                  type="text"
                  name="email"
                  placeholder={c.EMAIL}
                />
                <span class="focus-input100"></span>
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Message is required"
              >
                <textarea
                  id="msg"
                  class="input100"
                  name="message"
                  placeholder={c.MSG}
                ></textarea>
                <span class="focus-input100"></span>
              </div>

              <div class="container-contact100-form-btn">
                <Button
                  style={{ width: "150px", height: "60px" }}
                  type="primary"
                  danger
                  size={"large"}
                  onClick={success}
                >
                  {c.BUTTON}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
