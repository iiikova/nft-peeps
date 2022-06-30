import React from "react";
import style from "./Header.module.sass";

function Header() {
  return (
    <div className={style.main}>
      <header>
        <div>
          <img src={require("../../assets/images/logo.png")} alt="logo" />
        </div>
        <div className={style.navbar}>
          <ul>
            <li>
              <a href="#collection">
                Collect
                <br />
                ion
              </a>
            </li>
            <li>
              <a href="#content">
                Cont
                <br />
                ent
              </a>
            </li>
            <li>
              <a href="#roadmap">
                Road
                <br />
                map
              </a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <button>OpenSea</button>
          </ul>
        </div>
      </header>

      <div className={style.title}>
        <h3>NFT Collection</h3>
        <h1>
          Bored
          <br />
          NFT Peeps
        </h1>
        <p>
          Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh amet
          proin in tristique. Ipsum morbi adipiscing faucibus eu odio in tellus
          risus.
        </p>
        <button onClick={""}>OpenSea</button>
      </div>
    </div>
  );
}

export default Header;
