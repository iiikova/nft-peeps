import React from "react";
import style from "./Roadmap.module.sass";

function Roadmap() {
  return (
    <div className={style.roadmap}>
      <div className={style.container}>
        <div>
          <h4>Releases</h4>
          <h1>Our Roadmap</h1>
        </div>

        {/* block 1 */}
        <div className={style.roadmap__block}>
          <div className={style.roadmap__block__left}>
            <span>
              <img
                src={require("../../assets/images/procent.png")}
                alt="bg_letter"
              />
            </span>
            <span> 0%</span>
          </div>
          <div className={style.roadmap__block__middle}>
            <p>Q1 2022</p>
            <h3>Community DAO</h3>
            <p>
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
              posuere turpis commodo leo ipsum magnis.
            </p>
          </div>
          <div className={style.roadmap__block__right}></div>
        </div>

        {/* block 2 */}
        <div className={style.roadmap__block}>
          <div className={style.roadmap__block__left}>
            <span>
              <img
                src={require("../../assets/images/procent.png")}
                alt="vectore"
              />
            </span>
            <span> 20%</span>
          </div>
          <div className={style.roadmap__block__middle}>
            <p>Q2 2022</p>
            <h3>Opening Event</h3>
            <p>
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
              posuere turpis commodo leo ipsum magnis.
            </p>
          </div>
          <div className={style.roadmap__block__right}>
            <img
              src={require("../../assets/images/Standing.png")}
              alt="standing"
            />
          </div>
        </div>

        {/* block 3*/}
        <div className={style.roadmap__block}>
          <div className={style.roadmap__block__left}>
            <span>
              <img
                src={require("../../assets/images/procent.png")}
                alt="vectore"
              />
            </span>
            <span> 40%</span>
          </div>
          <div className={style.roadmap__block__middle}>
            <p>Q3 2022</p>
            <h3>Charity Donation</h3>
            <p>
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
              posuere turpis commodo leo ipsum magnis.
            </p>
          </div>
          <div className={style.roadmap__block__right}></div>
        </div>

        {/* block 4*/}
        <div className={style.roadmap__block}>
          <div className={style.roadmap__block__left}>
            <span>
              <img
                src={require("../../assets/images/procent.png")}
                alt="vectore"
              />
            </span>
            <span> 60%</span>
          </div>
          <div className={style.roadmap__block__middle}>
            <p>Q4 2022</p>
            <h3>Rare Giveaways</h3>
            <p>
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
              posuere turpis commodo leo ipsum magnis.
            </p>
          </div>
          <div className={style.roadmap__block__right}>
            <img
              src={require("../../assets/images/Sitting.png")}
              alt="vectore"
            />
          </div>
        </div>

        {/* block 5*/}
        <div className={style.roadmap__block}>
          <div className={style.roadmap__block__left}>
            <span>
              <img
                src={require("../../assets/images/procent.png")}
                alt="vectore"
              />
            </span>
            <span> 80%</span>
          </div>
          <div className={style.roadmap__block__middle}>
            <p>Q1 2023</p>
            <h3>New Nfts</h3>
            <p>
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
              posuere turpis commodo leo ipsum magnis.
            </p>
          </div>
          <div className={style.roadmap__block__right}></div>
        </div>

        {/* block 6*/}
        <div className={style.roadmap__block}>
          <div className={style.roadmap__block__left}>
            <span>
              <img
                src={require("../../assets/images/procent.png")}
                alt="vectore"
              />
            </span>
            <span> 100%</span>
          </div>
          <div className={style.roadmap__block__middle}>
            <p>Q2 2023</p>
            <h3>Metaverse</h3>
            <p>
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
              posuere turpis commodo leo ipsum magnis.
            </p>
          </div>
          <div className={style.roadmap__block__right}>
            <img
              src={require("../../assets/images/man_n_woman.png")}
              alt="vectore"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
