// Style
import "./modalsalle.scss";

// Composant BackBtn
export default function ModaleSalle() {
  return (
   <div className="modale-salle">
    <span className="title-modal">Retrouve cette page sur</span>
    <img src="/public/img/popup/qrcode.svg"></img>
    <a href="https://bacchanight-room.vercel.app/les-salles">https://bacchanight-room.vercel.app/les-salles</a>
   </div>
  );
}