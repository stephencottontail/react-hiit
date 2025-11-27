import { useState } from 'react';

export const createControlsState = () => {
  const [cycles, setCycles] = useState('3');
  const [work, setWork] = useState('15');
  const [ratio, setRatio] = useState('3');

  return { cycles, setCycles, work, setWork, ratio, setRatio };
}
