import React from 'react';

function Progress({ data, onlyBar, noBar, ...otherProps }) {
  let total = [];
  let completed = [];

  data.map(result => {
    function handler() {
      if (result.steps) {
        for (let i = 0; i < result.steps.length; i++) {
          const obj = result.steps[i];
          if (obj.complete) completed.push(obj.complete);
          return total.push(obj);
        }
      }

      if (result.value) {
        if (result.complete) completed.push(result);
        return total.push(result);
      }

      if (result.complete) completed.push(result);
      else
        console.warn(`Progress: could not find 'complete' property in object.`);

      return total.push(result);
    }

    return handler();
  });

  total = total.length;
  completed = completed.length;

  if (onlyBar) {
    return <progress value={completed} max={total}></progress>;
  }

  if (noBar) {
    return (
      <p>
        {completed}/{total}
      </p>
    );
  }

  return (
    <div {...otherProps}>
      <div>
        {completed}/{total}
      </div>
      <progress value={completed} max={total}></progress>
    </div>
  );
}
export default Progress;
