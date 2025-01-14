// Style
import "./popup.scss";

// Composant
import Button from "../Button/Button";
// test
export default function popup({
  title,
  text,
  button
}) {
  return (
    <>
      <div className="popup">
        <div className="popup-content">
          <div className="popup-left-container">
            <img src="../../../public/img/popup/start_img.svg" alt="" />
          </div>
          <div className="popup-right-container">
            <p className="popup-title">{title}</p>
            <p className="popup-text">{text}</p>
            <Button label={button} />
          </div>
        </div>
      </div>
    </>
  );
}
