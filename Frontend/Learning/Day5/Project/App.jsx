import { useState } from "react";
import "./App.css";
import "./index.css"
function App() {
 let [color,setColor]=useState("blue") 
 
 function Changer(val){
    setColor(val)
 }

	return (
		<>
    <div id="background" style={{backgroundColor:color}} className="absolute inset-0 h-screen w-screen">
		<div className="bg-brown-400 h-10 w-300 absolute inset-x-0 bottom-0 flex flex-row">
        <button className="bg-black text-white rounded-md mx-2  basis-1/5" onClick={() => Changer("black")}>black</button>
        <button className="bg-white text-black rounded-md mx-2 basis-1/5 " onClick={() => Changer("white")}>white</button>
        <button className="bg-blue-400 text-black rounded-md mx-2 basis-1/5 " onClick={() => Changer("blue")}>blue</button>
        <button className="bg-green-600 text-black rounded-md mx-2 basis-1/5 " onClick={() => Changer("green")}>green</button>
    </div>
    </div>
		</>
	);
}

export default App;
