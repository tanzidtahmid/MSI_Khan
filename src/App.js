import * as React from "react";
import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import AboutMe from "./components/AboutMe/AboutMe";
import SingleArticle from "./components/SingleArticle/SingleArticle";

function App() {
  return (
    <div className="App ">
      {/* <header className="App-header"> */}
       {/* <Home></Home> */}
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/full_article" element={<SingleArticle />} />
      </Routes>
       
      {/* </header> */}
    </div>
  );
}

export default App;
