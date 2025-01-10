// Style
import "./backbtn.scss";
// test
export default function BackBtn({
  path
}) {
  return (
    <>
      <a href={path} className="backbtn">
        <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.375 2.25L1.625 12L11.375 21.75" stroke="#6274FB" stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      </a>
    </>
  );
}
