// Style
import "./modalsalle.scss";

// Composant BackBtn
export default function ModaleSalle({ finished = false, started = true }) {
  return (
    <div className="modale-salle">
      <span className="title-modal">
        {finished
          ? "Virtu'aile - l'aile collaborative réalisée par les visiteurs de la Bacchanight du MUSBA le 25 mars 2025"
          : started
          ? "Retrouvez la fresque finie dès demain :"
          : "Rendez-vous à la Bacchanight du MUSBA le 25 mars 2025 et participez à la création de l'aile collaborative"}
      </span>
      {!finished && (
        <>
          <img src="/img/popup/qrcode.svg" alt="QR Code" />
          <a href="https://bacchanight-room.vercel.app/les-salles">
            bacchanight-room.vercel.app/les-salles
          </a>
        </>
      )}
      {finished && <a href="/mentions-legales">Mentions légales</a>}
    </div>
  );
}
