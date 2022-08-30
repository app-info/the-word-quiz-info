/* eslint-disable @typescript-eslint/no-var-requires */
import React, { FC } from "react";
import { infoTextGR, infoTextEN } from "../constatnts";
import "./../styles/sass/pages/info/info.css";

const appleGR = require("../assets/images/AppStoreGR.png");
const appleEN = require("../assets/images/AppStoreEN.png");
const androidEN = require("../assets/images/google-play-badgeEN.png");
const androidGR = require("../assets/images/google-play-badgeGR.png");

interface Props {
  language: string;
}
const Info: FC<Props> = ({ language }) => {
  let apple = appleGR;
  let android = androidGR;
  if (language === "EN") {
    apple = appleEN;
    android = androidEN;
  }

  return (
    <article className="info" id="info">
      <article className="info-text">
        <p>{language === "GR" ? infoTextGR : infoTextEN}</p>

        <section className="footer-links">
          <div>
            <a
              href="https://apps.apple.com/gr/app/in-this-you-conquer/id1602477321"
              target="_blank"
              rel="noreferrer"
            >
              <img src={apple} alt="App store badge" />
            </a>
          </div>

          <div>
            <a
              id="link"
              href="https://play.google.com/store/apps/details?id=com.entoutonika"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={android}
                alt="Google play badge"
                width={140}
                height={60}
              />
            </a>
          </div>
        </section>
      </article>
    </article>
  );
};

export default Info;
