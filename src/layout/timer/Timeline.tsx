import { type ControlsState, type TimerState, type Duration } from '../../types';

type TimelineProps = ControlsState & TimerState & {
  className: string;
  duration: Duration;
}

type BlockProps = {
  className: string;
  width: number;
  ratio: number;
};

const Block = (props: BlockProps) => {
  const { className, width, ratio } = props;
  let innerWidth: number | undefined;
  switch(ratio) {
    case 3:
      innerWidth = 25;
      break;

    case 2:
      innerWidth = 33;
      break;

    case 1:
      innerWidth = 50;
      break;
  }

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        inlineSize: `${width}%`,
      }}
    >
      <div className={className} style={{ flex: `0 0 ${innerWidth}%` }} />
      <div className={className} style={{ flex: '1 0 auto' }} />
    </div>
  );
}

export const Timeline = (props: TimelineProps) => {
  const { className, cycles, ratio, duration, elapsed, isWorkInterval } = props;
  const progress = (elapsed / 1000) / duration.total * 100;

  return (
    <div
      className={className}
    >
      <div
        className={`${className}__track`}
      >
        <div className={`${className}__progress ${isWorkInterval ? 'work' : 'rest'}`} style={{ inlineSize: `${progress}%` }} />
        <div className={`${className}__ticks`}>
          { Array.from({ length: Number(cycles) }).map((_, i) => (
            <Block key={i} className={`${className}__block`} width={100 / Number(ratio)} ratio={Number(ratio)} />
          ))}
        </div>
      </div>
    </div>
  );
}
