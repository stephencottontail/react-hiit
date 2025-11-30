import { expect, test } from 'vitest';
import { calculateDuration } from './calculateDuration';

test('Calculate ticks and duration', () => {
  expect(calculateDuration(3, 15, 3)).toEqual({
    ticks: [15, 60, 75, 120, 135, 180],
    total: 180
  });
});
