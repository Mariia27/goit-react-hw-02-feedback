//<Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics>
import React from "react";
import PropTypes from "prop-types";

import style from "../feedbackOptions/FeedbackOptions.module.css";
function Section({ title, children }) {
  return (
    <div className={style.containerHeading}>
      {<h2 className={style.heading}>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
