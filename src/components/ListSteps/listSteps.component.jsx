import React from 'react';

function ListSteps({ steps, max, ...otherProps }) {
  if (max && !(typeof max === 'number'))
    console.error(`ListSteps:`, ` typeof 'max' prop must be a number`);

  steps = steps && max && typeof max === 'number' ? steps.slice(0, max) : steps;
  return steps ? (
    steps.map((step, key) => (
      <li {...otherProps} key={key}>
        {step}
      </li>
    ))
  ) : (
    <div>
      {console.error(
        `ListSteps: 'steps' prop is invalid`,
        `Either the prop is missing or the data cannot be mapped`
      )}
    </div>
  );
}

export default ListSteps;
