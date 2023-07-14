import "./carContainer.css";

function CarContainer(props) {
  return (
    <div className="car-container">
      <div className="car-image-size">{props.image}</div>
      <div className="title">
        {props.brand} {props.name}
      </div>
      <div className="subtitle">{props.model}</div>
      <div className="amount">R$ {props.amount}</div>
      <div className="info">
        <div>{props.year}</div>
        <div>{props.kilometers}</div>
      </div>
    </div>
  );
}
export default CarContainer;
