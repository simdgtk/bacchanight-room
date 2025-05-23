import "../styles/pages/_all-rooms.scss";
import React, { useEffect, useState, useRef } from "react";
import ModalSalle from "../components/ModalSalle/ModalSalle";

export default function AllRoomsPublic({ ended = false }) {
  const [arrayRooms, setArrayRooms] = useState([]);
  const space = useRef(9);
  const spaceAfter = useRef(4);
  const [getServerData, setGetServerData] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const container = useRef(null);

  // TOOD, changer pour /src/images/*.webp
  const images = import.meta.glob("/src/images/*.webp", {
    eager: true,
  });
  const tempRooms = Object.values(images).map((module) => module.default);

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
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  function fisherYatesShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  return (
    <div className="container">
      <div className="" ref={container}>
        <div className="rooms">
          <div className="grid-container">
            <div className="grid-container__images">
              {tempRooms.map((room, index) => (
                <React.Fragment key={index}>
                  <div className="grid-container__images__img-container">
                    <img src={room} alt={`Salle ${index + 1}`} loading="lazy" />
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
                  {tempRooms.map((room, index) => (
                    <React.Fragment key={index}>
                      <div className="grid-container__images__img-container">
                        <img
                          src={room}
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
                  {tempRooms.map((room, index) => (
                    <React.Fragment key={index}>
                      <div className="grid-container__images__img-container">
                        <img
                          src={room}
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
                  {tempRooms.map((room, index) => (
                    <React.Fragment key={index}>
                      <div className="grid-container__images__img-container">
                        <img
                          src={room}
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
                  {tempRooms.map((room, index) => (
                    <React.Fragment key={index}>
                      <div className="grid-container__images__img-container">
                        <img
                          src={room}
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
                  {tempRooms.map((room, index) => (
                    <React.Fragment key={index}>
                      <div className="grid-container__images__img-container">
                        <img
                          src={room}
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
                  {tempRooms.map((room, index) => (
                    <React.Fragment key={index}>
                      <div className="grid-container__images__img-container">
                        <img
                          src={room}
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
        <ModalSalle finished={false} started={false} />
      </div>
    </div>
  );
}
