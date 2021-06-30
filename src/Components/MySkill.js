import React from "react";
import "../Css/MySkill.css";
import Skill1 from "../Assets/skill1.png";
import Button from "./Button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import javascript from "../Assets/javascript.png";
import reactjs from "../Assets/reactjs.png";

const MySkill = () => {
  const percentageHtml = 66;
  const percentageCss = 70;
  const percentageJs = 76;
  const percentageReact = 50;
  return (
    <div className="my_skill" id="skill">
      <h1>My Skill in All Language</h1>
      <div className="all_skill">
        <div className="skill_card">
          <div className="card_body">
            <div className="skill_name" style={{ width: 100, height: 200 }}>
              <CircularProgressbar
                value={percentageHtml}
                text={`${percentageHtml}%`}
                styles={buildStyles({
                  rotation: 0.25,

                  textSize: "26px",

                  pathTransitionDuration: 0.5,

                  pathColor: `rgba(62, 152, 199, ${percentageHtml / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "black",
                })}
              />
            </div>
            <div>
              <img src={html} alt="" height="80px" width="100px" />
              <h2>html</h2>
            </div>
          </div>
        </div>
        <div className="skill_card">
          <div className="card_body">
            <div style={{ width: 100, height: 200 }}>
              <CircularProgressbar
                value={percentageCss}
                text={`${percentageCss}%`}
                styles={buildStyles({
                  rotation: 0.25,

                  textSize: "26px",

                  pathTransitionDuration: 0.5,

                  pathColor: `rgba(62, 152, 199, ${percentageCss / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "black",
                })}
              />
            </div>
            <div>
              <img src={css} alt="" height="80px" width="100px" />
              <h2>css</h2>
            </div>
          </div>
        </div>

        <div className="skill_card">
          <div className="card_body">
            <div style={{ width: 100, height: 200 }}>
              <CircularProgressbar
                value={percentageJs}
                text={`${percentageJs}%`}
                styles={buildStyles({
                  rotation: 0.25,

                  textSize: "26px",

                  pathTransitionDuration: 0.5,

                  pathColor: `rgba(62, 152, 199, ${percentageJs / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "black",
                })}
              />
            </div>
            <div>
              <img src={javascript} alt="" height="80px" width="100px" />
              <h2>Javascript</h2>
            </div>
          </div>
        </div>

        <div className="skill_card">
          <div className="card_body">
            <div style={{ width: 100, height: 200 }}>
              <CircularProgressbar
                value={percentageReact}
                text={`${percentageReact}%`}
                styles={buildStyles({
                  rotation: 0.25,

                  textSize: "26px",

                  pathTransitionDuration: 0.5,

                  pathColor: `rgba(62, 152, 199, ${percentageReact / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "black",
                })}
              />
            </div>
            <div>
              <img src={reactjs} alt="" height="80px" width="100px" />
              <h2>Reactjs</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
