import { useState, useRef } from 'react';

export const createTimerState = () => {
  const [elapsed, setElapsed] = useState(0);
  const interval = useRef<number | undefined>(undefined);

  return {
    elapsed,
    setElapsed,
    interval,
  };
}

