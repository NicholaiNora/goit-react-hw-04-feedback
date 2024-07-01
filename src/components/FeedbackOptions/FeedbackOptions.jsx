// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOption.module.css';

function FeedbackOptions({ buttons, handleClick }) {
  return (
    <div>
      {buttons.map(button => (
        <button
          type="button"
          onClick={() => handleClick(button)}
          key={button}
          className={css.button}
        >
          {button}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;

// export class FeedbackOptions extends Component {
//   static propTypes = {
//     options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
//       .isRequired,
//     onLeaveFeedback: PropTypes.func.isRequired,
//   };
//   render() {
//     const { options, onLeaveFeedback } = this.props;
//     return (
//       <div>
//         {options.map(button => (
//           <button
//             type="button"
//             onClick={() => onLeaveFeedback(button)}
//                 key={button}
//             className={css.button}
//           >
//             {button}
//           </button>
//         ))}
//       </div>
//     );
//   }
// }

// export default FeedbackOptions
