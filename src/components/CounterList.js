import React from 'react';
import { TiPlusOutline } from 'react-icons/ti';
import { v4 as uuid } from 'uuid';

import Counter from './Counter';

/**
 * uuid() GENERATES AND RETURNS A UNIQUE INDENTIFICATOR OF TYPE STRING
 */

export default function CounterList({ defaultCounterId }) {
  // array of unique ids for key values that will be mapped to each <li> <Counter/> </li>
  const [idsOfAllCounters, setIdsOfAllCounters] = React.useState([
    defaultCounterId,
  ]);

  const addCounter = () => setIdsOfAllCounters([...idsOfAllCounters, uuid()]);

  const deleteCounter = (id) =>
    setIdsOfAllCounters(
      idsOfAllCounters.filter((counterId) => counterId !== id)
    );

  return (
    <React.Fragment>
      <div>
        <div className="slidecontainer">
          <input
            className="slider"
            id="myRange"
            type="range"
            min="1"
            max="10"
            value="1"
          />
          <p>
            Range: <span id="range-value"></span>
          </p>
        </div>
        <button className="btn-add" onClick={addCounter}>
          <TiPlusOutline size={64} />
        </button>
      </div>
      <ul>
        {idsOfAllCounters.map((counterId) => (
          <li key={counterId}>
            <Counter id={counterId} deleteCounter={deleteCounter} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

CounterList.defaultProps = { defaultCounterId: uuid() };
