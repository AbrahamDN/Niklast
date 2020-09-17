import React from 'react';

function ListSteps({ steps, ...otherProps }) {
  return steps.map((step, key) => (
    <li {...otherProps} key={key}>
      {step}
    </li>
  ));
}

export default ListSteps;
