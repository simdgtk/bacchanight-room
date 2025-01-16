// Style
import "./select.scss";

// Composant Select
export default function Select({ label, uiPath, onClick }) {
  return (
    <button className="select" onClick={onClick}>
      <img src={uiPath} width={40} alt={label} />
      <p className="label-select">{label}</p>
    </button>
  );
}
