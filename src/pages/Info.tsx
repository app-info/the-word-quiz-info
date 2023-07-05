/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import { infoTextGR } from "../constatnts";
import { infoTextEN } from "../constatnts";
import "./../styles/sass/pages/info/info.css";

const appleGR = require("../assets/images/AppStoreGR.png");
const androidGR = require("../assets/images/google-play-badgeGR.png");

const Info = ({ userLanguage }: { userLanguage: string }) => {
  return (
    <article className="info" id="info">
      <article className="info-text">
        <p>{userLanguage === "el-GR" ? infoTextGR : infoTextEN}</p>
        <section className="footer-links">
          <div>
            <a
              href="https://apps.apple.com/us/app/%CF%84%CE%BF%CF%80%CE%B9%CE%BA%CE%BF%CE%AF-%CE%AC%CE%B3%CE%B9%CE%BF%CE%B9/id1645407075"
              target="_blank"
              rel="noreferrer"
            >
              <img src={appleGR} alt="App store badge" />
            </a>
          </div>

          <div>
            <a
              id="link"
              href="https://play.google.com/store/apps/details?id=com.hagio_geo"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={androidGR}
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
