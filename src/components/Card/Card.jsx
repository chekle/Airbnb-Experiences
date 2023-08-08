import "./Card.css";
//import cardImage from "../../assets/katie-zaferes.png";
import starImage from "../../assets/star.svg";

function Card(props) {
  //console.log(props.openSpots);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "Sold Out";
  } else if(props.location === "Online") {
    badgeText = "Online";
  }
  return (
    <div className="card">
      <div className="card--image">
        <img src={`../src/assets/${props.img}`} alt="Card Image" />
        {badgeText && <div className="card--badge">
          <span>{badgeText}</span>
        </div>}
      </div>
      <div className="card--text">
        <div className="card--text-rating">
          <img src={starImage} alt="Star Rating" className="card--star" />
          <span className="card--number">{props.rating}</span>
          <span className="grey">({props.reviewCount})</span>
          <span className="grey"> &bull; </span>
          <span className="grey">{props.location}</span>
        </div>
      </div>
      <div className="card--title">
        <p>{props.title}</p>
      </div>
      <div className="card--price">
        <p><strong>From ${props.price}</strong> / person</p>
      </div>
    </div>
  );
};

export default Card;