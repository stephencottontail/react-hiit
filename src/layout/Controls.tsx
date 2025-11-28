import { Button, Select } from '../components';
import { createControlsState } from '../utils';

type ControlsProps = ReturnType<typeof createControlsState> & {
  className: string;
};

export const Controls = (props: ControlsProps) => {
  const {
    className,
    cycles,
    setCycles,
    work,
    setWork,
    ratio,
    setRatio,
    isPlaying,
    setIsPlaying,
  } = props;

  return (
    <div
      className={className}
    >
      <label>
        <span>Cycles</span>
        <Select
          className={`${className}__select`}
          value={cycles}
          onChange={ (event: React.ChangeEvent<HTMLSelectElement>) => {
            console.log(event.target.value);
            setCycles(event.target.value);
          }}
          options={[
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
          ]}
        />
      </label>
      <label>
        <span>Work Time (in seconds)</span>
        <Select
          className={`${className}__select`}
          value={work}
          onChange={ (event: React.ChangeEvent<HTMLSelectElement>) => {
            setWork(event.target.value);
          }}
          options={[
            { label: '10', value: '10' },
            { label: '15', value: '15' },
            { label: '20', value: '20' },
            { label: '25', value: '25' },
          ]}
        />
      </label>
      <label>
        <span>Work-to-Recovery Ratio</span>
        <Select
          className={`${className}__select`}
          value={ratio}
          onChange={ (event: React.ChangeEvent<HTMLSelectElement>) => {
            setRatio(event.target.value);
          }}
          options={[
            { label: '3', value: '3' },
            { label: '2', value: '2' },
            { label: '1', value: '1' },
          ]}
        />
      </label>
      <div
        className={`${className}__buttons`}
      >
         <Button
          className={`${className}__button`}
          label='Stop'
          onClick={ (event: React.MouseEvent<HTMLButtonElement>) => {
            setIsPlaying(false);
          }}
        />
        <Button
          className={`${className}__button`}
          label={isPlaying ? 'Pause' : 'Play'}
          onClick={ (event: React.MouseEvent<HTMLButtonElement>) => {
            setIsPlaying(!isPlaying);
          }}
        />
      </div>
    </div>
  );
};
