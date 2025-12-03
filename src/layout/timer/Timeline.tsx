import { type ControlsState, type Duration } from '../../types';

type TimelineProps = ControlsState & {
  className: string;
  duration: Duration;
}

export const Timeline = (props: TimelineProps) => {
  const { className, cycles, work, ratio, duration } = props;
  console.log(cycles, work, ratio, duration );

  return (
    <div
      className={className}
    >
      { Array.from({ length: duration.ticks.length }).map((_, i) => {
        const length = `1-${ratio}`;
        const status = i % 2 === 0 ? 'work' : 'rest';
        const completeClass = `block ${length} ${status}`;

        return (
          <div
            className={completeClass}
            style={{
              borderColor: 'white',
              borderStyle: 'solid',
              borderWidth: '1px',
              minHeight: '100px',
            }}
          >
            <p>{completeClass}</p>
          </div>
        );
      })}
    </div>
  );
}
