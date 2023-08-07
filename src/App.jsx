import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Hero />
        <Card
          img="katie-zaferes.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
      </div>
    </>
  )
}

export default App
