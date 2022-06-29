import "./App.scss";
import ControlledAccordions from "./components/ControlledAccordions";
import React, { createContext, useContext } from "react";
import { SecComp } from ".";

function App() {
  return (
    <div className="App">
      {/* box 1 */}
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

      {/* box 2 */}
      <div className="collection">
        <div className="container__2">
          <div className="collection__title">
            <p>Collection</p>
            <h2>Meet Our Bored Peeps!</h2>
          </div>
          <div className="block">
            <div className="block__col">
              <div className="block__item">
                <p className={"block__col__title"}>6500 Bored Peeps</p>
                <p className={"block__col__desc"}>
                  Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh
                  amet proin in tristique. Ipsum morbi adipiscing faucibus eu
                  odio in tellus risus.
                </p>
              </div>
              <hr />
              <br />
              <div className="block__item">
                <p className={"block__col__title"}>Mint Price & Date</p>
                <p className={"block__col__desc"}>
                  Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh
                  amet proin in tristique. Ipsum morbi adipiscing faucibus eu
                  odio in tellus risus.
                </p>
              </div>
              <hr />
              <br />
              <div className="block__item">
                <p className={"block__col__title"}>Why Bored Peeps</p>
                <p className={"block__col__desc"}>
                  Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh
                  amet proin in tristique. Ipsum morbi adipiscing faucibus eu
                  odio in tellus risus.
                </p>
              </div>
              <hr />
            </div>
            <div className="block__image">
              <img
                src={require("./assets/images/bored_peeps.png")}
                alt="bored"
              />
            </div>
          </div>
        </div>
      </div>

      {/* box 3 */}
      <div className="content">
        <div className="container__2">
          <div>
            <p className={"content__title"}>Rarity</p>
            <p className={"content__desc"}>Exclusive Content</p>
          </div>
          <hr />
          {/* peeps 1 */}
          <div className="content__block">
            <div className="tier">
              <h3>Common</h3>
              <p>Tier 1</p>
              <div>
                <img src={require("./assets/images/tier_1.png")} alt="tier" />
                <img src={require("./assets/images/tier_2.png")} alt="tier" />
                <img src={require("./assets/images/tier_2.png")} alt="tier" />
                <img src={require("./assets/images/tier_2.png")} alt="tier" />
                <img src={require("./assets/images/tier_2.png")} alt="tier" />
              </div>
              <p>
                Diam vestibulum mattis aliquam, urna condimentum id. Ultrices
                sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus
                posuere turpis commodo leo ipsum magnis.
              </p>
            </div>

            <div className="content__image">
              <img src={require("../src/images/peeps/peeps_1.png")} alt="" />
            </div>
          </div>
          <hr />
          {/* peeps 2 */}
          <div className="content__block">
            <div className="tier">
              <h3>Uncommon</h3>
              <p>Tier 2</p>
              <div>
                <img src={require("../src/images/tier_1.png")} alt="tier" />
                <img src={require("../src/images/tier_1.png")} alt="tier" />
                <img src={require("../src/images/tier_2.png")} alt="tier" />
                <img src={require("../src/images/tier_2.png")} alt="tier" />
                <img src={require("../src/images/tier_2.png")} alt="tier" />
              </div>
              <p>
                Diam vestibulum mattis aliquam, urna condimentum id. Ultrices
                sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus
                posuere turpis commodo leo ipsum magnis.
              </p>
            </div>

            <div className="content__image">
              <img src={require("../src/images/peeps/peeps_2.png")} alt="" />
            </div>
          </div>
          <hr />
          {/* peeps 3 */}
          <div className="content__block">
            <div className="tier">
              <h3>Rare</h3>
              <p>Tier 3</p>
              <div>
                <img src={require("../src/images/tier_1.png")} alt="tier" />
                <img src={require("../src/images/tier_1.png")} alt="tier" />
                <img src={require("../src/images/tier_1.png")} alt="tier" />
                <img src={require("../src/images/tier_2.png")} alt="tier" />
                <img src={require("../src/images/tier_2.png")} alt="tier" />
              </div>
              <p>
                Diam vestibulum mattis aliquam, urna condimentum id. Ultrices
                sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus
                posuere turpis commodo leo ipsum magnis.
              </p>
            </div>

            <div className="content__image">
              <img src={require("../src/images/peeps/peeps_3.png")} alt="" />
            </div>
          </div>
          <hr />
          {/* peeps 4 */}
          <div className="content__block">
            <div className="tier">
              <h3>Very Rare</h3>
              <p>Tier 4</p>
              <div>
                <img src={require("../src/images/tier_1.png")} alt="tier" />
                <img src={require("../src/images/tier_1.png")} alt="tier" />
                <img src={require("../src/images/tier_1.png")} alt="tier" />
                <img src={require("../src/images/tier_1.png")} alt="tier" />
                <img src={require("../src/images/tier_2.png")} alt="tier" />
              </div>
              <p>
                Diam vestibulum mattis aliquam, urna condimentum id. Ultrices
                sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus
                posuere turpis commodo leo ipsum magnis.
              </p>
            </div>

            <div className="content__image">
              <img src={require("../src/images/peeps/peeps_4.png")} alt="" />
            </div>
          </div>
          <hr />
          {/* peeps 5 */}
          <div className="content__block">
            <div className="tier">
              <h3>Legendary</h3>
              <p>Tier 1</p>
              <div>
                <img src={require("../src/images/tier_1.png")} alt="tier" />
                <img src={require("../src/images/tier_1.png")} alt="tier" />
                <img src={require("../src/images/tier_1.png")} alt="tier" />
                <img src={require("../src/images/tier_1.png")} alt="tier" />
                <img src={require("../src/images/tier_1.png")} alt="tier" />
              </div>
              <p>
                Diam vestibulum mattis aliquam, urna condimentum id. Ultrices
                sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus
                posuere turpis commodo leo ipsum magnis.
              </p>
            </div>

            <div className="content__image">
              <img src={require("../src/images/peeps/peeps_5.png")} alt="" />
            </div>
          </div>
          <hr />
        </div>
      </div>

      {/* box 4 */}
      <div className="container__2 ">
        <div className="roadmap">
          <p className="letter">Releases</p>
          <h2>Our Roadmap</h2>

          {/* block 1 */}
          <div className="roadmap__block">
            <div className="roadmap__block__left">
              <span>
                <img src={require("./images/procent.png")} alt="" />
              </span>
              <span> 0%</span>
            </div>
            <div className="roadmap__block__middle">
              <p>Q1 2022</p>
              <h3>Community DAO</h3>
              <p>
                Diam vestibulum mattis aliquam, urna condimentum id. Ultrices
                sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus
                posuere turpis commodo leo ipsum magnis.
              </p>
            </div>
            <div className="roadmap__block__right"></div>
          </div>

          {/* block 2 */}
          <div className="roadmap__block">
            <div className="roadmap__block__left">
              <span>
                <img src={require("./images/procent.png")} alt="" />
              </span>
              <span> 20%</span>
            </div>
            <div className="roadmap__block__middle">
              <p>Q2 2022</p>
              <h3>Opening Event</h3>
              <p>
                Diam vestibulum mattis aliquam, urna condimentum id. Ultrices
                sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus
                posuere turpis commodo leo ipsum magnis.
              </p>
            </div>
            <div className="roadmap__block__right">
              <img src={require("./images/Standing.png")} alt="standing" />
            </div>
          </div>

          {/* block 3*/}
          <div className="roadmap__block">
            <div className="roadmap__block__left">
              <span>
                <img src={require("./images/procent.png")} alt="" />
              </span>
              <span> 40%</span>
            </div>
            <div className="roadmap__block__middle">
              <p>Q3 2022</p>
              <h3>Charity Donation</h3>
              <p>
                Diam vestibulum mattis aliquam, urna condimentum id. Ultrices
                sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus
                posuere turpis commodo leo ipsum magnis.
              </p>
            </div>
            <div className="roadmap__block__right"></div>
          </div>

          {/* block 4*/}
          <div className="roadmap__block">
            <div className="roadmap__block__left">
              <span>
                <img src={require("./images/procent.png")} alt="" />
              </span>
              <span> 60%</span>
            </div>
            <div className="roadmap__block__middle">
              <p>Q4 2022</p>
              <h3>Rare Giveaways</h3>
              <p>
                Diam vestibulum mattis aliquam, urna condimentum id. Ultrices
                sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus
                posuere turpis commodo leo ipsum magnis.
              </p>
            </div>
            <div className="roadmap__block__right">
              <img src={require("./images/Sitting.png")} alt="" />
            </div>
          </div>

          {/* block 5*/}
          <div className="roadmap__block">
            <div className="roadmap__block__left">
              <span>
                <img src={require("./images/procent.png")} alt="" />
              </span>
              <span> 80%</span>
            </div>
            <div className="roadmap__block__middle">
              <p>Q1 2023</p>
              <h3>New Nfts</h3>
              <p>
                Diam vestibulum mattis aliquam, urna condimentum id. Ultrices
                sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus
                posuere turpis commodo leo ipsum magnis.
              </p>
            </div>
            <div className="roadmap__block__right"></div>
          </div>

          {/* block 6*/}
          <div className="roadmap__block">
            <div className="roadmap__block__left">
              <span>
                <img src={require("./images/procent.png")} alt="" />
              </span>
              <span> 100%</span>
            </div>
            <div className="roadmap__block__middle">
              <p>Q2 2023</p>
              <h3>Metaverse</h3>
              <p>
                Diam vestibulum mattis aliquam, urna condimentum id. Ultrices
                sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus
                posuere turpis commodo leo ipsum magnis.
              </p>
            </div>
            <div className="roadmap__block__right">
              <img src={require("./images/man_n_woman.png")} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* box 5 */}
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

      {/* box 6 */}
      <div className=" container__2">
        <div className="question">
          <div className="question__header">
            <p>Faq</p>
            <h2>Frequent Questions</h2>
          </div>
          <div>
            <ControlledAccordions />
          </div>
        </div>
      </div>

      {/* box 7 */}
      <section>
        <div className="container__2 ">
          <div className=" footer">
            <div className="footer__header">
              <h2>Follow us on</h2>
              <p>Navigation</p>
            </div>
            <br />
            <hr />
            <br />
            <div className={"footer__navigator"}>
              <div className={"footer__social"}>
                <p>Discord</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>Facebook</p>
              </div>
              <div className={"footer__nav"}>
                <p>Home</p>
                <p>Style Guide</p>
                <p>Licenses</p>
                <p>Changelog</p>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <div className={"footer__dev"}>
              <p>develop by Ikova</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
