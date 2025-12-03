import { Button } from './components';
import { Controls } from './layout';
import { Timer, Timeline } from './layout/timer';
import { calculateDuration, createControlsState, createPlayingState, createTimerState } from './utils';
import { useEffect } from 'react';

const App = () => {
  const controls = createControlsState();
  const playing = createPlayingState();
  const timer = createTimerState();

  const className = "react-hiit";
  const duration = {
    ticks: [2,4,6,8],
    total: 8
  };
//   const duration = calculateDuration(
//     Number(controls.cycles),
//     Number(controls.work),
//     Number(controls.ratio)
//   );

  useEffect(() => {
    if (playing.isPlaying) {
      const tick = () => {
        timer.setElapsed(prev => {
          const now = Date.now();
          const interval = now - timer.referenceTime;
          timer.setReferenceTime(now);

          return prev + interval;
        });
      }

      timer.timeout.current = setTimeout(tick, 10);
    }
  }, [playing.isPlaying, timer.elapsed]);

  useEffect(() => {
    if (Math.trunc(timer.elapsed / 1000) === duration.ticks[timer.lapCount.current]) {
      console.log(`threshold ${duration.ticks[timer.lapCount.current]}`);
      timer.lapCount.current++;
      timer.setIsWorkInterval(!timer.isWorkInterval);
    }
  }, [timer.elapsed, timer.lapCount.current]);

  return (
    <div className={className}>
      <Timer
        className={`${className}__timer`}
        duration={duration}
        {...timer}
      />
      <Timeline
        className={`${className}__timeline`}
        {...controls}
        duration={duration}
      />
      <div
        className={`${className}__buttons`}
      >
        <Button
          className={`${className}__button`}
          label='Stop'
          onClick={ (event: React.MouseEvent<HTMLButtonElement>) => {
            clearTimeout(timer.timeout.current);
            playing.setIsPlaying(false);
            timer.setElapsed(0);
            timer.setReferenceTime(Date.now());
            timer.setIsWorkInterval(true);
          }}
        />
        <Button
          className={`${className}__button`}
          label={playing.isPlaying ? 'Pause' : 'Play'}
          onClick={ (event: React.MouseEvent<HTMLButtonElement>) => {
            playing.setIsPlaying(!playing.isPlaying);

            if (!playing.isPlaying) {
              timer.setReferenceTime(Date.now());
              clearTimeout(timer.timeout.current);
            }
          }}
        />
      </div>
      <div className={`${className}__options`}>
        <p>{`${className}__options`}</p>
      </div>
      <Controls
        className={`${className}__controls`}
        {...controls}
      />
    </div>
  );
};

export default App;
