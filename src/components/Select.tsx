type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  className: string;
  onChange: React.ChangeEvent<HTMLSelectElement>;
};

const Option = (props: React.OptionHTMLAttributes<HTMLOptionElement>) => {
  const { value, label, selected } = props;

  return (
    <option
      value={value}
    >
      {label}
    </option>
  );
};

export const Select = (props: SelectProps) => {
  const { className, onChange, options, ...rest } = props;

  return (
    <select
      className={className}
      onChange={onChange}
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
