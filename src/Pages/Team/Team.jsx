import React from "react";
import style from "./Team.module.sass";

function Team() {
  return (
    <div className={style.team}>
      <div className={style.container}>
        <div>
          <h4>Team</h4>
          <h1>Meet Our Team</h1>
        </div>
        <div className={style.peeps}>
          <div>
            <img
              src={require("../../assets/images/team_peeps/Frame.png")}
              alt="team"
            />
            <p>CEO</p>
            <h3>Jennifer</h3>
          </div>

          <div>
            <img
              src={require("../../assets/images/team_peeps/Frame (1).png")}
              alt="team"
            />
            <p>Developer</p>
            <h3>Matthew</h3>
          </div>
          <div>
            <img
              src={require("../../assets/images/team_peeps/Frame (2).png")}
              alt="team"
            />
            <p>Developer</p>
            <h3>John</h3>
          </div>
          <div>
            <img
              src={require("../../assets/images/team_peeps/Frame (3).png")}
              alt="team"
            />
            <p>Designer</p>
            <h3>Justin</h3>
          </div>
          <div>
            <img
              src={require("../../assets/images/team_peeps/Frame (4).png")}
              alt="team"
            />
            <p>Designer</p>
            <h3>Jessica</h3>
          </div>
          <div>
            <img
              src={require("../../assets/images/team_peeps/Frame (5).png")}
              alt="team"
            />
            <p>Designer</p>
            <h3>Katty</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
