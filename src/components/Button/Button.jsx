// Style
import "./button.scss";
export default function BackBtn({ onClick, label, disabled = false }) {
  return (
    <>
      <button
        className={`button ${disabled ? "button--disabled" : ""}`}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
}
