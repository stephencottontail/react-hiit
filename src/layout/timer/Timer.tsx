import { type Duration, type TimerState } from '../../types/';
import { formatElapsed } from '../../utils';

type TimerProps = TimerState & {
  className: string;
  duration: Duration;
}

export const Timer = (props: TimerProps) => {
  const { className, duration, elapsed, lapCount, isWorkInterval } = props;

  return (
    <div
      className={className}
    >
      <p className={`${className}__display`}>{`${formatElapsed(elapsed)}/${duration.total}`}</p>
      { lapCount.current === duration.ticks.length && <p>All Done!</p> }
      <p>{isWorkInterval ? 'Work' : 'Rest'}</p>
      <Timeline
        className={`${className}__timeline`}
      />
    </div>
  );
}
