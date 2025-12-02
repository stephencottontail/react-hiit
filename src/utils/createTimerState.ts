import { useState, useRef } from 'react';

export const createTimerState = () => {
  const [elapsed, setElapsed] = useState(0);
  const [referenceTime, setReferenceTime] = useState(Date.now());
  const [isWorkInterval, setIsWorkInterval] = useState(true);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);
  const lapCount = useRef(0);

  return {
    elapsed,
    setElapsed,
    referenceTime,
    setReferenceTime,
    isWorkInterval,
    setIsWorkInterval,
    timeout,
    lapCount,
  };
}

