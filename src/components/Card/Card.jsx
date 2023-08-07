import "./Card.css";
import cardImage from "../../assets/katie-zaferes.png";
import starImage from "../../assets/star.svg";

function Card() {
  return (
    <div className="card">
      <div className="card--image">
        <img src={cardImage} alt="Card Image" />
        <div className="card--badge">
          <span>Sold Out</span>
        </div>
      </div>
      <div className="card--text">
        <div className="card--text-rating">
          <img src={starImage} alt="Star Rating" className="card--star" />
          <span className="card--number">5.0</span>
          <span className="grey">(6)</span>
          <span className="grey"> &bull; </span>
          <span className="grey">USA</span>
        </div>
      </div>
      <div className="card--title">
        <p>Life lessons with Katie Zaferes</p>
      </div>
      <div className="card--price">
        <p><strong>From $136</strong> / person</p>
      </div>
    </div>
  );
};

export default Card;