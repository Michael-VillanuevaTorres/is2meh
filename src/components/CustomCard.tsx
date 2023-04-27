import Bug from "./Bug";
import "./CustomCard.css";
function CustomCard(props: { bug: Bug }) {
  let tittle = props.bug.titulo;
  return (
    <div className="scroll-cards__item" aria-label="Wie - 1">
      <div className="card-header"></div>
      <div className="card-body">
        <h2 className="bug-state">{props.bug.estado}</h2>
        <h2>{props.bug.titulo}</h2>
        <h1 className="space-taker"></h1>
        <hr className="tittle-separator"></hr>
        <p>{props.bug.cuerpo}</p>
        <div className="text-right">
          <button className="btn btn-dark btn-inspect">Inspeccionar bug</button>
        </div>
      </div>
    </div>
  );
}

//carrusel
export default CustomCard;
