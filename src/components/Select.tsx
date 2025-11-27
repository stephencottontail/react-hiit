type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  className: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: Array<React.OptionHTMLAttributes<HTMLOptionElement>>;
  value: string;
};

const Option = (props: React.OptionHTMLAttributes<HTMLOptionElement>) => {
  const { value, label } = props;

  return (
    <option
      value={value}
    >
      {label}
    </option>
  );
};

export const Select = (props: SelectProps) => {
  const { className, onChange, options, value, ...rest } = props;

  return (
    <select
      className={className}
      onChange={onChange}
      value={value}
      {...rest}
    >
      {options && options.map((el, i) => (
        <Option
          value={el.value}
          label={el.label}
          key={`${el.label}-${i}`}
        />
      ))}
    </select>
  );
};
