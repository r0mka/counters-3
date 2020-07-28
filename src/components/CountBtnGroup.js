import React from 'react';
import { v4 as uuid } from 'uuid';

import CountBtn from './CountBtn';

export default function CountBtnGroup({ values, count, updateCounter }) {
  return (
    <div className="btn-group btn-group-lg m-3 my-btn-group-size">
      {values.map((value) => (
        <CountBtn
          value={value}
          count={count}
          updateCounter={updateCounter}
          key={uuid()}
        />
      ))}
    </div>
  );
}
