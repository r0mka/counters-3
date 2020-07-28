import React from 'react';
import { v4 as uuid } from 'uuid';

/**
 * uuid() GENERATES AND RETURNS A UNIQUE INDENTIFICATOR OF TYPE STRING
 */

const useCounter = (defaultCounter) => {
  // array of counters represented as { id: uuid(), count: 0, range: 3 }
  const [counters, setCounters] = React.useState([defaultCounter]);

  const deleteAll = () => setCounters([]);

  const resetAll = () =>
    setCounters(counters.map((counter) => ({ ...counter, count: 0 })));

  const addCounter = () =>
    setCounters([...counters, { id: uuid(), count: 0, range: 3 }]);

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

  return {
    counters,
    deleteAll,
    resetAll,
    addCounter,
    updateCounter,
    resetCounter,
    deleteCounter,
  };
};

export default useCounter;
