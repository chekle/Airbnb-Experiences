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
    />
  );
  //console.log(Data);

  return (
    <>
      <div>
        <Header />
        <Hero />
        {cardData}
      </div>
    </>
  )
}

export default App
