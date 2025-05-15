// Style
import "./modalsalle.scss";

// Composant BackBtn
export default function ModaleSalle({ finished = true, started = false }) {
  return (
    <div className="modale-salle">
      <span className="title-modal">
        Virtu'aile - la fresque collaborative réalisée par les visiteurs de la Bacchanight du MUSBA le 25 mars 2025
        <a href="/">Retourner à l&apos;expérience 3D</a>
      </span>
      {<a href="/mentions-legales" className="legals">Mentions légales et crédits</a>}
    </div>
  );
}
