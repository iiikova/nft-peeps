import React from "react";
import "../../App.scss";
import ControlledAccordions from "../../components/ControlledAccordions";

function Question() {
  return (
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
  );
}

export default Question;
