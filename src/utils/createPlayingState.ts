import { useState } from 'react';

export const createPlayingState = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return {
    isPlaying,
    setIsPlaying,
  };
}

