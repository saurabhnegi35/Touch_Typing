import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h3 className="title-section">Touch Typing</h3>
      </div>
      <div className="footer-info">
        <a href="https://github.com">
          <i class="fa-solid fa-circle-question"></i> Rules to Play
        </a>
        <a href="https://github.com">
          <i class="fa-solid fa-wrench"></i> Suggest Improvements
        </a>
        <a href="https://github.com">
          <i class="fa-brands fa-github"></i> Github Repository
        </a>
      </div>
      <div className="footer-info">
        <a href="https://github.com">
          Powered By <i class="fa-brands fa-react"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
