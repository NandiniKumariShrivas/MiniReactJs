import "./App.css";
import React from "react"
import { useState } from "react";

function App() {
  const [weight,setWeight] = useState("")
  const [height,setHeight] = useState("")
  const [message,setMessage] =useState("")
  const [bmi,setBmi]=useState("")

  const bmiCalci =(event)=>
  {
    event.preventDefault()
    if(weight===0 ||height===0 || weight==="" || height==="" )
    {
      alert("please enter valid details")
    }
    else{

      
      const heightInMeters = height/100;
      const bmiResult = weight / (heightInMeters * heightInMeters);
      setBmi(bmiResult.toFixed(0));

      if(bmiResult<18)
      {
        setMessage("YOU ARE UNDERWEIGHT")

      }
     
      else if(bmiResult>18 && bmiResult<28)
      {
        setMessage("CONGRATULATION YOU ARE A HEALTHY PERSON")
      }
      else if(bmiResult>29.5)
      {
        setMessage("YOU ARE OVERWEIGHT")
      }

    }
  }

  const reload=()=>
  {
    window.location.reload()
  }
  return (
    <div className="App">
      <div className="Container">
        <h1>BMI Calculator</h1>
        <form  onSubmit={bmiCalci}>
          <div>
            <label>Weight (Kg)</label>
            <input 
            type="text" 
            placeholder="Enter the weight" 
            value={weight}
            onChange={(el)=>setWeight(el.target.value)} />
          </div>
          <div>
            <label>Height (Cm)</label>
            <input
             type="text"
              placeholder="Enter the height" 
              value={height} 
              onChange={(el)=>setHeight(el.target.value)}/>
          </div>
          <div>
            <button 
            className="btn" 
            type="submit"
            // onClick={reload}
            >
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reload}>
              Reload
            </button>
          </div>
         
        </form>

         <div className="center">
            <h3> Your BMI {bmi}</h3>
            <p style={{color:"#0077EE", fontSize:"50px" ,fontFamily:"fantasy"}}>{message}</p>
          </div>
      </div>
    </div>
  );
}

export default App;
