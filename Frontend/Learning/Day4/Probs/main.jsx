import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Card from "./components/Card.jsx"
import './index.css'


//we can not pass array or object directly to function
//Eg  <Card values=[1,2,3,4] />    directly passing array not allowed
//Eg  <Card values={name:"alpha"}>   directly passing object not allowed
//------------------------------
//Eg let myObject={
//   name : "Alpha"
//   Age  : "Beta"
//} 
// <Card obj=myobject/>   //this is not allowed
//But <Card obj={myobject}>    //THIS IS ALLOWED   
//BY using curly brackets {}  mean passing as variable is Allowed
//Also    

//similarly IF we want to pass array we also have to use curly brackets
// <Card obj={Array={[1,2,3,4,]}}>   //Allowed

let myobj1={
  content:"This is fisr card",
  button: "clike here"
}




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card  name="Alpha" obj={myobj1}/>,
    <Card name="Beta"  obj={{content:"This is second card",
     button:"click me"}}/>,
    <Card />,
  </React.StrictMode>,
)
