import salleImage from "../assets/salle.png";
import "../styles/pages/_all-rooms.scss";
import React, { useEffect, useState, useRef } from "react";

export default function AllRooms() {
  const [arrayRooms, setArrayRooms] = useState([]); // Utilisation du state pour gérer les salles
  const space = useRef(9);
  const spaceAfter = useRef(4);

  useEffect(() => {
    // Adapter l'espacement en fonction de la largeur de la fenêtre
    if (window.innerWidth < 1220) {
      space.current = 3;
      spaceAfter.current = 2;
    }

    // Récupération des données depuis l'API
    fetch("http://localhost:3000/all/")
      .then((res) => res.json())
      .then((json) => {
        if (Array.isArray(json)) {
          setArrayRooms(json);
        } else {
          console.error("Les données reçues ne sont pas un tableau.");
        }
      })
      .catch((err) => console.error("Erreur lors du fetch :", err));
  }, []);

  return (
    <div className="rooms">
      <h1>Le musée collaboratif : 231 salles déjà faites</h1>
      <div className="grid-container">
        <div className="grid-container__images">
          {/* Parcourir arrayRooms et afficher les images */}
          {arrayRooms.map((room, index) => (
            <React.Fragment key={index}>
              <div className="grid-container__images__img-container">
                {/* `http://localhost:3000/uploads/${room}` */}
                <img
                  src={salleImage} // Générer le bon chemin pour chaque image
                  alt={`Salle ${index + 1}`}
                />
              </div>
              {/* Ajouter un espace après certains éléments */}
              {index % space.current === spaceAfter.current && (
                <div className="space-sm"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
