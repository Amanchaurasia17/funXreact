import { useState  ,  useCallback, useEffect } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword] = useState("")

  const PasswordGenerator = useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstvuwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+=-[]{}"

    for(let i=1; i <= length; i++){
      let char = Math.floor(Math.random()*str.length +1)
      pass +=str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])


useEffect(()=>{PasswordGenerator()},[length, numberAllowed, charAllowed, PasswordGenerator])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-3 my-7  text-orange-500 bg-gray-800' >
      <h1 className='text-white text-center -my-2'>Password Generator</h1>
<div className='flex shadow rounded-lg overflow-hidden mb-4'>
  <input type="text"
  value={password} 
  className='outline-none w-full py-2 px-8 my-5 rounded-lg'
  placeholder='password' 
  readOnly/>
  <button className='outline-none bg-blue-700 text-white px-4 shrink-0 w-18 h-12 my-5 rounded-lg'>Copy</button>
</div>

<div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1' >
    <input type="range"
    min={6}
    max={50}
    value={length}
    className='cursor-pointer'
    onChange={(e) => {setLength(e.target.value)}}
    />
    <label htmlFor="">Length: {length}</label>
  </div>
  <div className='flex items-center gap-x-1'>
  <input type="checkbox"
    defaultChecked={numberAllowed}
    id='numberInput'
    onChange={() => {setNumberAllowed((prev)=> !prev);

    }}
    />
    <label htmlFor="numberInput">Number</label>    

  </div>
  <div className='flex items-center gap-x-1'>
  <input type="checkbox"
    defaultChecked={charAllowed}
    id='numberChar'
    onChange={() => {setCharAllowed((prev)=> !prev);

    }}
    />
    <label htmlFor="numberChar">Characters</label>    

  </div>
</div>
      </div>
    </>
  )
}


export default App
