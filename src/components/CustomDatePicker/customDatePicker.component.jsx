import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';

import { StoreContext } from '../../context/storeContext';

function CustomDatePicker({ step, goal, ...otherProps }) {
  const {
    goalsState: [goals, setGoals],
  } = useContext(StoreContext);

  const [startDate, setStartDate] = useState(new Date());

  const dueDateValidator = data => data && data.dueDate;
  const createdAtValidator = data => data && data.createdAt;

  const dueDate = dueDateValidator(step)
    ? new Date(step.dueDate)
    : dueDateValidator(goal)
    ? new Date(goal.dueDate)
    : null;

  function setDueDate(date, data) {
    if (data.steps) {
      return {
        ...data,
        steps: data.steps.map(obj =>
          obj === step ? { ...obj, dueDate: date } : obj
        ),
      };
    }

    return { ...data, dueDate: date };
  }

  function handleOnChange(date) {
    setStartDate(date);
    if (dueDateValidator(step)) {
      return setGoals(
        goals.map(goalObj =>
          goalObj === goal ? setDueDate(date, goalObj) : goalObj
        )
      );
    }

    if (dueDateValidator(goal)) {
      return setDueDate(date, goal);
    }
  }

  function handleMaxDate() {
    if (goal.duration) {
      if (goal.duration.days && createdAtValidator(goal))
        return addDays(new Date(goal.createdAt), goal.duration.days);
    }

    return addDays(new Date(), 7);
  }

  function handleMinDate(data) {
    if (createdAtValidator(data)) return new Date(data.createdAt);

    return new Date();
  }

  React.useEffect(() => {
    if (!dueDate && step) {
      setGoals(
        goals.map(goalObj =>
          goalObj === goal ? setDueDate(startDate, goalObj) : goalObj
        )
      );
    }
    if (!dueDate && goal) {
      setDueDate(startDate, goal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DatePicker
      selected={dueDate || startDate}
      onChange={date => handleOnChange(date)}
      timeInputLabel='Time:'
      dateFormat='dd/MM/yyyy h:mm aa'
      showTimeInput
      minDate={handleMinDate(step)}
      maxDate={handleMaxDate()}
      {...otherProps}
    />
  );
}

export default CustomDatePicker;
