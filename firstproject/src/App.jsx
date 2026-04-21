import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo1 from './Component/Demo1'
import Demo2 from './Component/Demo2'
import Demo3 from './Component/Demo3'
import CounterComponent from './Component/CounterComponent';
import ShowHide from './Component/ShowHide';
import LiveInput from './Component/LiveInput';
import ThemeToggle from './Component/ThemeToggle';
import LikeButton from './Component/LikeButton';
import ThankYou from './Component/ThankYou';
function App() {
   return (
    <div>
      <CounterComponent />
      <ShowHide />
      <LiveInput />
      <ThemeToggle />
      <LikeButton />
      <ThankYou />
    </div>
  );
//   let data="Demo";
           
//  function Updata()
//  {
//     data="Example";
    
    
//  }

//   function Callfun()
//   {
//     alert("Function Called")
//   }

// function Apple(name)
//   {
//     alert("you click on apple button")
//     alert("you clicked on banana button")
//   }
  
//   function Banana()
//   {
//     alert("you click on banana button")
//   }
  
//   function Fun()
//   {
//     return "himanshu";
//   }
//   function Calc(a,b)
//   {
//     return a+b;
  
//   }
// const name="Himo";
//   let x=10;
//   let y=20;
// const fruit1=(name)=>{

// }
// const fruit=()=>{
//   alert("first parameter")
// }
//   return (
//     <>
//       <div>
//         <Demo1 />
//         <Demo2 />
//         <Demo3 />
//         <h1>state in react</h1>
//         <h1>{data}</h1>
//         <button onClick={Updata}>click to change value</button>

//         <button onClick={Fun}>click to call function </button>
//         <button onClick={()=>fruit()}>Arrow function</button>
//         <button onClick={()=>fruit1("apple")}>apple button</button>
//         <button onClick={()=>fruit1("banana")}>banana button</button>
//         <button onClick={Apple}>Apple button</button>
//         <button onClick={Apple}>Banana button</button>

         
//         <h1>user variable with jsx </h1>
//         <h2>value of variable is {name}</h2>
//         <h3>{x+y}</h3>
//         <h4>use of function with jsx </h4>
//         <h5>{Fun()}</h5>
//         <h6>example of simple function </h6>
//         <h3>{Calc(54,66)}</h3>
//         <h1>Welcome To My New Project</h1>
//       </div>
//     </>
//   )
// }
// function Example(){
//   <div>
//     <h1>this is an example of  react project</h1>
//   </div>
// }
}
export default App