import "../styles/pages/_all-rooms.scss";
import React, { useEffect, useState, useRef } from "react";
import Button from "../components/Button/Button";

export default function AllRooms({ ended = false }) {
  const [arrayRooms, setArrayRooms] = useState([]);
  const previousArrayRooms = useRef([]);
  const space = useRef(9);
  const spaceAfter = useRef(4);
  const [getServerData, setGetServerData] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    // if (window.innerWidth < 1220) {
    //   space.current = 5;
    //   spaceAfter.current = 2;
    // }
    if (window.innerWidth < 920) {
      setIsSmallScreen(true);
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
      .catch((err) => {
        console.error("Erreur lors du fetch :", err);
        setGetServerData(false);
      });
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

    // crop le contenu de la page

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
          {!getServerData && (
            <h3>
              Le musée collaboratif est maintenant fermé, voici un montage de
              l&apos;ensemble des salles réalisées par les visiteurs de la
              Bacchanight du 25 Mars 2025
            </h3>
          )}
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
          {isSmallScreen && (
            <>
              <div className="grid-container--absolute absolute--small--left">
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
              <div className="grid-container--absolute absolute--small--right">
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
            </>
          )}
          {!isSmallScreen && (
            <>
              <div className="grid-container--absolute absolute--right">
                <div className="grid-container__images">
                  {/* Parcourir arrayRooms et afficher les images */}
                  {fisherYatesShuffle(
                    [...arrayRooms].map((room, index) => room)
                  ).map((room, index) => (
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
              <div className="grid-container--absolute absolute--left">
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
              <div className="grid-container--absolute absolute--top-left">
                <div className="grid-container__images">
                  {/* Parcourir arrayRooms et afficher les images */}
                  {[...arrayRooms]
                    .reverse()
                    .slice(0, 12)
                    .map((room, index) => (
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
              <div className="grid-container--absolute absolute--top-right">
                <div className="grid-container__images">
                  {/* Parcourir arrayRooms et afficher les images */}
                  {[...arrayRooms]
                    .reverse()
                    .slice(0, 12)
                    .map((room, index) => (
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
            </>
          )}
        </div>
        {ended && (
          <div className="footer">
            <div className="links">
              <a href="/mentions-legales">Mentions légales</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
