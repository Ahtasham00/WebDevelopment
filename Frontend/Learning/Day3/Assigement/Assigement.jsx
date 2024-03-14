//isAww
import {useState} from "react"

function Assigement(){
    let [count,setcount]=useState(1)
    var msg=document.getElementById("Error")
    function increase(){
        if (count<20){
            count=count+1
            setcount(count)
            msg.innerHTML=""
        }
        else{   
             msg.innerHTML="Value greater then 20 not allowed"
        }
    }
    function decrease(){
        if (count>0){
            count=count-1
            setcount(count)
            msg.innerHTML=""
        }
        else{
            
            msg.innerHTML="Value lesser then 0 not allowed"
       }
    }
    return(
          <>
          <h1>Count number With limitation 0-20</h1>
          <h2>Value of count  : {count}</h2>
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
          <br />
          <span id="Error"></span>
        </>
    );
}

export default Assigement