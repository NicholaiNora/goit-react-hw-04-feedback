// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
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
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

// export class Statistics extends Component {
//   static propTypes = {
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//     total: PropTypes.number.isRequired,
//     positivePercentage: PropTypes.number.isRequired,
//     };

//   render() {
//     const { good, neutral, bad, total, positivePercentage } = this.props;
//     return (
//       <div>
//         <p>
//           Good: <span>{good}</span>
//         </p>
//         <p>
//           Neutral: <span>{neutral}</span>
//         </p>
//         <p>
//           Bad: <span>{bad}</span>
//         </p>
//         <p>
//           Total: <span>{total}</span>
//         </p>
//         <p>
//           Positive Feedback: <span>{positivePercentage}%</span>
//         </p>
//       </div>
//     );
//   }
// }

// export default Statistics
