import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

function SequencePreviousBtn({ ...otherProps }) {
  const { handleSequence } = useContext(StoreContext);

  return (
    <span {...otherProps}>
      <input
        value='prev'
        type='button'
        onClick={() => handleSequence('prev')}
      />
    </span>
  );
}

export default SequencePreviousBtn;
