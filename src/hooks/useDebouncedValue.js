import { useState, useCallback } from 'react';

function useDebouncedValue(initialVal, delay, callback) {
  const [val, setValue] = useState(initialVal);
  const [timer, setTimer] = useState(null);

  const handleInputChange = useCallback(
    event => {
      const inputVal = event.target.value;
      setValue(inputVal);
      if (timer) {
        clearTimeout(timer);
      }
      const timerId = setTimeout(() => callback(inputVal), delay);
      setTimer(timerId);

      return () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
    },
    [callback, delay, timer]
  );


  return [val, handleInputChange];
}

export default useDebouncedValue;