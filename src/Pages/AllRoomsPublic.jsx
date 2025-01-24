import "../styles/pages/_all-rooms.scss";
import React, { useEffect, useState, useRef } from "react";
import ModalSalle from "../components/ModalSalle/ModalSalle";

import room0 from "/assets/temporary-rooms/room0.png";
import room1 from "/assets/temporary-rooms/room1.png";
import room2 from "/assets/temporary-rooms/room2.png";
import room3 from "/assets/temporary-rooms/room3.png";
import room4 from "/assets/temporary-rooms/room4.png";
import room5 from "/assets/temporary-rooms/room5.png";
import room6 from "/assets/temporary-rooms/room6.png";
import room8 from "/assets/temporary-rooms/room8.png";
import room9 from "/assets/temporary-rooms/room9.png";
import room10 from "/assets/temporary-rooms/room10.png";
import room11 from "/assets/temporary-rooms/room11.png";

export default function AllRoomsPublic({ ended = false }) {
  const [arrayRooms, setArrayRooms] = useState([]);
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
  }, []);
  function fisherYatesShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  return (
    <div className="container no-scroll">
      <div className="cropped-container" ref={container}>
        <div className="rooms">
          <div className="grid-container">
            <div className="grid-container__images">
              {fisherYatesShuffle(extendedTempRooms).map((room, index) => (
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
                  {fisherYatesShuffle(extendedTempRooms).map((room, index) => (
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
                  {fisherYatesShuffle(extendedTempRooms).map((room, index) => (
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
                  {fisherYatesShuffle(extendedTempRooms).map((room, index) => (
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
                  {fisherYatesShuffle(extendedTempRooms).map((room, index) => (
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
                  {fisherYatesShuffle(extendedTempRooms).map((room, index) => (
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
                  {fisherYatesShuffle(extendedTempRooms).map((room, index) => (
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
          <div className="footer">
            <div className="links">
              <a href="/mentions-legales">Mentions légales</a>
            </div>
          </div>
      </div>
    </div>
  );
}
