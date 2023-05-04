//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import SecondCounter from "./component/home.jsx"

// include your styles into the webpack bundle
import "../styles/index.css";

// //import your own components
// import Home from "./component/home.jsx";

// function CounterSimple(props) {
//     return (
//     <>
//     <div className="Cuerpo"></div>
// </>
//     )}

// function SimpleCounter() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//     <div>
//       <h1>{count.toString().padStart(6, '0')}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//     </>
//   );
// }




//render your react application
ReactDOM.render(<SecondCounter />, document.querySelector("#app"));
