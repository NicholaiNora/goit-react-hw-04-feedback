// import React, { Component } from 'react'
import React from 'react';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
Notification.propTypes = {
      message: PropTypes.string.isRequired,
  };

export default Notification;

// export class Notification extends Component {
//   static propTypes = {
//       message: PropTypes.string.isRequired,
//   };
//   render() {
//     const { message } = this.props;
//     return (
//       <div>
//         <p>{message}</p>
//       </div>
//     );
//   }
// }

// export default Notification
