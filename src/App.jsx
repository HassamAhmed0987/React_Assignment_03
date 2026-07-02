import React from "react";
import { useState } from "react";



function App() {

  const [counter, setCounter] = useState(1)

  function updateCounter(sign) {
    sign === "+" ? setCounter(counter => counter + 1) : setCounter(counter => counter - 1) 
  }
  







  return(
    <div>
      <h1>Counter</h1>
      <div style={{border: "1px solid black", width: "70px", padding: "5px 0", borderRadius: "20px", display: "flex", justifyContent: "space-between",alignItems:"center", overflow: "hidden"}}>
        <button style={{background: "transparent", border:"none", outline: "none", fontSize:"15px", fontWeight: "bolder"}} disabled={counter <= 1 ? true : false} onClick={() => updateCounter("-")}>-</button>
        <span style={{display: "inline-block", width: "20px", textAlign: "center"}}>{counter}</span>
        <button style={{background: "transparent", border:"none", outline: "none", fontSize:"15px", fontWeight: "bolder"}} disabled={counter >= 5 ? true : false} onClick={() => updateCounter("+")}>+</button>
      </div>
      <p>{counter === 5 ? "You cannot order more than 5 units.":""}</p>
    </div>
  )
}



export default App