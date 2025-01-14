// Style
import "./button.scss";
// test
export default function Button({
  label
}) {
  return (
    <>
      <button className="button" >
      {label}
      </button>
    </>
  );
}
