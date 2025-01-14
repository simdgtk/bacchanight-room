// Style
import "./color.scss";
// test
export default function Color({
  label,
  path,
  whichSurface,
  color,
  changeColor,
}) {
  return (
    <>
      <button
        className="choice"
        onClick={() => {
          changeColor(color, whichSurface);
        }}
      >
        <img src={path} width={40} alt={label} />
        <p className="label-choice">{label}</p>
      </button>
    </>
  );
}
