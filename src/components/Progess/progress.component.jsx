import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

function Progress({ data, progress }) {
  const {
    goalsState: [goals],
  } = useContext(StoreContext);

  const countData = goals.map(goal => (goal.steps ? goal.steps.length : 0));
  const totalData =
    countData && countData.length
      ? countData.reduce((acc, curr) => acc + curr)
      : null;
  const getCompletedData = data.map(obj => (obj.complete ? obj : 0));
  const completedData = getCompletedData.filter(array => array).length;

  if (progress && progress === 'alone') {
    return <progress value={completedData} max={totalData}></progress>;
  }

  if (progress && progress === 'none') {
    return <p>{`${completedData} / ${totalData}`}</p>;
  }

  return (
    <div>
      <p>{`${completedData} / ${totalData}`}</p>
      <progress value={completedData} max={totalData}></progress>
    </div>
  );
}

export default Progress;
