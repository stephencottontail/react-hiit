type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = (props: ButtonProps) => {
  const { label, className, onClick, ...rest } = props;

  return (
    <button
      className={className}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};
