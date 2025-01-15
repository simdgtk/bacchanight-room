import salleImage from "../assets/salle.png";
import "../styles/pages/_all-rooms.scss";
import React, { useEffect, useState, useRef } from "react";
import Button from "../components/Button/Button";

export default function AllRooms() {
  const [arrayRooms, setArrayRooms] = useState([]);
  const space = useRef(9);
  const spaceAfter = useRef(4);

  useEffect(() => {
    if (window.innerWidth < 1220) {
      space.current = 5;
      spaceAfter.current = 2;
    }
    if (window.innerWidth < 920) {
      space.current = 3;
      spaceAfter.current = 1;
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

  useEffect(() => {
    const interval = setInterval(() => {
      console.clear();
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
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="rooms">
      <h1>
        Votre musée collaboratif :{" "}
        {`${arrayRooms.length} salle${arrayRooms.length > 1 ? "s" : ""}`} déjà
        faite{arrayRooms.length > 1 ? "s" : ""}
      </h1>
      <h3>
        Le musée collaboratif est fermé, voici un montage de l&apos;ensemble des
        salles réalisées par les visiteurs de la Bacchanight du 25 Mars 2025
      </h3>
      <div className="grid-container">
        <div className="grid-container__images">
          {/* Parcourir arrayRooms et afficher les images */}
          {[...arrayRooms].reverse().map((room, index) => (
            <React.Fragment key={index}>
              <div className="grid-container__images__img-container">
                <img
                  src={`http://localhost:3000/uploads/${room}`}
                  alt={`Salle ${index + 1}`}
                />
              </div>
              {index % space.current === spaceAfter.current && (
                <div className="space-sm"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="footer">
        <div className="links">
          <Button
            label={"Ajouter ma pièce"}
            onClick={() => (window.location.href = "/")}
            disabled
          />
          <a href="/mentions-legales">mentions légales</a>
        </div>
      </div>
    </div>
  );
}
