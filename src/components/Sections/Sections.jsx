// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

function Sections({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

Sections.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Sections;

// export class Sections extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     children: PropTypes.node.isRequired,
//   };
//   render() {
//     const { title, children } = this.props;
//     return (
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//     );
//   }
// }

// export default Sections
