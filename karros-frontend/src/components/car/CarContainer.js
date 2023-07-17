import "./carContainer.css";
import { useNavigate } from "react-router-dom";

function CarContainer(props) {
  const navigate = useNavigate();

  function gotoContactPage() {
    navigate("/contact");
  }

  return (
    <div className="car-container">
      <div className="car-image-size">
        <img
          max-width={"100%"}
          height={"200px"}
          src={`data:image;base64,${props.image}`}
          alt="car_image"
        />
      </div>
      <div className="title">
        {props.brand} {props.name}
      </div>
      <div className="subtitle">{props.model}</div>
      <div className="amount">R$ {props.amount}</div>
      <div className="info">
        <div>{props.year}</div>
        <div>{props.kilometers} KM</div>
      </div>
      <div className="overlay-button">
        <button onClick={gotoContactPage} className="button-contact">
          Tenho interesse
        </button>
      </div>
    </div>
  );
}
export default CarContainer;
