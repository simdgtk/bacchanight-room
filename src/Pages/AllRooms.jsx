import salleImage from "../assets/salle.png";
import "../styles/pages/_all-rooms.scss";

export default function AllRooms() {
  return (
    <div className="rooms">
      <h1>Le musée collaboratif : 231 salles déjà faites</h1>
      <div className="grid-container">
        <div className="grid-container__images">
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <div className="space">test</div>
          <img src={salleImage} alt="" />
          {/* <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <div className="space">test</div>
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <img src={salleImage} alt="" />
          <div className="space">test</div>
          <img src={salleImage} alt="" /> */}
        </div>
      </div>
    </div>
  );
}
