import { useState } from 'react'
import './App.css'

function App() {

  const colors = ['RED', 'GREEN', 'BLUE', 'YELLOW', 'PURPLE', 'ORANGE']

  const [backgroundColor, setBackgroundColor] = useState(colors[0])

  const changeColor = (color) => {
    setBackgroundColor(color);  
  };
  
  return (
    <>
     {colors.map((color,) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => changeColor(color)}
          // className={color === backgroundColor ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
      <div style={{ backgroundColor: backgroundColor }}>
        <h1>Selected Color: {backgroundColor}</h1>
      </div>
    </>
  )
}

export default App
