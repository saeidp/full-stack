import React, { useState } from "react";
import "./App.css";
import { HR } from "./components/HR";
import { userInfo } from "os";
import { Greet } from "./components/Greet";

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
// // headline in another file (Headline.jsx)
// function App() {
//   const person = {
//     name: "Shahrar",
//     age: 25,
//     url:
//       "https://shahmanmastery.com/wp-content/uploads/2019/10/home-shahlaptop.png"
//   };

//   return <Headline value={person} />;
// }

// -------------dummy-------------------
// function App() {
//   const people = [
//     {
//       name: "shahriar",
//       age: 25
//     },
//     {
//       name: "saeid",
//       age: 54
//     }
//   ];

//   return <HR value={people} />;
// }

//-------------arrow function-------------
// const App = () => {
//   const greeting = "Hello Function Component!";

//   return <Headline value={greeting} />;
// };

// const Headline = ({ value }) => {
//   return <h1>{value}</h1>;
// };

//------------react state, hook, greeting-----------
// const App = () => {
//   return <Headline />;
// };

// const Headline = () => {
//   const [greeting, setGreeting] = useState("Hello Function Component!");
//   const handleChange = e => {
//     setGreeting(e.target.value);
//   };
//   return (
//     <div className="App-header">
//       <h1>{greeting}</h1>

//       <input type="text" value={greeting} onChange={handleChange} />
//     </div>
//   );
// };

//--------------call back function--------------------
// IT IS POSSIBLE TO PASS A FUNCTION TO A CHILD COMPONENT
// const App = () => {
//   const [greeting, setGreeting] = useState("Hello Function Component");

//   const handleChange = e => setGreeting(e.target.value);

//   return <Headline headline={greeting} onChangeHeadLine={handleChange} />;
// };

// const Headline = props => {
//   const headline = props.headline;
//   const onChangeHeadline = props.onChangeHeadLine;

//   return (
//     <div className="App-header">
//       <h1>{headline}</h1>

//       <input type="text" value={headline} onChange={onChangeHeadline} />
//     </div>
//   );
// };

// ---------------------children - call back ---------------------
// USE {CHILDREN} to pass Set Greeting: to the input component
// Send to two components
// const App = () => {
//   const [greeting, setGreeting] = useState("Hello Function Component");

//   const handleChange = e => setGreeting(e.target.value);

//   return (
//     <div>
//       <Headline headline={greeting} />

//       <Input inputValue={greeting} onChangeInput={handleChange}>
//         Set Greeting:
//       </Input>
//     </div>
//   );
// };

// const Headline = props => {
//   const headline = props.headline;

//   return (
//     <div>
//       <h1>{headline}</h1>
//     </div>
//   );
// };

// const Input = ({ inputValue, onChangeInput, children }) => (
//   <label>
//     {children}
//     <input type="text" value={inputValue} onChange={onChangeInput} />
//   </label>
// );

// --------------------override, using default function---------------
// const App = () => {
//   const sayHello = () => console.log("Hello");
//   return <Button handleClick={sayHello} />;
//   // return <Button handleClick={null} />;
// };
// const Button = ({ handleClick }) => {
//   const sayDefault = () => console.log("Default");
//   const onClick = handleClick || sayDefault;
//   return (
//     <button type="button" onClick={onClick}>
//       Button
//     </button>
//   );
// };

// ---------------dummy--------------------
// const App = () => {
//   const person = {
//     name: "Shahrar",
//     age: 25
//   };

//   const Print = () => {
//     console.log(`${person.name} is ${person.age} years' old.`);
//   };

//   // return <Headline myPerson={person} myPrint={Print} />;
//   return <Headline myPerson={person} myPrint={null} />;
// };

// const Headline = ({ myPerson, myPrint }) => {
//   const defaultPrint = () => console.log("Default");
//   const handleClick = myPrint || defaultPrint;

//   return (
//     <div class="App-header">
//       <button type="button" onClick={handleClick}>
//         Print Button
//       </button>
//     </div>
//   );
// };

//-----------------default (es6 method)----------------
import React from "react";
const App = () => {
  const sayHello = () => console.log("Hello");
  return <Button handleClick={sayHello} />;
};
const Button = ({ handleClick = () => console.log("Default") }) => (
  <button type="button" onClick={handleClick}>
    Button
  </button>
);

export default App;
