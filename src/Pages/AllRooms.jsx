import "../styles/pages/_all-rooms.scss";
import React, { useEffect, useState, useRef } from "react";
import ModalSalle from "../components/ModalSalle/ModalSalle";

import room0 from "/src/images/temporary-rooms/room0.webp";
import room1 from "/src/images/temporary-rooms/room1.webp";
import room2 from "/src/images/temporary-rooms/room2.webp";
import room3 from "/src/images/temporary-rooms/room3.webp";
import room4 from "/src/images/temporary-rooms/room4.webp";
import room5 from "/src/images/temporary-rooms/room5.webp";
import room6 from "/src/images/temporary-rooms/room6.webp";
import room8 from "/src/images/temporary-rooms/room8.webp";
import room9 from "/src/images/temporary-rooms/room9.webp";
import room10 from "/src/images/temporary-rooms/room10.webp";
import room11 from "/src/images/temporary-rooms/room11.webp";

export default function AllRooms({ ended = false }) {
  const [arrayRooms, setArrayRooms] = useState([]);
  const previousArrayRooms = useRef([]);
  const space = useRef(9);
  const spaceAfter = useRef(4);
  const [getServerData, setGetServerData] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const container = useRef(null);
  const tempRooms = [
    room0,
    room1,
    room2,
    room3,
    room4,
    room5,
    room6,
    room8,
    room9,
    room10,
    room11,
  ];
  const extendedTempRooms = Array.from(
    { length: tempRooms.length * 4 },
    (_, i) => {
      return tempRooms[i % tempRooms.length];
    }
  );

  useEffect(() => {
    if (window.innerWidth < 920) {
      setIsSmallScreen(true);
      space.current = 3;
      spaceAfter.current = 1;
    }

    fetch("https://images-bacchanight.vercel.app/images/room1.webp")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

    // Récupération des données depuis l'API
    fetch("http://localhost:3000/all/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur de réponse du serveur");
        }
        return res.json();
      })
      .then((json) => {
        if (Array.isArray(json)) {
          setArrayRooms(json);
        } else {
          console.error("Les données reçues ne sont pas un tableau.");
          setGetServerData(false);
          setArrayRooms(tempRooms); // Fallback aux images locales
        }
      })
      .catch((err) => {
        console.error("Erreur lors du fetch :", err);
        setGetServerData(false);
        setArrayRooms(tempRooms); // Fallback aux images locales
        container.current.style.height = "100vh";
        container.current.style.overflow = "hidden";
      });
  }, []);

  
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 920) {
        setIsSmallScreen(true);
        space.current = 3;
        spaceAfter.current = 1;
      } else {
        setIsSmallScreen(false);
        space.current = 9;
        spaceAfter.current = 4;
      }
      fetch("http://localhost:3000/all/")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Erreur de réponse du serveur");
          }
          return res.json();
        })
        .then((json) => {
          if (Array.isArray(json)) {
            setArrayRooms(json);
          } else {
            setGetServerData(false);
            setArrayRooms(tempRooms);
          }
        })
        .catch(() => {
          setGetServerData(false);
          setArrayRooms(tempRooms);
        });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:3000/all/")
        .then((res) => res.json())
        .then((json) => {
          if (Array.isArray(json)) {
            setArrayRooms(json);
          } else {
            console.error("Les données reçues ne sont pas un tableau.");
          }
        })
        .catch((err) => {
          console.error("Erreur lors du fetch :", err), setArrayRooms(null);
        });
    }, 3000);

    //   // crop le contenu de la page

    return () => clearInterval(interval);
  }, []);
  // TODO
  // useEffect(() => {
  //   console.clear();
  //   fetch("http://localhost:3000/all/")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       if (Array.isArray(json)) {
  //         setArrayRooms(json);
  //       } else {
  //         console.error("Les données reçues ne sont pas un tableau.");
  //       }
  //     })
  //     .catch((err) => console.error("Erreur lors du fetch :", err));
  // }, []);

  function fisherYatesShuffle(arr) {
    // TODO
    // for (let i = arr.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i + 1));
    //   [arr[i], arr[j]] = [arr[j], arr[i]];
    // }
    return arr;
  }
  return (
    <div className="container">
      <div className="cropped-container" ref={container}>
        <div className="rooms">
          {/* {!getServerData && (
            <h3>
              Le musée collaboratif est maintenant fermé, voici un montage de
              l&apos;ensemble des salles réalisées par les visiteurs de la
              Bacchanight du 25 Mars 2025
            </h3>
          )} */}
          <div className="grid-container">
            <div className="grid-container__images">
              {(arrayRooms !== null
                ? [...arrayRooms].reverse()
                : extendedTempRooms
              ).map((room, index) => (
                <React.Fragment key={index}>
                  <div className="grid-container__images__img-container">
                    <img
                      src={
                        arrayRooms !== null && getServerData
                          ? `http://localhost:3000/uploads/${room}` // Données du serveur
                          : room // Images locales
                      }
                      alt={`Salle ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                  {index % space.current === spaceAfter.current && (
                    <div className="space-sm"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          {isSmallScreen && (
            <>
              <div className="grid-container--absolute absolute--small--left">
                <div className="grid-container__images">
                  {(arrayRooms !== null
                    ? [...arrayRooms].reverse()
                    : extendedTempRooms
                  ).map((room, index) => (
                    <React.Fragment key={index}>
                      <div className="grid-container__images__img-container">
                        <img
                          src={
                            arrayRooms !== null && getServerData
                              ? `http://localhost:3000/uploads/${room}` // Données du serveur
                              : room // Images locales
                          }
                          alt={`Salle ${index + 1}`}
                          loading="lazy"
                        />
                      </div>
                      {index % space.current === spaceAfter.current && (
                        <div className="space-sm"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="grid-container--absolute absolute--small--right">
                <div className="grid-container__images">
                  {(arrayRooms !== null
                    ? [...arrayRooms].reverse()
                    : extendedTempRooms
                  ).map((room, index) => (
                    <React.Fragment key={index}>
                      <div className="grid-container__images__img-container">
                        <img
                          src={
                            arrayRooms !== null && getServerData
                              ? `http://localhost:3000/uploads/${room}` // Données du serveur
                              : room // Images locales
                          }
                          alt={`Salle ${index + 1}`}
                          loading="lazy"
                        />
                      </div>
                      {index % space.current === spaceAfter.current && (
                        <div className="space-sm"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </>
          )}
          {!isSmallScreen && (
            <>
              <div className="grid-container--absolute absolute--right">
                <div className="grid-container__images">
                  {(arrayRooms !== null
                    ? [...arrayRooms]
                    : extendedTempRooms
                  ).map((room, index) => (
                    <React.Fragment key={index}>
                      <div className="grid-container__images__img-container">
                        <img
                          src={
                            arrayRooms !== null && getServerData
                              ? `http://localhost:3000/uploads/${room}` // Données du serveur
                              : room // Images locales
                          }
                          alt={`Salle ${index + 1}`}
                          loading="lazy"
                        />
                      </div>
                      {index % space.current === spaceAfter.current && (
                        <div className="space-sm"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="grid-container--absolute absolute--left">
                <div className="grid-container__images">
                  {(arrayRooms !== null
                    ? [...arrayRooms].reverse()
                    : extendedTempRooms
                  ).map((room, index) => (
                    <React.Fragment key={index}>
                      <div className="grid-container__images__img-container">
                        <img
                          src={
                            arrayRooms !== null && getServerData
                              ? `http://localhost:3000/uploads/${room}` // Données du serveur
                              : room // Images locales
                          }
                          alt={`Salle ${index + 1}`}
                          loading="lazy"
                        />
                      </div>
                      {index % space.current === spaceAfter.current && (
                        <div className="space-sm"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="grid-container--absolute absolute--top-left">
                <div className="grid-container__images">
                  {(arrayRooms !== null
                    ? [...arrayRooms].reverse()
                    : extendedTempRooms
                  ).map((room, index) => (
                    <React.Fragment key={index}>
                      <div className="grid-container__images__img-container">
                        <img
                          src={
                            arrayRooms !== null && getServerData
                              ? `http://localhost:3000/uploads/${room}` // Données du serveur
                              : room // Images locales
                          }
                          alt={`Salle ${index + 1}`}
                          loading="lazy"
                        />
                      </div>
                      {index % space.current === spaceAfter.current && (
                        <div className="space-sm"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="grid-container--absolute absolute--top-right">
                <div className="grid-container__images">
                  {(arrayRooms !== null
                    ? [...arrayRooms].reverse()
                    : extendedTempRooms
                  ).map((room, index) => (
                    <React.Fragment key={index}>
                      <div className="grid-container__images__img-container">
                        <img
                          src={
                            arrayRooms !== null && getServerData
                              ? `http://localhost:3000/uploads/${room}` // Données du serveur
                              : room // Images locales
                          }
                          alt={`Salle ${index + 1}`}
                          loading="lazy"
                        />
                      </div>
                      {index % space.current === spaceAfter.current && (
                        <div className="space-sm"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <ModalSalle />
        {ended && (
          <div className="footer">
            <div className="links">
              <a href="/mentions-legales">Mentions légales et crédits</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
