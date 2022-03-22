import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-head">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <button>Request Early Access</button>
      </div>
      <div className="gpt3__footer-content">
        <div className="gpt3__footer-content__brand">
          <img src={logo} alt="GPT 3" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <FooterList
          title="Links"
          items={[
            { link_name: "Everons", url: "http://localhost:5000" },
            { link_name: "Social media", url: "http://localhost:5000" },
            { link_name: "Counters", url: "http://localhost:5000" },
            { link_name: "Contact", url: "http://localhost:5000" },
          ]}
        />
        <FooterList
          title="Company"
          items={[
            { link_name: "Terms & Conditions", url: "http://localhost:5000" },
            { link_name: "Privacy Policy", url: "http://localhost:5000" },
            { link_name: "Contact", url: "http://localhost:5000" },
          ]}
        />
        <FooterList
          title="Links"
          items={[
            { link_name: "Crechterwoord K12 182 DK Alknjkcb", url: "http://localhost:5000" },
            { link_name: "085-132567", url: "http://localhost:5000" },
            { link_name: "info@payme.net", url: "http://localhost:5000" },
          ]}
        />
      </div>
      <div className="gpt3__footer-foot">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
