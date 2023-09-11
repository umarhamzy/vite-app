import Alert from "./Alert";

interface ButtonProps {
  children: string;
  color?: "primary" | "success" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "success" }: ButtonProps) => {
  return (
    <>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
