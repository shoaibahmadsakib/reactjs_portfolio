import React from "react";
import { AboutMyself } from "../Data/AllData";
import MyPhoto from "../Assets/my_photo.jpg";
const MoreAbout = () => {
  return (
    <div className="about_me" id="about">
      <h1>About Myself</h1>
      <div className="About_twosection">
        <div className="about_image">
          <img src={MyPhoto} alt="" />
        </div>
        <div className="about_myself">
          {AboutMyself.map((data) => (
            <div>
              <p>{data.myDetails}</p>
              <ul>
                <li>{data.listItem1}</li>
                <li>{data.listItem2}</li>
                <li>{data.listItem3}</li>
                <li>{data.listItem4}</li>
                <li>{data.listItem5}</li>
              </ul>
              <ol>
                <li>
                  <b>Framework</b>: {data.frontend}
                </li>
                <li>
                  <b>Database:</b> {data.database}
                </li>
                <li>
                  <b>Hosting:</b> {data.hosting}
                </li>
                <li>
                  <b>Framework/Liberary:</b> {data.framework}
                </li>
                <li>
                  <b>Education:</b> {data.education}
                </li>
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreAbout;
