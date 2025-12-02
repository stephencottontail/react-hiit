import { useState, useRef } from 'react';

export const createTimerState = () => {
  const [elapsed, setElapsed] = useState(0);
  const [referenceTime, setReferenceTime] = useState(Date.now());
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  return {
    elapsed,
    setElapsed,
    referenceTime,
    setReferenceTime,
    timeout,
  };
}

