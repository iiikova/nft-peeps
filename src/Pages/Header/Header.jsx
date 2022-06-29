import React from "react";
import "../../App.scss";

function Header() {
  return (
    <div>
      <div className="main">
        <div className="container">
          <header>
            <div className="logo">
              <img src={require("./assets/images/logo.png")} alt="logo" />
            </div>
            <div className="navbar">
              <ul>
                <li>
                  <a href="#">
                    Collect
                    <br />
                    ion
                  </a>
                </li>
                <li>
                  <a href="#">
                    Cont
                    <br />
                    ent
                  </a>
                </li>
                <li>
                  <a href="#">
                    Road
                    <br />
                    map
                  </a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <button>OpenSea</button>
              </ul>
            </div>
          </header>
          <div className="title">
            <p className="title__p">NFT Collection</p>
            <h1>Bored</h1>
            <h1>NFT Peeps</h1>
            <p className="title__desc">
              Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh amet
              proin in tristique. Ipsum morbi adipiscing faucibus eu odio in
              tellus risus.
            </p>
            <button onClick={""}>OpenSea</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
