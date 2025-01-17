// Style
import "./select.scss";

// Composant Select
export default function Select({ label, uiPath, onClick }) {
  return (
    <button className="select" onClick={onClick}>
  
      <p className="label-select">{label}</p>
    </button>
  );
}
