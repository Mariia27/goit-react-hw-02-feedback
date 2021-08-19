import React from "react";
import Notification from "../notification/Notification";
import style from "../feedbackOptions/FeedbackOptions.module.css";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <div>
        {good || neutral || bad !== 0 ? (
          <ul>
            <li>
              <span className={style.good}>Добре</span>: {good}
            </li>
            <li>
              <span className={style.neutral}>Нейтрально</span>: {neutral}
            </li>
            <li>
              <span className={style.bad}> Погано</span>: {bad}
            </li>
            <li className={style.total}> Загально відгуків: {total} </li>
            <li className={style.positivePercentage}>
              Хороших відгуків: {positivePercentage}%{" "}
            </li>
          </ul>
        ) : (
          <Notification message="Відгуки відсутні" />
        )}
      </div>
    </div>
    // <Statistics good={ } neutral={ } bad={ } total={ } positivePercentage={ }></Statistics>
  );
}

export default Statistics;
