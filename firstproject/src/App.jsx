import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo1 from './Component/Demo1'
import Demo2 from './Component/Demo2'

function App() {
  return (
    <>
      <div>
        <h1>this is an example of component</h1>
      <Example></Example>
      <Demo1></Demo1>
      <Demo2></Demo2>
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
