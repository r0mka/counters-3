import React from 'react';
import { TiPlusOutline } from 'react-icons/ti';
import { FaTrash } from 'react-icons/fa';
import { RiRestartLine } from 'react-icons/ri';
import { v4 as uuid } from 'uuid';

import useCounter from '../hooks/useCounter';
import Counter from './Counter';
import RangeSlider from './RangeSlider';
/**
 * uuid() GENERATES AND RETURNS A UNIQUE INDENTIFICATOR OF TYPE STRING
 */

export default function CounterList({ defaultCounter }) {
  // array of unique ids for key values that will be mapped to each <li> <Counter/> </li>
  const {
    counters,
    deleteAll,
    resetAll,
    addCounter,
    updateCounter,
    resetCounter,
    deleteCounter,
  } = useCounter(defaultCounter);

  const [range, setRange] = React.useState(3);

  const updateRange = (newRange) => setRange(newRange);

  return (
    <React.Fragment>
      <div>
        <RangeSlider range={range} updateRange={updateRange} />
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
