import React from 'react';

export default function RangeSlider({ range, updateRange }) {
  const handleChange = (event) => updateRange(Number(event.target.value));

  return (
    <div className="slidecontainer">
      <input
        className="slider"
        id="myRange"
        type="range"
        min="1"
        max="10"
        value={range}
        onChange={handleChange}
      />
      <p className="range-value-container">
        Range: <span id="range-value">{range}</span>
      </p>
    </div>
  );
}
