import React from "react";
import Section from "../section/Section";
import Controls from "../controls/Controls";
import Statistics from "../statistics/Statistics";
import style from "./FeedbackOptions.module.css";

class FeedbackOptions extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrement = (evt) => {
    const { name } = evt.currentTarget;
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };
  render() {
    return (
      <div className={style.container}>
        <Section title="Будь ласка залишіть свій відгук">
          <Controls options={this.state} onLeaveFeedback={this.handleCLick} />
        </Section>
        <Section title="Статистика">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

//<FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions>
export default FeedbackOptions;
