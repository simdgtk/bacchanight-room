// Style
import "./select.scss";

// Composant Select
export default function Select({ label, path, onClick }) {
  return (
    <button className="select" onClick={onClick}>
      <img src={path} width={40} alt={label} />
      <p className="label-select">{label}</p>
    </button>
  );
}
