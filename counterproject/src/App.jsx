import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


 const [counter, letCounter] =  useState(10)




  // let counter = 5;

  const addValue = ()=>{
  // counter = counter + 1;
   console.log("clicked", counter);
   letCounter(counter+1);
  }

  const removeValue =()=>{
    letCounter(counter -1);
  }

  return (
    <>
     <h1>Hello counter project </h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br />
     <button
     onClick={removeValue}
     
     >Remove value</button>
    </>
  )
}

export default App
