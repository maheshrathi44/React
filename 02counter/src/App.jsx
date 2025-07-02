import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  // HOOK STATES TO DISPLAY ON UI UPDATED VALUE 
  const [counter,setCounter]=useState(15) 

  // let counter=15

  const addValue = () =>{
    // counter++;
    if(counter<20){
    setCounter(counter+1);
    setCounter(prevcounter=>prevcounter+1)
    }
    // console.log("clicked",counter)
  }

  const decreaseValue = () =>{
    if(counter>0){
    setCounter(counter-1);
    }
    // console.log("clicked",counter)
  }


  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={()=>setCounter(counter+1)}>Add Value{counter}</button><br /> 

      <button onClick={decreaseValue}>Decrease Value{counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
