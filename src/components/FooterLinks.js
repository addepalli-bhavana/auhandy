import React from "react";
import { footerLinks1 } from "../utils/constants";
import { footerLinks2 } from "../utils/constants";
import { footerLinks3 } from "../utils/constants";

const FooterLinks = () => {
  return (
    <footer className="footer-links">
      <div className="footer-links-center section-center">
        <div className="footer-links-one">
          <h4>contact us</h4>
          <ul>
            {footerLinks1.map((link) => {
              return (
                <li className="link" key={link.id}>
                  <span>{link.icon}</span>
                  <span> {link.label}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4>our services</h4>
          <ul>
            {footerLinks2.map((link) => {
              return (
                <li className="link" key={link.id}>
                  <a href="#">
                    <span>&gt; &nbsp;</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul>
            <ul>
              <li></li>
              {footerLinks3.map((link) => {
                return (
                  <li className="link" key={link.id}>
                    <a href="#">
                      <span>&gt; &nbsp;</span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ul>
        </div>
        <div className="footer-links-info">
          <h4>
            get <span>25%</span> off
          </h4>
          <h5>electrical services</h5>
          <span>
            redeem code: <span>handyhpy28</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;
