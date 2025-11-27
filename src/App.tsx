import { Controls } from './layout';
import { createControlsState } from './utils';

const App = () => {
  const controls = createControlsState();
  const className = "react-hiit";

  return (
    <div className={className}>
      <div className={`${className}__timer`}>
        <p>{`${className}__timer`}</p>
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
