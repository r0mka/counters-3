import React from 'react';

export default function CountBtn({ value, count, updateCounter }) {
  return (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => updateCounter(value + count)}
    >
      {value > 0 ? `+${value}` : value}
    </button>
  );
}
