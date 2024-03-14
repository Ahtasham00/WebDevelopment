//isAww
import React,{useState} from  "react"

//useState return array 
//First element of array is current state value
//Second element of array is function
 

//let counter=10; 


function App2(){

  let [counter,setcount]=useState(15) //passing initial value and storing return values
  
  function increasevalue(){
    counter=counter+1;
    setcount(counter)
  }

  function removevalue(){
    counter=counter-1;
    setcount(counter)
  }
  
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