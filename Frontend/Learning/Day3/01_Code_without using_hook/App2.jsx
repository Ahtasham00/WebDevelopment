
import React,{useState} from  "react"

let counter=10; 

function increasevalue(){
  counter=counter+1;
  console.log(counter)
}
function removevalue(){
  counter=counter-1;

}

function App2(){
  
    return (
		<>
			<h1>We are here to help you</h1>
      <h2>counter is here {counter}</h2>
      <button id="increasebtn" onClick={increasevalue}>Add value</button>
      <button id="decreasebtn" onClick={removevalue}>Remove value</button>
		</>
	);
}


export default App2;