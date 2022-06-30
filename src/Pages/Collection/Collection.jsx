import React from "react";
import style from "../Collection/Collection.module.sass";

function Collection() {
  return (
    <div className={style.collection}>
      <div className={style.container}>
        <div>
          <h4>Collection</h4>
          <h1>Meet Our Bored Peeps!</h1>
        </div>

        <div className={style.block}>
          <div className={style.block__col}>
            <div>
              <h2>6500 Bored Peeps</h2>
              <h3>
                Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh
                amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio
                in tellus risus.
              </h3>
            </div>

            <div>
              <h2>Mint Price & Date</h2>
              <h3>
                Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh
                amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio
                in tellus risus.
              </h3>
            </div>

            <div>
              <h2>Why Bored Peeps</h2>
              <h3>
                Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh
                amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio
                in tellus risus.
              </h3>
            </div>
          </div>

          <div>
            <img
              src={require("../../assets/images/bored_peeps.png")}
              alt="bored"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
