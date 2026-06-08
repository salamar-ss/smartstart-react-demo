type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

function Button({ text, variant = "primary", onClick }: ButtonProps) {
  return (
    <button className={`button button--${variant}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;