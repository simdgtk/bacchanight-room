// Style
import "./select.scss";
// test
export default function Select({
  label,
  path
}) {
  return (
    <>
      <button
        className="select"
      >
        <img src={path} width={40} alt={label} />
        <p className="label-select">{label}</p>
      </button>
    </>
  );
}
