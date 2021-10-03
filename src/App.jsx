import React, { useEffect } from "react";
import Img from "./Image.jsx";

import "./styles/main.css";

const App = () => {
   useEffect(() => {
      console.log("effect");
      console.log(process.env.NODE_ENV);
   });
   return <div className={"test-variables"}>
      <div style={{backgroundColor: "blueviolet"}}>Hello, World with hot reload!</div>
      <Img></Img>
   </div>
};

export default App;