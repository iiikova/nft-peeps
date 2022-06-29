import React from "react";
import "../../App.scss";

function Collection() {
  return (
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
                amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio
                in tellus risus.
              </p>
            </div>
            <hr />
            <br />
            <div className="block__item">
              <p className={"block__col__title"}>Mint Price & Date</p>
              <p className={"block__col__desc"}>
                Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh
                amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio
                in tellus risus.
              </p>
            </div>
            <hr />
            <br />
            <div className="block__item">
              <p className={"block__col__title"}>Why Bored Peeps</p>
              <p className={"block__col__desc"}>
                Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh
                amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio
                in tellus risus.
              </p>
            </div>
            <hr />
          </div>
          <div className="block__image">
            <img src={require("./assets/images/bored_peeps.png")} alt="bored" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
