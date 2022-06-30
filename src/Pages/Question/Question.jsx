import React from "react";
import style from "./Question.module.sass";

// components
import ControlledAccordions from "../../components/ControlledAccordions";

function Question() {
  return (
    <div className={style.question}>
      <div className={style.container}>
        <div>
          <h4>Faq</h4>
          <h1>Frequent Questions</h1>
        </div>
        <ControlledAccordions />
      </div>
    </div>
  );
}

export default Question;
