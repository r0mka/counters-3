import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { RiRestartLine } from 'react-icons/ri';
import CountBtnGroup from './CountBtnGroup';
import { makeArrayFromRange } from '../utils';

export default function Counter({
  id,
  deleteCounter,
  updateCounter,
  resetCounter,
  range,
  count,
}) {
  return (
    <div className="counter-container">
      <CountBtnGroup
        values={makeArrayFromRange(range)}
        count={count}
        updateCounter={(newCount) => updateCounter(id, newCount)}
      />

      <span className="counter-value">{count}</span>

      <CountBtnGroup
        values={makeArrayFromRange(range, false)}
        count={count}
        updateCounter={(newCount) => updateCounter(id, newCount)}
      />

      <button
        onClick={() => deleteCounter(id)}
        className="btn-delete btn-delete-counter"
      >
        <FaTrash size={24} />
      </button>
      <button
        onClick={() => resetCounter(id)}
        className="btn-delete btn-delete-counter"
      >
        <RiRestartLine size={24} />
      </button>
    </div>
  );
}
