import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

function SequenceNextBtn({ value, ...otherProps }) {
  const { handleSequence } = useContext(StoreContext);

  return (
    <span {...otherProps}>
      <input
        value={value || 'next'}
        type='button'
        onClick={() => handleSequence('next')}
      />
    </span>
  );
}

export default SequenceNextBtn;
