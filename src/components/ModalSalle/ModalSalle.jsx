// Style
import "./modalsalle.scss";

// Composant BackBtn
export default function ModaleSalle({ finished = false }) {
  return (
    <div className="modale-salle">
      <span className="title-modal">{finished ? "Virtu'aile - l'aile collaborative réalisée par les visiteurs de la Bacchanight du MUSBA le 25 mars 2025" : "Retrouvez cette page finie dès demain :"}</span>
      {!finished && (
        <>
          <img src="/public/img/popup/qrcode.svg" alt="QR Code" />
          <a href="https://bacchanight-room.vercel.app/les-salles">
            bacchanight-room.vercel.app/les-salles
          </a>
        </>
      )}
      {finished && <a href="/mentions-legales">Mentions légales</a>}
    </div>
  );
}
