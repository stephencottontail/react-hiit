import { useState, useRef } from 'react';

export const createTimerState = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const interval = useRef(null);

  return {
    isPlaying,
    setIsPlaying,
    elapsed,
    setElapsed,
    interval,
  };
}

