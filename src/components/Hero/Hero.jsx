import './Hero.css';
import heroImage from "../../assets/hero.png";

function Hero(){
  return(
    <section className="hero">
      <img src={heroImage} alt="hero"/>
      <div className="text">
        <h1 className="hero--heading">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </section>
  );
}

export default Hero;