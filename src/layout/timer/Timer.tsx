import { type Duration, type TimerState } from '../../types/';
import { formatElapsed } from '../../utils';

type TimerProps = TimerState & {
  className: string;
  duration: Duration;
}

export const Timer = (props: TimerProps) => {
  const { className, duration, elapsed } = props;

  return (
    <div
      className={className}
    >
      <p className={`${className}__display`}>{`${formatElapsed(elapsed)}`}</p>
      { elapsed / 1000 >= duration.total && <p className={`${className}__done}`}>Done!</p> }
    </div>
  );
}
