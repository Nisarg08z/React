import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value , setValue] = useState(0)
  return(
    <>
      <h1>
        value : {value}
      </h1>
      <button onClick={() => setValue(value + 1)}> + </button>
      <br></br>
      <button onClick={() => setValue(value - 1)}> - </button>
    </>
  )
}

export default App
