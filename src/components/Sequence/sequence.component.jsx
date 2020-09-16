import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

import SequencePreviousBtn from './sequencePreviousBtn.component';
import SequenceNextBtn from './sequenceNextBtn.component';

function Sequence({ data, ...otherProps }) {
  const {
    sequenceState: [sequence, setSequence],
    countSequenceState: [countSequence, setCountSequence],
  } = useContext(StoreContext);
  const [state, setState] = useState(sequence[countSequence]);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (sequence.length <= 0) {
      setSequence(data);
    }
    if (countSequence >= sequence.length) {
      setCountSequence(0);
      setComplete(!complete);
    }
    setState(sequence[countSequence]);
  }, [countSequence, complete, sequence, data, setSequence, setCountSequence]);

  return <div {...otherProps}>{state}</div>;
}

export default Sequence;
