import "./Button.css";

const Button = ({ person = "friend", children, className = "", ...props }) => {
  const role = String(person).toLowerCase();
  const cls = ["btn", `btn--${role}`, className].filter(Boolean).join(" ");

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

export default Button;
