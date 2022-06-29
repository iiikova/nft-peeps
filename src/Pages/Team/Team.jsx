import React from "react";

function Team() {
  return (
    <div className="team_bg">
      <div className=" container__2">
        <div className="team">
          {/* <div> */}
          <p>Team</p>
          <h2>Meet Our Team</h2>
          {/* </div> */}

          <div className="team__peep">
            <div className="team__peep__item">
              <img
                src={require("../src/images/team_peeps/Frame.png")}
                alt="team"
              />
              <p>CEO</p>
              <h3>Jennifer</h3>
            </div>

            <div className="team__peep__item">
              <img
                src={require("../src/images/team_peeps/Frame (1).png")}
                alt="team"
              />
              <p>Developer</p>
              <h3>Matthew</h3>
            </div>
            <div className="team__peep__item">
              <img
                src={require("../src/images/team_peeps/Frame (2).png")}
                alt="team"
              />
              <p>Developer</p>
              <h3>John</h3>
            </div>
            <div className="team__peep__item">
              <img
                src={require("../src/images/team_peeps/Frame (3).png")}
                alt="team"
              />
              <p>Designer</p>
              <h3>Justin</h3>
            </div>
            <div className="team__peep__item">
              <img
                src={require("../src/images/team_peeps/Frame (4).png")}
                alt="team"
              />
              <p>Designer</p>
              <h3>Jessica</h3>
            </div>
            <div className="team__peep__item">
              <img
                src={require("../src/images/team_peeps/Frame (5).png")}
                alt="team"
              />
              <p>Designer</p>
              <h3>Katty</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
