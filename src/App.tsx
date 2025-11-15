const App = () => {
  const className = "react-hiit";

  return (
    <div className={className}>
      <div className={`${className}__timer`}>
        <p>{`${className}__timer`}</p>
      </div>
      <div className={`${className}__options`}>
        <p>{`${className}__options`}</p>
      </div>
      <div className={`${className}__controls`}>
        <p>{`${className}__controls`}</p>
      </div>
    </div>
  );
};

export default App;
