import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    };
    
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <p>
          Good: <span>{good}</span>
        </p>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
        <p>
          Bad: <span>{bad}</span>
        </p>
        <p>
          Total: <span>{total}</span>
        </p>
        <p>
          Positive Feedback: <span>{positivePercentage}%</span>
        </p>
      </div>
    );
  }
}

export default Statistics
