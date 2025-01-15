// Style
import "./button.scss";
export default function BackBtn({ onClick, label }) {
  return (
    <>
      <button className="button" onClick={onClick}>{label}</button>
    </>
  );
}
