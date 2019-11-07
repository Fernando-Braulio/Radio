import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        Powered by -{" "}
        <a
          href="http://vipphone.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vipphone Software Telecom LTDA
        </a>
      </footer>
    );
  }
}

export default Footer;
