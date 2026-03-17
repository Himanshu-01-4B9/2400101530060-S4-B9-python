import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo1 from './Component/Demo1'
import Demo2 from './Component/Demo2'

function App() {
  function fun()
  {
    return "himanshu";
  }
  function calc(a,b)
  {
    return a+b;
  
  }
  const name="Himo";
  let x=10;
  let y=20;
  return (
    <>
      <div>
        <h1>user variable with jsx </h1>
        <h2>value of variable is {name}</h2>
        <h3>{x+y}</h3>
        <h4>use of function with jsx </h4>
        <h5>{fun()}</h5>
        <h6>example of simple function </h6>
        <h3>{calc(54,66)}</h3>
      </div>
    </>
  )
}
function Example(){
  <div>
    <h1>this is an example of  react project</h1>
  </div>
}

export default App
