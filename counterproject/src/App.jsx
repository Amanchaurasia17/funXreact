import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter = 5;

  const addValue = ()=>{
  
   counter = counter + 1;
   console.log("clicked", counter);
  }

  return (
    <>
     <h1>Hello counter project </h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br />
     <button>Remove value</button>
    </>
  )
}

export default App
