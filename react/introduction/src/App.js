import React from "react";
import "./App.css";
import { userInfo } from "os";
import { Headline } from "./Headline";
// -------------first app---------------
// function App() {
//   const name = "Shahriar";
//   const element = <h1>Hello, {name}</h1>;
//   return (
//     <div className="App">
//       <header className="App-header">{element}</header>
//     </div>
//   );
// }

// -------------Format Name---------------
// function App() {
//   const person = {
//     name: "Shahrar",
//     age: 25
//   };
//   function formatName(person) {
//     return `${person.name} is ${person.age} years' old`;
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello, {formatName(person)}</h1>
//       </header>
//     </div>
//   );
// }

// ---------getGreeting-handle-empty-object----------
// function App() {
//   const person = {
//     name: "Shahrar",
//     age: 25
//   };
//   function formatName(person) {
//     return `${person.name} is ${person.age} years' old`;
//   }
//   function getGreeting(person) {
//     if (person) {
//       return <h1>{formatName(person)}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;
//   }

//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <h1>{getGreeting(person)}</h1>
//     //   </header>
//     // </div>

//     <div className="App">
//       <header className="App-header">
//         <h1>{getGreeting()}</h1>
//       </header>
//     </div>
//   );
// }

//-----------get image url-------------
// function App() {
//   const person = {
//     name: "Shahrar",
//     age: 25,
//     url:
//       "https://shahmanmastery.com/wp-content/uploads/2019/10/home-shahlaptop.png"
//   };
//   function formatName(person) {
//     return `${person.name} is ${person.age} years' old`;
//   }
//   function getGreeting(person) {
//     if (person) {
//       return <h1>{formatName(person)}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img
//           src={person.url}
//           alt=""
//           style={{ maxWidth: 500, marginTop: 25, marginBottom: -50 }}
//         ></img>
//         <h2>{getGreeting(person)}</h2>
//       </header>
//     </div>
//   );
// }

//------------------function component--------------
// function App() {
//   return <Headline />;
// }

// function Headline() {
//   const greeting = "Hello Function Component!";

//   return (
//     <div>
//       <header className="App-header">
//         <h1>{greeting}</h1>
//       </header>
//     </div>
//   );
// }

//---------------fucntion component: props-----------
// function App() {
//   const greeting = "Hello Function Component!";
//   return <Headline value={greeting} />;
// }

// function Headline(props) {
//   return (
//     <div>
//       <header className="App-header">
//         <h1>{props.value}</h1>
//       </header>
//     </div>
//   );
// }

//---------------get image url: props-----------
function App() {
  const person = {
    name: "Shahrar",
    age: 25,
    url:
      "https://shahmanmastery.com/wp-content/uploads/2019/10/home-shahlaptop.png"
  };

  return <Headline value={person} />;
}

export default App;
