// import React, { Component } from 'react';
import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Sections from './Sections/Sections';
import Notification from './Notification/Notification';

function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;;
  const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);
  const buttons = ['good', 'neutral', 'bad'];

  const handleClick = (button) => {
    switch (button) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Sections title="Please leave Feedback">
        <FeedbackOptions buttons={buttons} handleClick={handleClick} />
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

export default App;



// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = type => {
//     this.setState(
//       prevState => ({
//         ...prevState,
//         [type]: prevState[type] + 1,
//       }),
//       () => console.log(this.state)
//     );
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage() {
//     const { good, neutral, bad } = this.state;
//     let total = good + neutral + bad;
//     return total === 0 ? 0 : Math.round((good / total) * 100);
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     const buttons = ['good', 'neutral', 'bad'];
//     return (
//       <div>
//         <Sections title="Please leave Feedback">
//           <FeedbackOptions
//             options={buttons}
//             onLeaveFeedback={this.handleClick}
//           />
//         </Sections>
//         <Sections title="Statistics">
//           {total > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Sections>
//       </div>
//     );
//   }
// }

// export default App;
