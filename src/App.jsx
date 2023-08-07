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
        <Card />
      </div>
    </>
  )
}

export default App
