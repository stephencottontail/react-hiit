export const formatElapsed = (elapsed: number): string => {
  const minutes = Math.floor(elapsed / 60000).toString().padStart(2, '0');
  const seconds = Math.floor((elapsed / 1000) % 60).toString().padStart(2, '0');
  const milliseconds = (elapsed % 1000).toString().padStart(3, '0');

  return `${minutes}:${seconds}.${milliseconds}`;
}

