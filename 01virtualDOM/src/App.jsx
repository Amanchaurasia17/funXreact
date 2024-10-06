import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: "Hitesh",
    age: 21
  }

  return (
    <>
    <h2 className='bg-green-400 text-black text-4xl'>Tailwind test!!!</h2>
<br />
<br />
<Card username= "Hitesh"   btntext ="Instagram"  />
<br />
<Card username="AMAN"  btntext ="Know More!"/>
<br />
<Card username="Ravi"   btntext ="LinkedIin" />

    </>
       
  )
}

export default App
