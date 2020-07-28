import React from 'react';
import { FaTrash } from 'react-icons/fa';

import CountBtnGroup from './CountBtnGroup';

export default function Counter({ id, deleteCounter }) {
  const [count, setCount] = React.useState(0);

  const updateCounter = (newCount) => setCount(newCount);

  return (
    <div className="counter-container">
      <CountBtnGroup
        values={[1, 2, 3]}
        count={count}
        updateCounter={updateCounter}
      />

      <span className="counter-value">{count}</span>

      <CountBtnGroup
        values={[-3, -2, -1]}
        count={count}
        updateCounter={updateCounter}
      />

      <button onClick={() => deleteCounter(id)} className="btn-delete">
        <FaTrash size={24} />
      </button>
    </div>
  );
}
