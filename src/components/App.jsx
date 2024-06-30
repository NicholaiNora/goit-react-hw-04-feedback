import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Sections from './Sections/Sections';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = type => {
    this.setState(
      prevState => ({
        ...prevState,
        [type]: prevState[type] + 1,
      }),
      () => console.log(this.state)
    );
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total === 0 ? 0 : Math.round((good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const buttons = ['good', 'neutral', 'bad'];
    return (
      <div>
        <Sections title="Please leave Feedback">
          <FeedbackOptions
            options={buttons}
            onLeaveFeedback={this.handleClick}
          />
        </Sections>
        <Sections title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Sections>
      </div>
    );
  }
}

export default App;
