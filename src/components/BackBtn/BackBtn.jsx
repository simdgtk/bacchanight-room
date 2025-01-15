// Style
import "./backbtn.scss";

// Composant BackBtn
export default function BackBtn({ onClick }) {
  return (
    <button className="backbtn" onClick={onClick}>
     <svg width="44" height="23" viewBox="0 0 44 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5389 22.0608C10.5389 22.0608 10.8555 21.7439 11.2461 21.3535C11.6365 20.9629 11.9533 20.6464 11.9533 20.6464L3.66053 12.3536H43.2461C43.2461 12.3536 43.25 11.9057 43.25 11.3535C43.25 10.8013 43.2461 10.3536 43.2461 10.3536H3.66053L11.9533 2.06068C11.9533 2.06068 11.6365 1.74319 11.2461 1.35267C10.8555 0.962128 10.5389 0.646484 10.5389 0.646484L0.246128 11.3535L10.5389 22.0608Z" fill="black"/>
      </svg>
    </button>
  );
}