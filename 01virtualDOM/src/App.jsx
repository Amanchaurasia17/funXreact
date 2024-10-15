import { useState } from 'react'

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
    <h2 className='bg-green-400 text-black text-4xl'>card via tailwind</h2>
<br />
<br />
<Card username= "Hitesh"     />
<br />
<Card username="AMAN"  btntext ="Know More!"/>
<br />
<Card username="Ravi"   btntext ="LinkedIin" />
<br />
<Card username="Vikram"   btntext ="LinkedIin" />

    </>
       
  )
}

export default App
