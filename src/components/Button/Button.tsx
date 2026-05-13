type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
};

function Button({
  text,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant}`}
    >
      {text}
    </button>
  );
}

export default Button;