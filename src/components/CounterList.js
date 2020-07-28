import React from 'react';
import { TiPlusOutline } from 'react-icons/ti';
import { FaTrash } from 'react-icons/fa';
import { RiRestartLine } from 'react-icons/ri';
import { v4 as uuid } from 'uuid';
import Counter from './Counter';

/**
 * uuid() GENERATES AND RETURNS A UNIQUE INDENTIFICATOR OF TYPE STRING
 */

export default function CounterList({ defaultCounter }) {
  // array of unique ids for key values that will be mapped to each <li> <Counter/> </li>
  const [counters, setCounters] = React.useState([defaultCounter]);
  const [range, setRange] = React.useState(3);

  const deleteAll = () => setCounters([]);

  const resetAll = () =>
    setCounters(counters.map((counter) => ({ ...counter, count: 0 })));

  const addCounter = () => setCounters([...counters, { id: uuid(), count: 0 }]);

  const updateCounter = (id, newCount) =>
    setCounters(
      counters.map((counter) =>
        counter.id === id
          ? {
              ...counter,
              count: newCount,
            }
          : counter
      )
    );

  const resetCounter = (id) =>
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, count: 0 } : counter
      )
    );

  const deleteCounter = (id) =>
    setCounters(counters.filter((counter) => counter.id !== id));

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
            value={range}
            onChange={(event) => setRange(Number(event.target.value))}
          />
          <p className="range-value-container">
            Range: <span id="range-value">{range}</span>
          </p>
        </div>
        <div>
          <button
            disabled={counters.length > 4}
            className={`btn-add ${counters.length > 4 && 'not-allowed'}`}
            onClick={addCounter}
          >
            <TiPlusOutline size={64} />
          </button>

          <button className="btn-delete-all" onClick={deleteAll}>
            <FaTrash size={48} />
          </button>

          <button className="btn-delete-all" id="reset" onClick={resetAll}>
            <RiRestartLine size={48} />
          </button>
        </div>
      </div>
      <ul>
        {counters.map((counter) => (
          <li key={counter.id}>
            <Counter
              id={counter.id}
              count={counter.count}
              deleteCounter={deleteCounter}
              updateCounter={updateCounter}
              resetCounter={resetCounter}
              range={range}
            />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

CounterList.defaultProps = {
  defaultCounter: { id: uuid(), count: 0 },
};
