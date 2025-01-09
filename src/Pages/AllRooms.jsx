import salleImage from "../assets/salle.png";
import "../styles/pages/_all-rooms.scss";
import React from "react";
import { useEffect, useRef } from "react";

export default function AllRooms() {
  const arrayRooms = [...Array(231).keys()];
  const space = useRef(9);
  const spaceAfter = useRef(4);
  useEffect(() => {
    if (window.innerWidth < 1220) {
      space.current = 3;
      spaceAfter.current = 2;
    }
  });
  return (
    <div className="rooms">
      <h1>Le musée collaboratif : 231 salles déjà faites</h1>
      <div className="grid-container">
        <div className="grid-container__images">
          {arrayRooms.map((index) => (
            <React.Fragment key={index}>
              <img src={salleImage} alt="" />
              {index % space.current === spaceAfter.current && (
                <div className="space-sm"></div> // Ajoute un espace après chaque 5e élément d'un groupe de 9
              )}
            </React.Fragment>
          ))}
          {/* <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <div className="space-sm">test</div>
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <div className="space-sm">test</div>
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <div className="space-sm">test</div>
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <div className="space-sm">test</div>
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" /> */}
          {/* {[...Array(20)].map((_, index) => (
            index <= 5 ? <img src={salleImage} alt="" key={index} /> : null
          ))} */}
          {/* <div className="space-sm">test</div> */}
          {/* <img src={salleImage} alt="" /> */}
          {/* <div className="space-sm">test</div> */}
        </div>
      </div>
    </div>
  );
}
