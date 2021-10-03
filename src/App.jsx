import React, { useEffect } from "react";
import Img from "./Image.jsx";

import MyCard from "./Components/MyCard/MyCard.jsx";


import "./styles/main.css";

const App = () => {
   useEffect(() => {
      console.log("effect");
      console.log(process.env.NODE_ENV);
   });
   return <div className={"App"}>
      <div>Hello, World with hot reload!</div>
      <MyCard />
      <Img></Img>
   </div>
};

export default App;