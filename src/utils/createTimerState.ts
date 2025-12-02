import { useState, useRef } from 'react';

export const createTimerState = () => {
  const [elapsed, setElapsed] = useState(0);
  const [referenceTime, setReferenceTime] = useState(Date.now());
  const interval = useRef<number | undefined>(undefined);

  return {
    elapsed,
    setElapsed,
    referenceTime,
    setReferenceTime,
    interval,
  };
}

