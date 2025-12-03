import { type ControlsState, type Duration } from '../../types';

type TimelineProps = ControlsState & {
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
  const style = {
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRightWidth: '0',
    minHeight: '20px',
  };

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
        ...style,
        display: 'flex',
        width: `${width}%`,
      }}
    >
      <div
        style={{
          ...style,
          flex: `0 0 ${innerWidth}%`,
        }}
      />
      <div
        style={{
          ...style,
          flex: '1 0 auto',
        }}
      />
    </div>
  );
}

export const Timeline = (props: TimelineProps) => {
  const { className, cycles, ratio, duration } = props;

  return (
    <div
      className={className}
      style={{
        height: '20px',
      }}
    >
      <div
        className={`${className}__track`}
        style={{
          position: 'relative',
        }}
      >
        <div className={`${className}__progress`} style={{ position: 'absolute', top: '0', left: '0', height: '24px', width: '0%', backgroundColor: 'white' }} />
        <div className={`${className}__ticks`} style={{ position: 'absolute', display: 'flex', width: '100%', borderRight: '1px solid white' }}>
          { Array.from({ length: Number(cycles) }).map((_, i) => (
            <Block key={i} className={`${className}__block`} width={100 / Number(ratio)} ratio={Number(ratio)} />
          ))}
        </div>
      </div>
    </div>
  );
}
