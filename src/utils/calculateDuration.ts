import { type Duration } from '../types/Duration';

export const calculateDuration = (cycles: number, work: number, ratio: number): Duration => {
  let ticks: Array<number> = [];
  const initialDuration = 0;
  const total = Array.from({ length: cycles }).reduce(
    (accumulator: number) => {
      ticks.push(accumulator + work);
      ticks.push(accumulator + work + (work * ratio));

      return accumulator + work + (work * ratio)
    },
    initialDuration
  );

  return {
    ticks: ticks,
    total: total
  };
}
