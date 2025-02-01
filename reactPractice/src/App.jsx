import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);

  const increessCount = () => {
    setCount(count +1);
  };

  const decreessCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>React Practice</h1>
      <h2>useState</h2>

      <button onClick={increessCount}>+</button>
      <span>{count}</span>
      <button onClick={decreessCount}>-</button>
    </>
  )
}

export default App
