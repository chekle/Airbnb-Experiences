import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import data from './data';

function App() {
  const [count, setCount] = useState(0)
  const cardData = data.map((item) => 
    <Card
      key={item.id}
      title={item.title}
      price={item.price}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      openSpots={item.openSpots}
    />
  );
  //console.log(data);

  return (
    <>
      <div>
        <Header />
        <Hero />
        <section className="cards-list">
          {cardData}
        </section>
      </div>
    </>
  )
}

export default App
