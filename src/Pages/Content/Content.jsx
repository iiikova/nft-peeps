import React from "react";
import style from "./Content.module.sass";

function Content() {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div>
          <h4>Rarity</h4>
          <h1>Exclusive Content</h1>
        </div>
        {/* peeps 1 */}
        <div className={style.peeps}>
          <div className={style.tier}>
            <h3>Common</h3>
            <p>Tier 1</p>
            <div>
              <img src={require("../../assets/images/tier_1.png")} alt="tier" />
              <img src={require("../../assets/images/tier_2.png")} alt="tier" />
              <img src={require("../../assets/images/tier_2.png")} alt="tier" />
              <img src={require("../../assets/images/tier_2.png")} alt="tier" />
              <img src={require("../../assets/images/tier_2.png")} alt="tier" />
            </div>
            <p>
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
              posuere turpis commodo leo ipsum magnis.
            </p>
          </div>

          <div className={style.content__image}>
            <img
              src={require("../../assets/images/peeps/peeps_1.png")}
              alt="peeps"
            />
          </div>
        </div>
        {/* peeps 2 */}
        <div className={style.peeps}>
          <div className={style.tier}>
            <h3>Uncommon</h3>
            <p>Tier 2</p>
            <div>
              <img src={require("../../assets/images/tier_1.png")} alt="tier" />
              <img src={require("../../assets/images/tier_1.png")} alt="tier" />
              <img src={require("../../assets/images/tier_2.png")} alt="tier" />
              <img src={require("../../assets/images/tier_2.png")} alt="tier" />
              <img src={require("../../assets/images/tier_2.png")} alt="tier" />
            </div>
            <p>
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
              posuere turpis commodo leo ipsum magnis.
            </p>
          </div>

          <div className={style.content__image}>
            <img
              src={require("../../assets/images/peeps/peeps_2.png")}
              alt="peeps"
            />
          </div>
        </div>
        {/* peeps 3 */}
        <div className={style.peeps}>
          <div className={style.tier}>
            <h3>Rare</h3>
            <p>Tier 3</p>
            <div>
              <img src={require("../../assets/images/tier_1.png")} alt="tier" />
              <img src={require("../../assets/images/tier_1.png")} alt="tier" />
              <img src={require("../../assets/images/tier_1.png")} alt="tier" />
              <img src={require("../../assets/images/tier_2.png")} alt="tier" />
              <img src={require("../../assets/images/tier_2.png")} alt="tier" />
            </div>
            <p>
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
              posuere turpis commodo leo ipsum magnis.
            </p>
          </div>

          <div className={style.content__image}>
            <img
              src={require("../../assets/images/peeps/peeps_3.png")}
              alt="peeps"
            />
          </div>
        </div>
        {/* peeps 4 */}
        <div className={style.peeps}>
          <div className={style.tier}>
            <h3>Very Rare</h3>
            <p>Tier 4</p>
            <div>
              <img src={require("../../assets/images/tier_1.png")} alt="tier" />
              <img src={require("../../assets/images/tier_1.png")} alt="tier" />
              <img src={require("../../assets/images/tier_1.png")} alt="tier" />
              <img src={require("../../assets/images/tier_1.png")} alt="tier" />
              <img src={require("../../assets/images/tier_2.png")} alt="tier" />
            </div>
            <p>
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
              posuere turpis commodo leo ipsum magnis.
            </p>
          </div>

          <div className={style.content__image}>
            <img
              src={require("../../assets/images/peeps/peeps_4.png")}
              alt="peeps"
            />
          </div>
        </div>
        {/* peeps 5 */}
        <div className={style.peeps}>
          <div className={style.tier}>
            <h3>Legendary</h3>
            <p>Tier 1</p>
            <div>
              <img src={require("../../assets/images/tier_1.png")} alt="tier" />
              <img src={require("../../assets/images/tier_1.png")} alt="tier" />
              <img src={require("../../assets/images/tier_1.png")} alt="tier" />
              <img src={require("../../assets/images/tier_1.png")} alt="tier" />
              <img src={require("../../assets/images/tier_1.png")} alt="tier" />
            </div>
            <p>
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
              posuere turpis commodo leo ipsum magnis.
            </p>
          </div>

          <div className={style.content__image}>
            <img
              src={require("../../assets/images/peeps/peeps_5.png")}
              alt="peeps"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
