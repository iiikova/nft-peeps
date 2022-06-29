import React from "react";

function Content() {
  return (
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
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
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
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
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
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
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
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
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
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
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
  );
}

export default Content;
