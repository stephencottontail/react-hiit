import { Select } from '../components';
import { createControlsState } from '../utils';

type ControlsProps = ReturnType<typeof createControlsState> & {
  className: string;
};

export const Controls = (props: ControlsProps) => {
  const { className, cycles, setCycles, work, setWork, ratio, setRatio } = props;
  );
};
