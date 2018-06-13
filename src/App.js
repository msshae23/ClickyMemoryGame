import React from "react";
import Jumbotron from "./components/Header";
import MainGameContainer from "./components/MainContainer";
import "./App.css";


const App = () => (
  <div className="container-fluid mainContainer">
    <Jumbotron />
    <MainGameContainer /> 
  </div>
);

export default App;